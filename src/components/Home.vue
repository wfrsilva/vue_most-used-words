<template>
  <v-container fluid>
    <v-form>
      <v-file-input
        label="Selecione as Legendas"
        prepend-icon="mdi-message-text"
        append-outer-icon="mdi-send"
        outlined
        multiple
        chips
        v-model="files"
        @click:append-outer="processSubtitles"
      />
    </v-form>

    <div clas="pills">
      <Pill v-for="word in groupedWords" :key="word.name" :name="word.name" :amount="word.amount" />
    </div>
  </v-container>
</template>

<script>
<<<<<<< HEAD
import { ipcRenderer } from "electron";
=======
>>>>>>> parent of 420dacf... Projeto Electron 06/10 : Utilizando Electron IPC (Inter-Process Communication)
import Pill from "./Pill";

export default {
  components: { Pill },
  data: function() {
    return {
      files: [],
      groupedWords: []
    }
  },
  methods: {
<<<<<<< HEAD
    processSubtitles() {
      const paths = this.files.map(f => f.path);
      ipcRenderer.send("process-subtitles", paths);
      ipcRenderer.on("process-subtitles", (event, resp) => {
        this.groupedWords = resp
      });
    }
=======
      processSubtitles(){
          console.log(this.files)
      }
>>>>>>> parent of 420dacf... Projeto Electron 06/10 : Utilizando Electron IPC (Inter-Process Communication)
  }
};
</script>

<style>
.pills {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>