<script lang="ts" setup>
const { $api } = useNuxtApp()

const form = reactive<ILoginInput>({
  email: '',
  password: '',
})

const handleSubmit: void = async () => {
  try {
    const credentials: ILoginInput = {
      email: form.email,
      password: form.password,
    }

    const response = await $api.auth.login(credentials)
    console.log(response)
    // allow user access into the app
  } catch (error) {
    console.error(error)
  }
}
</script>
<template></template>
