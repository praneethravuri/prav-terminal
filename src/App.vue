<template>
  <div class="main">

    <div class="header">
      <Header />
    </div>

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