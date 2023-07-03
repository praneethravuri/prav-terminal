<template>
  <div>
    <div class="main" id="main">

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
  mounted() {
    document.getElementById("mainContent").addEventListener("keypress", function (event) {
      document.getElementById("command-input").focus();
    });
  }
}

</script>

<style scoped lang="scss">
@import "./styles/main.scss";
@import "./styles/_variables.scss";

.main {
  margin: 15px auto;
  width: 99%;
  height: 95vh;
  border: 3px solid $orange;
  border-radius: 8px;
  overflow: hidden;

  &-content {
    overflow-y: auto;
    height: 100%;
    margin: 10px;
  }
}
</style>
