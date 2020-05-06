<template>
  <v-container fluid>
     <v-form>
         <v-file-input 
         label = "Selecione as Legendas"
         prepend-icon= "mdi-message-text"
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