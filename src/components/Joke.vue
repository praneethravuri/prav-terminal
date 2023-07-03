<template>
  <div>
    <div v-if="joke">
      <p> - {{ joke.question }}</p>
      <p> - {{ joke.punchline }}</p>
    </div>
    <div v-else-if="error">
      <p>{{ error }}</p>
    </div>
  </div>
</template>
  
<script>
export default {
  name: "Joke",
  data() {
    return {
      joke: null,
      error: "",
    };
  },
  async mounted() {
    try {
      await this.fetchJoke();
    } catch (error) {
      this.error = "An error occurred while fetching a joke. Please try again.";
      console.error(error);
    }
  },
  methods: {
    async fetchJoke() {
      const response = await fetch(
        "https://backend-omega-seven.vercel.app/api/getjoke"
      );
      const data = await response.json();

      if (!response.ok) {
        throw new Error("Error fetching joke");
      }

      if (Array.isArray(data) && data.length > 0) {
        this.joke = data[0];
      } else {
        throw new Error("Invalid joke response");
      }
    },
  },
};
</script>
  