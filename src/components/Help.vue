<template>
  <div class="help-options">
    <p v-for="command in commandList" :key="command.commandName">
      <span class="color-orange">{{ command.commandName }}</span>
      <span>&nbsp;- {{ command.commandDescription }}</span>
    </p>
  </div>
</template>
  
<script>
export default {
  name: "Help",
  data() {
    return {
      commandList: [
          { commandName: "help", commandDescription: "Displays a list of all available commands" },
          { commandName: "about", commandDescription: "Provides information about me" },
          { commandName: "experience", commandDescription: "Shows my work experience" },
          { commandName: "projects", commandDescription: "Lists all the projects I have worked on" },
          { commandName: "contact", commandDescription: "Shares my contact information" },
          { commandName: "education", commandDescription: "Shows where I have studied" },
          { commandName: "joke", commandDescription: "Generates a random programming joke" }
      ]
    };
  }
};
</script>
  ``
<style lang="scss" scoped>
.help-options span,
p {
  padding: 0;
}
</style>