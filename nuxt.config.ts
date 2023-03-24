// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	components: {
		dirs: [
			{
				path: '~/components',
				extensions: ['vue'],
			},
			{
				path: '~/components/common',
				extensions: ['vue'],
			},
		],
	},
});
