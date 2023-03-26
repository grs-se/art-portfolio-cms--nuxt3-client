<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useAuthStore } from '~/stores/auth'

const authStore = useAuthStore()
const { user } = storeToRefs(authStore)

const modalOpen = ref(false)

const toggleLoginModal = () => {
  modalOpen.value = !modalOpen.value
  console.log(modalOpen.value)
}
</script>

<template>
  <div class="ml-auto flex h-full items-center">
    <Avatar v-if="user" />
    <!-- <NuxtLink v-else to="/LoginRegister"> -->
    <!-- <ActionButton text="Sign in" @click="login" /> -->
    <ActionButton text="Sign in" @click="toggleLoginModal" />
    <!-- </NuxtLink> -->
    <!-- <div class="relative"> -->
    <LoginForm v-if="modalOpen === true" class="absolute top-48 right-1/3" />
    <!-- </div> -->
  </div>
</template>
