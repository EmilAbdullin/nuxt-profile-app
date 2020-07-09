<template>
<v-container style="height:100%"> 
  <v-row style="height:100%" align="center"  justify="center" >
      <v-card
    class="mx-auto"
    max-width="400"
    width="320"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      :src="'/avatars/' + user.avatar"
    >
      <v-card-title>{{user.name + ' ' + user.secondName}}</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">{{user.email}}</v-card-subtitle>

    <v-card-text class="text--primary">
      <div>{{user.birthdayDate}}</div>

      <div>{{user.country}}, {{user.city}}</div>
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

