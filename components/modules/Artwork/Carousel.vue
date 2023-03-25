<template>
	<div class="carousel">
		<div class="carousel-inner" :style="dimension">
			<CarouselIndicators
				v-if="indicators"
				:count="slides.length"
				:active="currentSlide"
				@switch="switchSlide($event)"
			></CarouselIndicators>
			<CarouselItem
				v-for="(slide, index) in slides"
				:slide="slide"
				:key="`slide-${index}`"
				:current-slide="currentSlide"
				:index="index"
				:direction="direction"
				@mouseenter="stopSlideTimer"
				@mouseout="startSlideTimer"
			></CarouselItem>
			<CarouselControls
				v-if="controls"
				@prev="prev"
				@next="next"
			></CarouselControls>
		</div>
	</div>
</template>

<script lang="ts" setup>
const props = defineProps({
	slides: {
		type: Array,
		required: true,
	},
	controls: {
		type: Boolean,
		default: false,
	},
	indicators: {
		type: Boolean,
		default: false,
	},
	interval: {
		type: Number,
		default: 5000,
	},
	width: {
		type: Number,
		default: 900,
	},
	height: {
		type: Number,
		default: 400,
	},
});

const currentSlide = ref(1);

const setCurrentSlide = (index: number) => {
	currentSlide.value = index;
};

const slideInterval = ref(null);

const stopSlideTimer = () => {
	clearInterval(slideInterval.value);
};

const startSlideTimer = () => {
	stopSlideTimer();
	slideInterval.value = setInterval(() => {
		_next();
	}, props.interval);
};

onMounted(() => {
	startSlideTimer();
});

onBeforeUnmount(() => {
	stopSlideTimer();
});
const direction = ref('right');

const prev = (step = -1) => {
	const index =
		currentSlide.value > 0
			? currentSlide.value + step
			: props.slides.length - 1;
	setCurrentSlide(index);
	direction.value = 'left';
	startSlideTimer();
};

const _next = (step = 1) => {
	const index =
		currentSlide.value < props.slides.length - 1
			? currentSlide.value + step
			: 0;
	setCurrentSlide(index);
	direction.value = 'right';
};

const next = (step = 1) => {
	_next(step);
	startSlideTimer();
};

const switchSlide = (index: number) => {
	const step = index - currentSlide.value;
	if (step > 0) {
		next(step);
	} else {
		prev(step);
	}
};

const dimension = reactive({
	width: props.width + 'px',
	height: props.height + 'px',
});
</script>

<style scoped>
.carousel {
	display: flex;
	justify-content: center;
}

.carousel-inner {
	position: relative;
	overflow: hidden;
}
</style>
