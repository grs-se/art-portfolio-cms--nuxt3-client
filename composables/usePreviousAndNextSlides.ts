// import { type Ref, computed } from 'vue';

// const usePreviousAndNextSlides = (
//   currentPage: Ref<number>,
//   maxPage: Ref<number>
// ) => {
//   const nextSlide = () => {
//     currentSlideIndex.value++;
//     selectedArtwork.value = displayedArtworks.value[currentSlideIndex.value];
//     if (currentSlideIndex.value === maxResPerPage - 1 && nextPage) {
//       router.replace(`${route.params.category}?page=${nextPage.value}`);
//       currentSlideIndex.value = 0;
//     }
//   };

//   const prevSlide = () => {
//     currentSlideIndex.value--;
//     selectedArtwork.value = displayedArtworks.value[currentSlideIndex.value];
//     if (currentSlideIndex.value === 0 && previousPage) {
//       router.replace(`${route.params.category}?page=${previousPage.value}`);
//       currentSlideIndex.value = maxResPerPage - 1;
//     }
//   };

//   return { previousSlide, nextSlide };
// };

// export default usePreviousAndNextSlides;

// const next = () => {
//   currentSlideIndex.value++;
//   selectedArtwork.value = displayedArtworks.value[currentSlideIndex.value];
//   if (currentSlideIndex.value === maxResPerPage - 1 && nextPage) {
//     router.replace(`${route.params.category}?page=${nextPage.value}`);
//     currentSlideIndex.value = 0;
//   }
// };

// const prev = () => {
//   currentSlideIndex.value--;
//   selectedArtwork.value = displayedArtworks.value[currentSlideIndex.value];
//   if (currentSlideIndex.value === 0 && previousPage) {
//     router.replace(`${route.params.category}?page=${previousPage.value}`);
//     currentSlideIndex.value = maxResPerPage - 1;
//   }
// };

/////////////

// const next = () => {
//   console.log(currentSlideIndex.value);
//   if (
//     currentSlideIndex.value === maxResPerPage - 1 &&
//     currentPage.value === maxPage.value
//   ) {
//     currentSlideIndex.value = maxResPerPage - 1;
//     return;
//   }
//   // if (
//   //   currentSlideIndex.value != maxResPerPage - 1 &&
//   //   currentPage.value != maxPage.value
//   // ) {
//   currentSlideIndex.value++;
//   selectedArtwork.value = displayedArtworks.value[currentSlideIndex.value];
//   if (currentSlideIndex.value === maxResPerPage - 1 && nextPage.value) {
//     router.replace(`${route.params.category}?page=${nextPage.value}`);
//     currentSlideIndex.value = 0;
//   }
// };
// // };

// const prev = () => {
//   if (currentSlideIndex.value === 0 && currentPage.value === 1) return;
//   if (currentSlideIndex.value === 0 && currentPage.value >= 1) {
//     currentSlideIndex.value--;
//     selectedArtwork.value = displayedArtworks.value[currentSlideIndex.value];
//     router.replace(`${route.params.category}?page=${previousPage.value}`);
//     currentSlideIndex.value = maxResPerPage - 1;
//   }
// };

////////////////////

// const next = () => {
//   console.log(currentSlideIndex.value);
//   if (
//     currentSlideIndex.value === maxResPerPage - 1 &&
//     currentPage.value === maxPage.value
//   ) {
//     currentSlideIndex.value = maxResPerPage - 1;
//     return;
//   }
//   // if (
//   //   currentSlideIndex.value != maxResPerPage - 1 &&
//   //   currentPage.value != maxPage.value
//   // ) {
//   currentSlideIndex.value++;
//   selectedArtwork.value = displayedArtworks.value[currentSlideIndex.value];
//   if (currentSlideIndex.value === maxResPerPage - 1 && nextPage.value) {
//     router.replace(`${route.params.category}?page=${nextPage.value}`);
//     currentSlideIndex.value = 0;
//   }
// };
// // };

// const prev = () => {
//   if (currentSlideIndex.value === 0 && currentPage.value === 1) return;
//   if (currentSlideIndex.value === 0 && currentPage.value >= 1) {
//     currentSlideIndex.value--;
//     selectedArtwork.value = displayedArtworks.value[currentSlideIndex.value];
//     router.replace(`${route.params.category}?page=${previousPage.value}`);
//     currentSlideIndex.value = maxResPerPage - 1;
//   }
// };
