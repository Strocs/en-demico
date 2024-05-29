import Swiper from "swiper";
import { Navigation, Mousewheel } from "swiper/modules";
import { placesList, header, logo, placesCardsList } from "./domReferences";

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
  placeImage?.addEventListener('click', (e) => {
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


// Listen for the "slideChange" event on the swiperY instance
verticalSwiper.on("slideChange", (e) => {
  // Check if the current slide index is 0 (the first slide)
  if (e.realIndex === 0) {
    // If it's the first slide, hide the header
    header.style.opacity = "0";
    header.style.pointerEvents = "none";
  } else {
    // For all other slides, show the header
    header.style.opacity = "1";
    header.style.pointerEvents = "auto";
  }
});

// Add a click event listener to the logo element
logo.addEventListener("click", () => {
  // When the logo is clicked, navigate the carousel to the first slide
  verticalSwiper.slideToLoop(0, 0, false);
});



placesCardsList.forEach((card, i) =>
  card.addEventListener("click", () => {
    verticalSwiper.slideToLoop(i + 1, 0, false);
  })
);