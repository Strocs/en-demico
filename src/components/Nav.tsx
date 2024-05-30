import { useEffect, useState } from 'react'
import { PLACES } from '@data/PLACES'
import { verticalSwiper } from '@services/swiperController'

interface TailwindColors {
  [key: string]: {
    color: string
    hover: string
  }
}

const tailwindColors: TailwindColors = {
  '#4a6242': { color: 'text-[#4a6242]', hover: 'hover:text-[#4a6242]' },
  '#1caab8': { color: 'text-[#1caab8]', hover: 'hover:text-[#1caab8]' },
  '#1f2122': { color: 'text-[#1f2122]', hover: 'hover:text-[#1f2122]' },
  '#757675': { color: 'text-[#757675]', hover: 'hover:text-[#757675]' },
  '#ad4a20': { color: 'text-[#ad4a20]', hover: 'hover:text-[#ad4a20]' },
  '#10597d': { color: 'text-[#10597d]', hover: 'hover:text-[#10597d]' },
  '#b77842': { color: 'text-[#b77842]', hover: 'hover:text-[#b77842]' },
  '#aabb51': { color: 'text-[#aabb51]', hover: 'hover:text-[#aabb51]' },
  '#6d8b4b': { color: 'text-[#6d8b4b]', hover: 'hover:text-[#6d8b4b]' },
  '#57331d': { color: 'text-[#57331d]', hover: 'hover:text-[#57331d]' }
}

export const Nav = () => {
  const [activeSlide, setActiveSlide] = useState(verticalSwiper.realIndex)

  const handleClick = (e: React.MouseEvent, i: number) => {
    e.preventDefault()
    verticalSwiper.slideToLoop(i + 1, 0, false)
  }

  useEffect(() => {
    verticalSwiper.on('slideChange', () =>
      setActiveSlide(verticalSwiper.realIndex)
    )
  }, [])

  return (
    <nav id='header_nav' className='flex flex-col items-center gap-[1.6vh]'>
      {Object.entries(PLACES).map(([id, { color, icon: Icon }], i) => {
        const activeStyles =
          i + 1 === activeSlide
            ? `w-[8vh] ${tailwindColors[color].color}`
            : 'w-[5vh] hover:scale-125 text-primary/30'

        return (
          <button
            onClick={e => handleClick(e, i)}
            key={id}
            className={`duration-150 nav-icons rounded-full overflow-hidden 
                        ${activeStyles} 
                        ${tailwindColors[color].hover}`}
          >
            <Icon />
          </button>
        )
      })}
    </nav>
  )
}
