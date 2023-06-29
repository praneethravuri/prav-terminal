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
                <div v-if="command === 'projects'">
                    <Projects />
                </div>

            </div>
        </div>

        <label for="prompt">
            <Prompt />
        </label>
        <input type="text" @keyup.enter="displayCommandOutput" autofocus v-model="inputValue">
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
            correctCommands: ["help", "projects"]

        };
    },
    methods: {
        displayCommandOutput() {
            if (this.correctCommands.includes(this.inputValue)) {
                this.storeCommand.push(this.inputValue);
            } else if (this.inputValue === "cls") {
                // Default to Home tab if input doesn't match any condition
                this.storeCommand = [];
            } else {
                console.log("invalid option")
            }
            this.inputValue = '';
        },
    },
};
</script>
  