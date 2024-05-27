import Swiper from "swiper";
import { Navigation, Mousewheel } from "swiper/modules";
import { infoBtn, placesList } from "./domReferences";

// Initialize the vertical swiper
export const verticalSwiper = new Swiper(".swiper-main", {
  modules: [Navigation, Mousewheel],
  direction: "vertical",
  loop: true,
  mousewheel: true,
});

export const horizontalSwipers: { id: string, swiper: Swiper }[] = []

// Iterate through the placesList array
placesList.forEach((place) => {
  // Create a new horizontal swiper for each place
  const swiper = new Swiper(`.swiper-${place.id}`, {
    slidesPerView: "auto",
  });

  horizontalSwipers.push({ id: place.id, swiper })

  // Get image from place
  const placeImage = place.querySelector(`#${place.id}-image`)
  // Add event listener to toggle swiper slide on image click
  placeImage?.addEventListener('click', () => {
    if (swiper.activeIndex === 0) {
      swiper.slideNext()
    } else {
      swiper.slidePrev()
    }
  });
});

// Reset horizontal swipers when vertical swiper changes slides
verticalSwiper.on('slideChange', () => {
  horizontalSwipers.forEach(swiper => {
    swiper.swiper.slideTo(0, 800)
  })
})