<template>
  <v-app>
      <v-app-bar color="white" class="d-flex justify-end" app flat>
            <v-btn @click="logout" fab color="primary">
                 <v-icon>mdi-close</v-icon>
            </v-btn>
  </v-app-bar>
  <v-main>
    <nuxt/>
 </v-main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
     
    }
  },
  methods:{
    logout(){
      this.$store.commit('changeAuthStatus',false)
      this.$store.commit('setUser',{})
      this.$router.push('/')

    }
  }
}
</script>
