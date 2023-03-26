<!-- <script lang="ts" setup>
import { computed, reactive, ref } from 'vue'
import { useUsersStore, useAlertStore } from '~/stores'
import { router } from '~/router'
import type { IUser } from '~/types/IUser'
import { FormInput } from './'

const usersStore = useUsersStore()
const alertStore = useAlertStore()

const registerData = reactive({
  firstName: '',
  lastName: '',
  username: '',
  email: '',
  password: '',
  confirmPass: '',
})

// const errors = ref({
// 	firstName: {
// 		type: String,
// 		required: [true, "First name is required"],
// 	},
// 	lastName: {
// 		type: String,
// 		required: [true, "Last name is required"],
// 		minLength: [3, "Last name must be more than 3 characters!"],
// 	},
// 	username: {
// 		type: String,
// 		required: [true, "Username is required"],
// 	},
// 	email: {
// 		type: String,
// 		required: [true, "First Name is required"],
// 	},
// 	password: {
// 		type: String,
// 		required: [true, "First Name is required"],
// 	},
// 	confirmPass: {
// 		type: String,
// 		required: [true, "First Name is required"],
// 	},
// });
const registerError = ref('')

async function onSubmit(values) {
  try {
    await usersStore.REGISTER_USER(values)
    await router.push('/account/login')
    alertStore.success('Registration successful')
  } catch (error) {
    alertStore.error(error)
  }
}

const register = function (e: Event) {
  e.preventDefault()

  const userData = {
    firstName: String(registerData.firstName),
    lastName: String(registerData.lastName),
    email: String(registerData.email),
    username: String(registerData.username),
    password: String(registerData.password),
    confirmPass: String(registerData.confirmPass),
  }

  if (registerData.password !== registerData.confirmPass) {
    registerError.value = 'Password not matched'
    registerData.password = ''
    registerData.confirmPass = ''
  } else {
    onSubmit()
  }
}
</script>

<template>
  <div class="login-form">
    <h4 class="card-header">Register</h4>
    <div class="card-body">
      <form @submit="onSubmit" novalidate>
        <FormInput v-model="name" />

        <!-- <div class="form-group">
					<label>First Name</label>
					<input
						v-model="registerData.firstName"
						type="text"
						class="form-control"
						:class="{ 'is-invalid': errors.firstName }"
					/>
					<div class="invalid-feedback">{{ errors.firstName }}</div>
				</div> -->
        <div class="form-group">
          <label>Last Name</label>
          <input
            name="lastName"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': errors.lastName }"
          />
          <div class="invalid-feedback">{{ errors.lastName }}</div>
        </div>
        <div class="form-group">
          <label>Username</label>
          <input
            name="username"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': errors.username }"
          />
          <div class="invalid-feedback">{{ errors.username }}</div>
        </div>
        <div class="form-group">
          <label>Email</label>
          <input
            name="email"
            type="email"
            class="form-control"
            :class="{ 'is-invalid': errors.email }"
          />
          <div class="invalid-feedback">{{ errors.email }}</div>
        </div>
        <div class="form-group">
          <label>Password</label>
          <input
            name="password"
            type="password"
            class="form-control"
            :class="{ 'is-invalid': errors.password }"
          />
          <div class="invalid-feedback">{{ errors.password }}</div>
        </div>
        <div class="form-group">
          <label>Confirm Password</label>
          <input
            name="confirmPassword"
            type="password"
            class="form-control"
            :class="{ 'is-invalid': errors.confirmPassword }"
          />
          <div class="invalid-feedback">{{ errors.confirmPassword }}</div>
        </div>
        <div class="form-group">
          <button class="btn btn-primary" :disabled="isSubmitting">
            <span
              v-show="isSubmitting"
              class="spinner-border spinner-border-sm mr-1"
            ></span>
            Register
          </button>
          <NuxtLink to="login" class="btn btn-link">Cancel</NuxtLink>
        </div>
      </form>
    </div>
  </div>
</template> -->
