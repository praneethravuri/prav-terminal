<template>
    <div class="help-options m-30">
      <table>
        <thead>
          <tr>
          </tr>
        </thead>
        <tbody>
          <tr v-for="command in commandList" :key="command.commandName">
            <td>{{ command.commandName }}</td>
            <td> - {{ command.commandDescription }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    name: "Help",
    data() {
      return {
        commandList: [
          { commandName: "help", commandDescription: "show list of all available commands" },
          { commandName: "projects", commandDescription: "show list of all projects" },
        ]
      };
    }
  };
  </script>
  ``
<style>
td{
    padding-right: 25px;
}
</style>