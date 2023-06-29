<template>
  <div class="main">

    <div class="banner-text">
      <p>PRAV [Version 3.0.0]</p>
      <p>(c) PRAV Corporation. All rights reserved.</p>
    </div>


    <div class="header">
      <Header />
    </div>

    <p>Type 'help' to see a list of available commands</p>

    <div class="command-prompt">
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