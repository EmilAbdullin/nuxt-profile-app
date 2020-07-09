<template>
<v-container style="height:100%"> 
  <v-row style="height:100%" align="center"  justify="center" >
    <v-col class="auth-wrapper" xl="4">
      <v-form @submit.prevent="auth">
        <h1 class="auth-wrapper__heading">Авторизация</h1>
        <v-text-field
        v-model="login"
        @input="validateInputsOnEmpty"
        label="Логин"
        ref="login-input"
        :disabled="disabledInput"
        required
        ></v-text-field>
        <v-text-field
        v-model="password"
        @input="validateInputsOnEmpty"
        label="Пароль"
        type="password"
        ref="pass-input"
        :disabled="disabledInput"
        required
        ></v-text-field>
        <v-btn type="submit" @click="auth"  color="success" :disabled="isDisabled">Войти</v-btn>
      </v-form>
    </v-col>
  </v-row>
   <v-snackbar
      v-model="snackbar"
    >
      {{ textFromServer }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="pink"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Закрыть
        </v-btn>
      </template>
    </v-snackbar>
</v-container>
</template>

<script>


export default {
 layout:'default',
 data:() => {
   return {
     password:'',
     login:'',
     isDisabled:true,
     snackbar:false,
     textFromServer:'',
     disabledInput:false,
   }
 },
  methods:{
   validateInputsOnEmpty(){
    if(this.login !== '' && this.password !== ''){
      this.isDisabled = false
    }else{
      this.isDisabled = true
    }
   },
   async auth(){
     this.$refs['login-input'].blur()
     this.$refs['pass-input'].blur()
    const {data} = await this.$store.dispatch('auth',{
       login:this.login,
       password:this.password
     })
     this.login = ''
     this.password = ''
     this.isDisabled = true;
     const isAuth = data.status === 'auth'
     this.textFromServer = data.message
     this.$store.commit('changeAuthStatus', isAuth)
     this.snackbar = true
     this.disabledInput = true
     setTimeout(()=>{
       this.snackbar = false
       if(isAuth){
         this.$store.commit('changeAuthStatus',isAuth)
         this.$store.commit('setUser',data.user)
         this.$router.push('/profile')
       }else{
         this.disabledInput = false
       }
     },2000)
   }
}
}
</script>


<style scoped>
.auth-wrapper__heading{
  text-align: center;
  font-weight: 300;
  font-family: monospace;
  text-transform: uppercase;
  color:#C4C4C4;
  letter-spacing: 5px;
}
</style>
