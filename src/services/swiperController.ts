import Swiper from "swiper";
import { Navigation, Mousewheel } from "swiper/modules";
import { placesList, header, logo, placesCardsList } from "@utils/domReferences";
import { readLess } from "@utils/utilities";

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
    on: {
      slideChange: (e) => {
        if (e.realIndex === 1) {
          header.style.opacity = "0";
          header.style.pointerEvents = "none";
        } else {
          header.style.opacity = "1";
          header.style.pointerEvents = "auto";
        }
      }
    }
  });

  horizontalSwipers.push({ id: place.id, swiper })

  // Get image from place
  const placeImage = place.querySelector(`#${place.id}-image`)
  // Add event listener to toggle swiper slide on image click
  placeImage?.addEventListener('click', () => {
    if (window.innerWidth < 768) return

    if (swiper.activeIndex === 0) {
      swiper.slideNext()
    } else {
      swiper.slidePrev()
    }
  });
});

// Reset horizontal swipers when vertical swiper changes slides
verticalSwiper.on('slideChange', (e) => {
  if (window.innerWidth < window.innerHeight) return

  horizontalSwipers.forEach(swiper => {
    swiper.swiper.slideTo(0, 800)
  })
})

// Reset read less when vertical swiper changes slides
verticalSwiper.on('slideChange', () => {
  placesList.forEach(place => {
    const btn = place.querySelector(".read-more-btn") as HTMLButtonElement;
    if (!btn.getAttribute('data-isActive')) return

    const image = place.querySelector(".place-img-mobile") as HTMLImageElement;
    const video = place.querySelector(".place-video") as HTMLVideoElement;
    const text = place.querySelector(
      ".place-description"
    ) as HTMLParagraphElement;


    const minHeight = text.style.getPropertyValue('--min-height')

    readLess({
      btn, image, video, text, minHeight
    })
  })
})


verticalSwiper.on("slideChange", (e) => {
  if (e.realIndex === 0) {
    header.style.opacity = "0";
    header.style.pointerEvents = "none";
  } else {
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



// TODO: Open image viewer on click
// TODO: Reset image viewer on slide change
// TODO: pause video on slide change 

