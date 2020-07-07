<template>
<v-container style="height:100%"> 
  <v-row style="height:100%" align="center"  justify="center" >
    <v-col class="auth-wrapper" xl="4">
      <v-form>
        <h1 class="auth-wrapper__heading">Авторизация</h1>
        <v-text-field
        v-model="login"
        label="Логин"
        required
        ></v-text-field>
        <v-text-field
        v-model="password"
        label="Пароль"
        type="password"
        required
        ></v-text-field>
        <v-btn color="success" disabled>Войти</v-btn>
      </v-form>
    </v-col>
  </v-row>
</v-container>
</template>

<script>


export default {
 layout:'default',
 data:() => {
   return {
     password:'',
     login:''
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
