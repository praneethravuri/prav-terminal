<template>
  <div class="terminal-output">
    <div class="show-previous-commands" id="prev-commands">
      <div v-for="(command, i) in storeCommand" :key="i">
        <span>
          <Prompt /><span class="color-orange ">{{ command }}</span>
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
        <div v-else-if="command === 'joke'">
          <Joke />
        </div>
        <div v-else-if="command === 'education'">
          <Education />
        </div>
        <div v-else-if="command === 'skills'">
          <Skills />
        </div>
        <div v-else-if="command === 'repo'">
          <p>Opening the github repository...</p>
        </div>
        <div v-else-if="command === 'date'">
          <p>{{ formattedDateTime }}</p>
        </div>

        <div v-else>
          <p><span class="color-pink-red">Invalid command : '{{ command }}'</span>. Try <span
              class="color-orange">'help'</span> to get started</p>
        </div>
      </div>
    </div>

    <div class="input-prompt">
      <label for="prompt">
        <Prompt />
      </label>
      <form @submit.prevent>
        <span class="predicted-command">{{ predictedCommand }}</span>
        <input aria-label="input-prompt" for="input-prompt" aria-labelledby="input-prompt" id="command-input"
          :class="{ 'color-pink-red': !isCommandCorrect, 'color-white': isCommandCorrect }" ref="inputField" type="text"
          @keyup.enter="displayCommandOutput" @keyup.up="handleUpArrow" @keyup.down="handleDownArrow" autofocus
          v-model="inputValue" />
      </form>

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
import Joke from './Joke.vue';
import Education from "./Education.vue";
import Skills from './Skills.vue';

export default {
  name: "Command",
  components: {
    Help,
    Prompt,
    Projects,
    About,
    Contact,
    Experience,
    Joke,
    Education,
    Skills
  },
  data() {
    return {
      inputValue: '',
      currentTab: '',
      storeCommand: [],
      correctCommands: ["help", "projects", "about", "experience", "contact", "clear", "joke", "education", "skills", "date", "repo", "date"],
      currentIndex: -1,
      previousCommands: [],
      formattedDateTime: '',
      predictedCommand: '',
    };
  },
  computed: {
    isCommandCorrect() {
      const command = this.inputValue.toLowerCase();
      return this.correctCommands.includes(command);
    },
  },
  methods: {
    addToCommandHistory(command) {
      this.storeCommand.push(command);
      this.previousCommands.push(command);
      this.currentIndex = this.previousCommands.length;
    },
    displayCommandOutput() {
      if (this.inputValue === "clear") {
        this.storeCommand = []; // Clear the storeCommand array
      } else if (this.inputValue.toLowerCase().trim() === "repo") {
        const command = this.inputValue.toLowerCase().trim();
        this.addToCommandHistory(command);
        window.open("https://github.com/praneethravuri/prav-terminal", "_blank");
      } else if (this.inputValue.toLowerCase().trim() === "date") {
        const command = this.inputValue.toLowerCase().trim();
        this.addToCommandHistory(command);
        const date = new Date();
        this.formattedDateTime = this.formatDateTime(date);
      } else {
        const command = this.inputValue.toLowerCase().trim();
        this.addToCommandHistory(command);
      }

      this.inputValue = '';
      this.predictedCommand = '';
      this.$nextTick(() => {
        this.setFocusOnInput();
        const inputField = this.$refs.inputField;
        const inputLength = inputField.value.length;
        inputField.selectionStart = inputLength;
        inputField.selectionEnd = inputLength;
      });
    },
    setFocusOnInput() {
      this.$refs.inputField.focus();
    },
    handleUpArrow() {
      this.predictedCommand = '';
      if (this.currentIndex > 0) {
        this.currentIndex--;
        this.inputValue = this.previousCommands[this.currentIndex];
      }
    },
    handleDownArrow() {
      this.predictedCommand = '';
      if (this.currentIndex < this.previousCommands.length - 1) {
        this.currentIndex++;
        this.inputValue = this.previousCommands[this.currentIndex];
      } else {
        this.currentIndex = this.previousCommands.length;
        this.inputValue = '';
      }
    },
    formatDateTime(date) {
      const year = date.getFullYear();
      const month = date.getMonth();
      const day = date.getDate();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();

      const formattedMonth = String(month + 1).padStart(2, '0');
      const formattedDay = String(day).padStart(2, '0');
      const formattedHours = String(hours).padStart(2, '0');
      const formattedMinutes = String(minutes).padStart(2, '0');
      const formattedSeconds = String(seconds).padStart(2, '0');

      return `${formattedMonth}/${formattedDay}/${year} ${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    },
  },
  mounted() {
    this.setFocusOnInput();
    const inputField = this.$refs.inputField;

    inputField.addEventListener("keydown", (event) => {
      const input = this.inputValue.toLowerCase().trim();
      const command = this.correctCommands.find(cmd => cmd.startsWith(input));

      if (event.key === "Tab" && command) {
        this.inputValue = command;
        event.preventDefault();
      } else {
        if (command && input) {
          this.predictedCommand = command;
        } else {
          this.predictedCommand = '';
        }
      }
    });

    inputField.addEventListener("keyup", (event) => {
      if (event.key === "Backspace" && !this.inputValue) {
        this.predictedCommand = '';
      }
    });
  },

};
</script>

<style lang="scss" scoped>
.show-previous-commands div,
span {
  margin: 30px 0px;
}

.input-prompt {
  display: flex;


  & input[type=text] {
    margin-left: 5px;
  }
}

form {
  flex-grow: 1;
  position: relative;
}

.predicted-command {
  position: absolute;
  left: 0;
  top: 0;
  white-space: pre;
  margin: 0px 0px 0px 5px;
  color: rgb(69, 69, 69);
  z-index: -1;
}
</style>