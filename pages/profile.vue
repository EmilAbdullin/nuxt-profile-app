<template>
<v-container style="height:100%"> 
  <v-row style="height:100%" align="center"  justify="center" >
      <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/john.jpg"
    >
      <v-card-title>John</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">john@example.com</v-card-subtitle>

    <v-card-text class="text--primary">
      <div>Reading Book</div>

      <div>Russia, Kazan</div>
    </v-card-text>
  </v-card>
  </v-row>
</v-container>
</template>

<script>


export default {
 layout:'main'
}
</script>


<style scoped>

</style>

