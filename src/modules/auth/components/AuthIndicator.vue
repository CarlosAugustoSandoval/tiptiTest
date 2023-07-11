<script setup lang="ts">
import { useRouter } from 'vue-router'
import { AuthStore } from "@/modules/auth/store";
import {computed, onMounted, ref} from "vue";

const authStore = AuthStore()
const router = useRouter()
const { logOut } = authStore
const user = computed(() => authStore.user)
const teleport = ref(false)
const goLogin = () => {
  router.push({ name: 'Login' })
}
const close = () => {
  logOut().then(response => {
    if (response) router.replace({ name: 'Home' })
  })
}

onMounted(() => {
  teleport.value = true
})
</script>

<template>
  <button v-if="user" class="button" color="primary">{{ user.name }}</button>
  <button v-else class="button" color="secondary" @click="goLogin()">Sig In</button>
  <template v-if="teleport && user">
    <teleport to="#content-logout">
      <button class="button" style="width: 100%" color="error" @click="close()">Log Out</button>
    </teleport>
  </template>
</template>
