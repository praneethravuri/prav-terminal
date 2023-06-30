<template>
  <div class="terminal-output">
    <div class="show-previous-commands" id="prev-commands">
      <div v-for="(command, i) in storeCommand" :key="i">
        <span>
          <Prompt />{{ command }}
        </span>

        <div v-if="command === 'help'">
          <Help />
        </div>
        <div v-else-if="command === 'projects'">
          <Projects />
        </div>
        <div v-else-if="command === 'about'">
          <About />
        </div>
        <div v-else-if="command === 'experience'">
          <Experience />
        </div>
        <div v-else-if="command === 'contact'">
          <Contact />
        </div>

        <div v-else>
          <p class="red-text">Invalid command : '{{ command }}'</p>
        </div>
      </div>
    </div>

    <div class="input-prompt">
      <label for="prompt">
      <Prompt />
    </label>
    <input id="command-input" ref="inputField" type="text" @keyup.enter="displayCommandOutput" @keyup.up="handleUpArrow"
      @keyup.down="handleDownArrow" autofocus v-model="inputValue" />
    </div>
  </div>
</template>

<script>
import Projects from './Projects.vue';
import Prompt from './Prompt.vue';
import Help from './Help.vue';
import About from './About.vue';
import Contact from './Contact.vue';
import Experience from './Experience.vue';

export default {
  name: "Command",
  components: {
    Help,
    Prompt,
    Projects,
    About,
    Contact,
    Experience
  },
  data() {
    return {
      inputValue: '',
      currentTab: '',
      storeCommand: [],
      correctCommands: ["help", "projects"],
      currentIndex: -1,
      previousCommands: [],
    };
  },
  methods: {
    displayCommandOutput() {
      if (this.inputValue === "clear") {
        this.storeCommand = []; // Clear the storeCommand array
      } else {
        const command = this.inputValue.toLowerCase(); // Convert input to lowercase
        this.storeCommand.push(command);
        this.previousCommands.push(command); // Store the command
        this.currentIndex = this.previousCommands.length; // Update the currentIndex
      }
      this.inputValue = '';
      this.$nextTick(() => {
        this.setFocusOnInput();
      });
    },
    setFocusOnInput() {
      this.$refs.inputField.focus();
    },
    handleUpArrow() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
        this.inputValue = this.previousCommands[this.currentIndex];
      }
    },
    handleDownArrow() {
      if (this.currentIndex < this.previousCommands.length - 1) {
        this.currentIndex++;
        this.inputValue = this.previousCommands[this.currentIndex];
      } else {
        this.currentIndex = this.previousCommands.length;
        this.inputValue = '';
      }
    },
  },
  mounted() {
    this.setFocusOnInput();
  },
};
</script>

<style>
.show-previous-commands div,
span {
  margin: 30px 0px;
}

.input-prompt{
  display: flex;
}
</style>
