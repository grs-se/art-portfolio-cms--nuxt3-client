<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { useAuthStore } from '~/store/modules/auth';

const authStore = useAuthStore();
const { user } = storeToRefs(authStore);

const modalOpen = ref(false);

const toggleLoginModal = () => {
  modalOpen.value = !modalOpen.value;
  console.log(modalOpen.value);
};
</script>

<template>
  <div class="ml-auto flex h-full items-center">
    <Avatar v-if="user" />
    <!-- <router-link v-else to="/LoginRegister"> -->
    <!-- <ActionButton text="Sign in" @click="login" /> -->
    <ActionButton type="auth" text="Sign in" @click="toggleLoginModal" />
    <!-- </router-link> -->
    <!-- <div class="relative"> -->
    <!-- <LoginForm v-if="modalOpen === true" class="absolute top-48 right-1/3" /> -->
    <!-- </div> -->
  </div>
</template>
