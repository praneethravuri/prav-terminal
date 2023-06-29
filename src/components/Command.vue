<template>
    <div class="terminal-input">
      <div class="show-previous-commands">
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
          <div v-else>
            <p>Unknown Command: {{ command }}</p>
          </div>
        </div>
      </div>
  
      <label for="prompt">
        <Prompt />
      </label>
      <input
        ref="inputField"
        type="text"
        @keyup.enter="displayCommandOutput"
        autofocus
        v-model="inputValue"
      />
    </div>
  </template>
  
  <script>
  import Projects from './Projects.vue';
  import Prompt from './Prompt.vue';
  import Help from './Help.vue';
  
  export default {
    name: "Command",
    components: {
      Help,
      Prompt,
      Projects,
    },
    data() {
      return {
        inputValue: '',
        currentTab: '',
        storeCommand: [],
        correctCommands: ["help", "projects"],
      };
    },
    methods: {
      displayCommandOutput() {
        if (this.inputValue === "cls") {
          // Default to Home tab if input doesn't match any condition
          this.storeCommand = [];
        } else {
          this.storeCommand.push(this.inputValue);
        }
        this.inputValue = '';
        this.$nextTick(() => {
          this.setFocusOnInput();
        });
      },
      setFocusOnInput() {
        this.$refs.inputField.focus();
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
  </style>
  