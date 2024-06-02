import Swiper from 'swiper'
import { Navigation, Mousewheel } from 'swiper/modules'
import { placesList, header, logo, placesCardsList } from '@utils/domReferences'
import { readLess } from '@utils/utilities'

// Initialize the vertical swiper
export const verticalSwiper = new Swiper('.swiper-main', {
  modules: [Navigation, Mousewheel],
  direction: 'vertical',
  loop: true,
  mousewheel: true
})

export const horizontalSwipers: { id: string; swiper: Swiper }[] = []

placesList.forEach(async place => {
  // Create a new horizontal swiper for each place
  const swiper = new Swiper(`.swiper-${place.id}`, {
    slidesPerView: 'auto',
    on: {
      slideChange: e => {
        if (e.realIndex === 1) {
          header.style.opacity = '0'
          header.style.pointerEvents = 'none'
        } else {
          header.style.opacity = '1'
          header.style.pointerEvents = 'auto'
        }
      }
    }
  })

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
  })
})

// Slide change events
verticalSwiper.on('slideChange', e => {
  // Reset horizontal swipers
  if (window.innerWidth > window.innerHeight) {
    horizontalSwipers.forEach(swiper => {
      swiper.swiper.slideTo(0, 800)
    })
  }

  // Toggle header opacity
  if (e.realIndex === 0) {
    header.style.opacity = '0'
    header.style.pointerEvents = 'none'
  } else {
    header.style.opacity = '1'
    header.style.pointerEvents = 'auto'
  }

  // Reset read less
  placesList.forEach(async place => {
    const btn = place.querySelector('.read-more-btn') as HTMLButtonElement
    const video = place.querySelector('.place-video') as any

    if (btn.getAttribute('data-isActive')) {
      const image = place.querySelector('.place-img-mobile') as HTMLImageElement
      const text = place.querySelector(
        '.place-description'
      ) as HTMLParagraphElement

      // Read less on slide change
      const minHeight = text.style.getPropertyValue('--min-height')
      readLess({
        btn,
        image,
        video,
        text,
        minHeight
      })
    }

    if (!!video.querySelector('iframe')) {
      const player = await video.getYTPlayer()
      if (player.getPlayerState() === 1) {
        player.pauseVideo()
      }
    }
  })
})

// Add a click event listener to the logo element
logo.addEventListener('click', () => {
  // When the logo is clicked, navigate the carousel to the first slide
  verticalSwiper.slideToLoop(0, 0, false)
})

// Add a goto event listener to each place card
placesCardsList.forEach((card, i) =>
  card.addEventListener('click', () => {
    verticalSwiper.slideToLoop(i + 1, 0, false)
  })
)
