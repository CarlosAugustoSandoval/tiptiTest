<script setup lang="ts">
import InputText from "@/components/InputText.vue";
import {ref, reactive} from "vue";
import { useRouter } from 'vue-router'
import { AuthStore } from "@/modules/auth/store";
import ILoginModel from "@/modules/auth/models/ILoginModel";

const authStore = AuthStore()
const router = useRouter()
const { login } = authStore

const model:ILoginModel = reactive({
  email: '',
  password: '',
})
const errorMessage = ref<string>('')
const loginForm = () => {
  errorMessage.value = ''
  if(!model.email) errorMessage.value = 'The email is required.'
  if(!model.password) errorMessage.value = 'The password is required.'
  else {
    login(model).then(response => {
      if (typeof response === 'string') errorMessage.value = response
      else router.replace({ name: 'Home' })
    })
  }
}
</script>

<template>
  <div class="login-container">
    <h1 class="login-title">Welcome Back!</h1>
    <p class="login-description">Login to your account</p>
    <div class="login-form">
      <InputText v-model="model.email" label="Email" />
      <InputText v-model="model.password" label="Password" type="password" style="margin-top: 30px" />
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
      <button color="primary" class="button" style="height: 50px; width: 300px" @click="loginForm()">Login</button>
    </div>
  </div>

  <div class="login-container">
    <p class="login-description">Access Data</p>
    Email: admin@gmail.com <br/>
    Password: 12345
  </div>
</template>

<style scoped lang="scss">
.error-message {
  color: red;
  font-weight: bold;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;
}

.login-container {
  max-width: 400px;
  margin: 100px auto;
  padding: 40px;
  background-color: #FFF;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.login-title {
  color: #2196F3;
  font-size: 28px;
  margin-bottom: 10px;
}

.login-description {
  color: #666;
  font-size: 16px;
  margin-bottom: 30px;
}

.login-form {
  text-align: center;
}
</style>
