<template>
    <div class="banner-text">
        <p>PRAV</p>
        <p>(c) PRAV Corporation. All rights reserved 2023.</p>
    </div>

    <div class="name">
        <p v-html="name" class="green-text"></p>
    </div>

    <div class="instructions">
        <p> - Type <span class="green-text">help</span> to see a list of available commands</p>
        <p> - Type <span class="green-text">clear</span> to clear the terminal</p>
        <p> - Use <span class="green-text">up</span> and <span class="green-text">down</span> arrow keys to select previous
            commands</p>
        <p> - Click on <span class="green-text">prompt</span> to refresh the page</p>
        <p> - You can type a command even when the input is out of focus</p>
    </div>
</template>

<script>
export default {
    name: "Header",
    data() {
        return {
            name: `
██████╗░██████╗░░█████╗░███╗░░██╗███████╗███████╗████████╗██╗░░██╗  ██████╗░░█████╗░██╗░░░██╗██╗░░░██╗██████╗░██╗
██╔══██╗██╔══██╗██╔══██╗████╗░██║██╔════╝██╔════╝╚══██╔══╝██║░░██║  ██╔══██╗██╔══██╗██║░░░██║██║░░░██║██╔══██╗██║
██████╔╝██████╔╝███████║██╔██╗██║█████╗░░█████╗░░░░░██║░░░███████║  ██████╔╝███████║╚██╗░██╔╝██║░░░██║██████╔╝██║
██╔═══╝░██╔══██╗██╔══██║██║╚████║██╔══╝░░██╔══╝░░░░░██║░░░██╔══██║  ██╔══██╗██╔══██║░╚████╔╝░██║░░░██║██╔══██╗██║
██║░░░░░██║░░██║██║░░██║██║░╚███║███████╗███████╗░░░██║░░░██║░░██║  ██║░░██║██║░░██║░░╚██╔╝░░╚██████╔╝██║░░██║██║
╚═╝░░░░░╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚══╝╚══════╝╚══════╝░░░╚═╝░░░╚═╝░░╚═╝  ╚═╝░░╚═╝╚═╝░░╚═╝░░░╚═╝░░░░╚═════╝░╚═╝░░╚═╝╚═╝ V 3.0.0`,
        };
    },
};
</script>

<style lang="scss" scoped>

</style>
