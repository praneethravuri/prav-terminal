<template>
  <p>Welcome! Here are all the available commands: </p>
  <br>
  <div class="help-options">
    <p v-for="command in commandList" :key="command.commandName">
      <span class="content-heading" >{{ command.commandName }}</span>
      <span>&nbsp;- {{ command.commandDescription }}</span>
    </p>
  </div>
</template>
  
<script>
export default {
  name: "Help",
  data() {
    return {
      commandList: [
        { commandName: "help", commandDescription: "Displays a list of all available commands" },
        { commandName: "about", commandDescription: "Provides information about me" },
        { commandName: "experience", commandDescription: "Shows my work experience" },
        { commandName: "projects", commandDescription: "Lists all the projects I have worked on" },
        { commandName: "skills", commandDescription: "Lists all the technologies I have worked with" },
        { commandName: "contact", commandDescription: "Provides my contact information" },
        { commandName: "education", commandDescription: "Shows my education history" },
        { commandName: "repo", commandDescription: "Open this project's GitHub repository" },
        {commandName: "clear", commandDescription: "Clears the terminal"},
      ]
    };
  }
};
</script>
  ``
<style lang="scss" scoped>
@import "../styles/_variables.scss";
.help-options span,
p {
  padding: 0;
}

.content-heading{
  color: $content-heading-color;
}
</style>