<template>
    <div class="banner-text">
        <p>
            <Prompt />(c) PRAV. All rights reserved 2023.
        </p>
        <p class="m-30">
            <span><a href="https://github.com/praneethravuri" target="_blank">Github</a></span> /
            <span><a href="https://www.linkedin.com/in/prav25/" target="_blank">LinkedIn</a></span> /
            <span><a href="mailto:pravdevrav@gmail.com">Email</a></span> /
            <span><a href="https://drive.google.com/file/d/1f2JMA1AWkstHzQg94QZNgl9sE4fgB9VH/view?usp=sharing"
                    target="_blank">Resume</a></span>
        </p>
    </div>

    <div class="ascii">
        <pre id="ascii-art">{{ name }}</pre>
    </div>

    <div class="instructions">
        <p> - Type <span class="main-text">help</span> to see a list of available commands</p>
        <p> - Type <span class="main-text">clear</span> to clear the terminal</p>
        <p> - Use <span class="main-text">up</span> and <span class="main-text">down</span> arrow keys to toggle between
            previous commands</p>
        <p> - Press on <span class="main-text">tab</span> key to auto complete the command</p>
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
            name: "Error occurred while rendering ascii art",
        };
    },
    mounted() { // Corrected the name of the lifecycle hook to mounted
        try {
            this.name = `
██████╗░██████╗░░█████╗░███╗░░██╗███████╗███████╗████████╗██╗░░██╗  ██████╗░░█████╗░██╗░░░██╗██╗░░░██╗██████╗░██╗
██╔══██╗██╔══██╗██╔══██╗████╗░██║██╔════╝██╔════╝╚══██╔══╝██║░░██║  ██╔══██╗██╔══██╗██║░░░██║██║░░░██║██╔══██╗██║
██████╔╝██████╔╝███████║██╔██╗██║█████╗░░█████╗░░░░░██║░░░███████║  ██████╔╝███████║╚██╗░██╔╝██║░░░██║██████╔╝██║
██╔═══╝░██╔══██╗██╔══██║██║╚████║██╔══╝░░██╔══╝░░░░░██║░░░██╔══██║  ██╔══██╗██╔══██║░╚████╔╝░██║░░░██║██╔══██╗██║
██║░░░░░██║░░██║██║░░██║██║░╚███║███████╗███████╗░░░██║░░░██║░░██║  ██║░░██║██║░░██║░░╚██╔╝░░╚██████╔╝██║░░██║██║
╚═╝░░░░░╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚══╝╚══════╝╚══════╝░░░╚═╝░░░╚═╝░░╚═╝  ╚═╝░░╚═╝╚═╝░░╚═╝░░░╚═╝░░░░╚═════╝░╚═╝░░╚═╝╚═╝
      `;
        } catch (error) {
        }
    }
};
</script>


  
<style lang="scss" scoped>
@import "../styles/_variables.scss";

.main-text {
    color: $primary-color;
}

.name div {
    width: 10px;
}

.ascii,
.ascii-art {
    font-size: 16px;
    line-height: 1.25;
    margin: 30px 0px;
}
</style>
  
