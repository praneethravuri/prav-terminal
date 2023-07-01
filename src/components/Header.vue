<template>
    <div class="banner-text">
        <p><Prompt /> (c) PRAV. All rights reserved 2023.</p>
        <p>
            <span><a href="https://github.com/praneethravuri" target="_blank">Github</a></span> /
            <span><a href="https://www.linkedin.com/in/praneeth-ravuri2500/" target="_blank">LinkedIn</a></span> /
            <span><a href="mailto:prav2500@gmail.com">Email</a></span> /
            <span><a href="https://drive.google.com/file/d/1AiUdUmqhrWz8wlmGVeOhDD2Pr5CBxW7C/view" target="_blank">Resume</a></span>
        </p>
    </div>

    <div class="ascii">
        <pre id="ascii-art" class="green-text">{{ name }}</pre>
    </div>

    <div class="instructions">
        <p> - Type <span class="green-text">help</span> to see a list of available commands</p>
        <p> - Type <span class="green-text">clear</span> to clear the terminal</p>
        <p> - Use <span class="green-text">up</span> and <span class="green-text">down</span> arrow keys to select previous commands</p>
        <p> - Click on <span class="green-text">prompt</span> to refresh the page</p>
        <p> - You can type a command even when the input is out of focus</p>
    </div>
</template>


<script>

import Prompt from './Prompt.vue';

export default {
    name: "Header",
    components: {
        Prompt
    },
    data() {
        return {
            name: `
██████╗░██████╗░░█████╗░███╗░░██╗███████╗███████╗████████╗██╗░░██╗  ██████╗░░█████╗░██╗░░░██╗██╗░░░██╗██████╗░██╗
██╔══██╗██╔══██╗██╔══██╗████╗░██║██╔════╝██╔════╝╚══██╔══╝██║░░██║  ██╔══██╗██╔══██╗██║░░░██║██║░░░██║██╔══██╗██║
██████╔╝██████╔╝███████║██╔██╗██║█████╗░░█████╗░░░░░██║░░░███████║  ██████╔╝███████║╚██╗░██╔╝██║░░░██║██████╔╝██║
██╔═══╝░██╔══██╗██╔══██║██║╚████║██╔══╝░░██╔══╝░░░░░██║░░░██╔══██║  ██╔══██╗██╔══██║░╚████╔╝░██║░░░██║██╔══██╗██║
██║░░░░░██║░░██║██║░░██║██║░╚███║███████╗███████╗░░░██║░░░██║░░██║  ██║░░██║██║░░██║░░╚██╔╝░░╚██████╔╝██║░░██║██║
╚═╝░░░░░╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚══╝╚══════╝╚══════╝░░░╚═╝░░░╚═╝░░╚═╝  ╚═╝░░╚═╝╚═╝░░╚═╝░░░╚═╝░░░░╚═════╝░╚═╝░░╚═╝╚═╝ V 3.19.2`,
        };
    },
};
</script>

<style lang="scss" scoped>

.name div{
    width: 10px;
}

</style>
