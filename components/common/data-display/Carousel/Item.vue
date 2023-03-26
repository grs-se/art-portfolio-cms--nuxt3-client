<template>
	<Transition :name="transitionName">
		<div
			class="carousel-item"
			v-show="currentSlide === index"
			@mouseenter="$emit('mouseenter')"
			@mouseout="$emit('mouseout')"
		>
			<img alt="" :src="'images/' + slide.imageCover" />
		</div>
	</Transition>
</template>

<script lang="ts" setup>
const props = defineProps(["slide", "currentSlide", "index", "direction"]);

defineEmits(["mouseenter", "mouseout"]);

const transitionName = computed(() => {
	return props.direction === "right" ? "slide-out" : "slide-in";
});
</script>

<style scoped>
/* .carousel-item {
	display: flex;
	justify-content: center;
	width: auto;
} */

.carousel-item {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	display: flex;
	justify-content: center;
	width: auto;
}

/* img {
	height: 400px;
	width: auto;
} */

.slide-out-enter-active,
.slide-out-leave-active,
.slide-in-enter-active,
.slide-in-leave-active {
	transition: all 1s ease-in-out;
}

.slide-out-enter-from {
	transform: translateX(100%);
}
.slide-out-leave-to {
	transform: translateX(-100%);
}
.slide-in-enter-from {
	transform: translateX(-100%);
}
.slide-in-leave-to {
	transform: translateX(100%);
}
</style>
