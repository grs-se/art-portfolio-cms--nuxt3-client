<script lang="ts" setup>
import { Form, Field } from "vee-validate";
import * as Yup from "yup";

import { useUsersStore, useAlertStore } from "@/stores";
import { router } from "@/router";

import type { User } from "@/types";

const schema = Yup.object().shape({
	firstName: Yup.string().required("First Name is required"),
	lastName: Yup.string().required("Last Name is required"),
	username: Yup.string().required("Username is required"),
	email: Yup.string().required("Email is required"),
	password: Yup.string()
		.required("Password is required")
		.min(6, "Password must be at least 6 characters"),
	confirmPassword: Yup.string()
		.required("Please confirm your password")
		.min(6, "Password must be at least 6 characters"),
});

async function onSubmit(values: User) {
	const usersStore = useUsersStore();
	const alertStore = useAlertStore();
	try {
		await usersStore.REGISTER_USER(values);
		await router.push("/account/login");
		alertStore.success("Registration successful");
	} catch (error) {
		alertStore.error(error);
	}
}
</script>

<template>
	<div class="login-form">
		<Alert />
		<Form
			v-slot="{ errors, isSubmitting }"
			:validation-schema="schema"
			class="space-y-4 md:space-y-6"
			@submit="onSubmit"
		>
			<div class="form__group">
				<label for="username" class="form__label">First Name</label>
				<Field
					id="firstName"
					type="text"
					name="firstName"
					class="form__input"
					:class="{ 'is-invalid': errors.firstName }"
					placeholder="First Name"
					required=""
				/>
				<div class="invalid-feedback">
					{{ errors.username }}
				</div>
			</div>
			<div class="form__group">
				<label for="username" class="form__label">Username</label>
				<Field
					id="username"
					type="text"
					name="username"
					class="form__input"
					:class="{ 'is-invalid': errors.username }"
					placeholder="picasso69"
					required=""
				/>
				<div class="invalid-feedback">
					{{ errors.username }}
				</div>
			</div>
			<div class="form__group">
				<label for="username" class="form__label">Username</label>
				<Field
					id="username"
					type="text"
					name="username"
					class="form__input"
					:class="{ 'is-invalid': errors.username }"
					placeholder="picasso69"
					required=""
				/>
				<div class="invalid-feedback">
					{{ errors.username }}
				</div>
			</div>
			<div class="form__group">
				<label for="password" class="form__label">Password</label>
				<Field
					id="password"
					type="password"
					name="password"
					placeholder="••••••••"
					class="form__input"
					:class="{ 'is-invalid': errors.password }"
					required=""
				/>
				<div class="invalid-feedback">
					{{ errors.password }}
				</div>
			</div>
			<div class="flex items-center justify-between">
				<RememberMe />
				<ForgotPassword />
			</div>
			<div class="flex flex-row items-end justify-between">
				<LoginButton :show="!isSubmitting" />
				<SignUp />
			</div>
		</Form>
	</div>
</template>

<style scoped>
.login-form {
	@apply w-full space-y-4 rounded-md bg-white p-6 shadow sm:max-w-md sm:p-8 md:mt-0 md:space-y-6;
}
.form__input {
	height: 100%;
	width: 100%;
	padding: 0.5rem;
	font-weight: normal;
	font-family: inherit;
	color: inherit;
	border: none;
	width: 100%;
	background-color: #f2f2f2;
	border-top: 3px solid transparent;
	border-bottom: 3px solid transparent;
	-webkit-transition: all 0.3s;
	transition: all 0.3s;
	border-radius: 4px;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
}
.form__input:focus {
	outline: none;
	border-bottom: 3px solid #66da8c;
}
.form__input:focus:invalid {
	border-bottom: 3px solid #ff9156;
}
.form__input::-webkit-input-placeholder {
	color: #bbb;
}

.form__group:not(:last-child) {
	@apply mb-2;
}

.form__group:last-child {
	@apply mt-6;
}

.form__label {
	@apply block text-base;
}

.invalid-feedback {
	@apply text-sm text-red-600;
}
</style>

<style scoped>
.login-form {
	@apply w-full space-y-4 rounded-md bg-white p-6 shadow sm:max-w-md sm:p-8 md:mt-0 md:space-y-6;
}
.form__input {
	height: 100%;
	width: 100%;
	padding: 0.5rem;
	font-weight: normal;
	font-family: inherit;
	color: inherit;
	border: none;
	width: 100%;
	background-color: #f2f2f2;
	border-top: 3px solid transparent;
	border-bottom: 3px solid transparent;
	-webkit-transition: all 0.3s;
	transition: all 0.3s;
	border-radius: 4px;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
}
.form__input:focus {
	outline: none;
	border-bottom: 3px solid #66da8c;
}
.form__input:focus:invalid {
	border-bottom: 3px solid #ff9156;
}
.form__input::-webkit-input-placeholder {
	color: #bbb;
}

.form__group:not(:last-child) {
	@apply mb-2;
}

.form__group:last-child {
	@apply mt-6;
}

.form__label {
	@apply block text-base;
}

.invalid-feedback {
	@apply text-sm text-red-600;
}
</style>
