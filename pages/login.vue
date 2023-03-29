<script lang="ts" setup>
const { $api } = useNuxtApp();

const form = reactive<ILoginInput>({
  emailUname: '',
  password: '',
});

const handleSubmit: void = async () => {
  try {
    const credentials: ILoginInput = {
      emailUname: form.email,
      password: form.password,
    };

    const response = await $api.auth.login(credentials);
    console.log(response);
    // allow user access into the app
  } catch (error) {
    console.error(error);
  }
};
</script>

<template>
  <div
    class="h-screen bg-gradient-to-b from-white to-blue-200 dark:bg-gradient-to-b dark:from-slate-800 dark:to-slate-400"
  >
    <div class="flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div class="w-full max-w-md space-y-8">
        <div>
          <div class="h-25 w-25"></div>
          <div class="mt-10 lg:flex">
            <img
              class="mx-auto h-24 w-auto"
              src="/img/logo_clear_fsj.png"
              alt="full stack jack logo"
            />
            <br />
            <h1
              class="py-9 text-center text-5xl font-extrabold text-gray-900 dark:text-gray-400"
            >
              Full Stack Jack
            </h1>
          </div>

          <h2
            class="mt-6 py-9 text-center text-3xl font-extrabold text-gray-900 dark:text-gray-400"
          >
            Sign in
          </h2>
        </div>

        <div
          v-if="hasError"
          class="relative rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700"
          role="alert"
        >
          <strong class="font-bold">Oops, try again! </strong>
          <span class="block sm:inline">{{ errorMessage }}</span>
          <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
            <svg
              class="h-6 w-6 fill-current text-red-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <title>Close</title>
              <path
                d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
              />
            </svg>
          </span>
        </div>
        <form
          v-if="true"
          v-on:submit.prevent
          class="mt-8 space-y-6"
          action="#"
          method="POST"
        >
          <input type="hidden" name="remember" value="true" />
          <div class="mb-1 -space-y-px rounded-md shadow-sm">
            <div>
              <label for="email-address" class="sr-only"
                >Username or Email</label
              >
              <input
                v-model="form.emailUname"
                id="email-address"
                name="email"
                type="email"
                autocomplete="email"
                required
                class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Username or Email"
              />
            </div>
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input
              v-model="form.password"
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
              required
              class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Password"
            />
          </div>

          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label
                for="remember-me"
                class="ml-2 block text-sm text-gray-900 dark:text-white"
              >
                Remember me
              </label>
            </div>

            <div class="text-sm">
              <a
                href="#"
                class="font-medium text-indigo-600 hover:text-indigo-500 dark:text-white"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              @click.prevent="handleSubmit"
              class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                <!-- Heroicon name: solid/lock-closed -->
                <svg
                  class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
