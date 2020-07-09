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
      {{user}}
    </v-card-text>
  </v-card>
  </v-row>
</v-container>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
 layout:'main',
 computed:{
    ...mapGetters({
      user:'user'
    })
 },
 beforeRouteEnter (to, from, next) {
    next((vm) => {
      if (vm.$store.getters.isAuth) {
        next()
      } else {
        next('/')
      }
  })
 }
}
</script>


<style scoped>

</style>

