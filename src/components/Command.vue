<template>
    <div class="terminal">
        <div class="terminal-output" ref="outputContainer">
            <div v-for="message in messages" :key="message.id" class="terminal-message">
                <span><Prompt /><span class="terminal-text" v-html="message.text"></span></span>
            </div>
        </div>
        <div class="terminal-input">
            <component :is="PromptComponent"></component>
            <input v-model="currentInput" @keyup.enter="processInput" autofocus />
        </div>
        <component v-if="showProjects" :is="Projects"></component>
        <component v-if="showHelp" :is="Help"></component>
    </div>
</template>
  
  
<script>
import { ref, reactive, nextTick } from 'vue';

import Projects from './Projects.vue'; // Import your Projects component here
import Prompt from './Prompt.vue';
import Help from './Help.vue';

export default {
    setup() {
        const messages = reactive([]);
        const currentInput = ref('');
        const showProjects = ref(false);
        const showHelp = ref(false);

        const processInput = () => {
            const input = currentInput.value.trim();

            if (input !== '') {
                // Process the input and generate the appropriate component
                const generatedComponent = generateComponent(input);

                // Add the input and the generated component to the terminal's messages
                messages.push({ id: Date.now() + 1, prompt: '', text: generatedComponent });

                // Clear the input field
                currentInput.value = '';

                // Scroll to the bottom of the output container
                nextTick(() => {
                    const outputContainer = outputContainerRef.value;
                    outputContainer.scrollTop = outputContainer.scrollHeight;
                });
            }
        };

        const outputContainerRef = ref(null);
        const PromptComponent = Prompt;

        const generateComponent = (input) => {
            // Logic to generate the component based on the input
            // Replace this with your own logic

            if (input === 'projects') {
                showProjects.value = true; // Show the Projects component
                return ''; // Return an empty string as the generated component
            } else if (input === 'help') {
                showHelp.value = true;
            } else if (input === 'image') {
                return '<img src="path/to/image.jpg" alt="Generated Image">';
            } else {
                return `Unknown command: ${input}`;
            }
        };

        return {
            messages,
            currentInput,
            showProjects,
            showHelp,
            processInput,
            outputContainerRef,
            Projects,
            Help,
            PromptComponent
        };
    },
    components: {
        Projects,
        Prompt,
        Help // Register Projects component
    }
};
</script>
  
<style>
/* CSS styles remain the same */
</style>
