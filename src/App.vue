<template>
  <div>
    <div class="main">

      <div class="main-content" id="mainContent">
        <div class="header">
          <Header />
        </div>

        <div class="command-prompt m-30" id="commandPrompt">
          <Command />
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Command from './components/Command.vue';

export default {
  name: "App",
  components: {
    Header,
    Command
  },
}
</script>

<style scoped lang="scss">
@import "./styles/main.scss";
</style>
