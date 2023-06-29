<template>
  <div class="main">

    <div class="banner-text m-30">
      <p>PRAV [Version 3.0.0]</p>
      <p>(c) PRAV Corporation. All rights reserved 2023.</p>
    </div>


    <div class="header">
      <Header />
    </div>

    <div class="instructions">
      <p>Type 'help' to see a list of available commands</p>
      <p>Type 'clear' to clear the terminal</p>
      <p>Use up and down arrow keys to select previous commands</p>
    </div>

    <div class="command-prompt m-30">
      <Command />
    </div>

  </div>
</template>

<script>

import Header from './components/Header.vue';
import Prompt from './components/Prompt.vue';
import Command from './components/Command.vue';

export default {
  name: "App",
  components: {
    Header,
    Prompt,
    Command
  }
}

</script>


<style scoped lang="scss">
@import "./styles/main.scss";
</style>