import { useEffect, useState } from 'react'
import { InfoIcon } from './icons/InfoIcon'
import {
  horizontalSwipers,
  verticalSwiper
} from 'src/services/swiperController'

interface Props {
  id?: string
}

export const InfoButton = ({ id }: Props) => {
  const [showModal, setShowModal] = useState<boolean>(false)

  useEffect(() => {
    const hideModal = () => setShowModal(false)
    verticalSwiper.on('slideChange', hideModal)
    return () => {
      verticalSwiper.off('slideChange', hideModal)
    }
  }, [])

  useEffect(() => {
    const hideModal = () => setShowModal(false)
    horizontalSwipers.forEach(({ swiper }) => {
      swiper.on('slideChange', hideModal)
    })

    return () => {
      horizontalSwipers.forEach(({ swiper }) => {
        swiper.off('slideChange', hideModal)
      })
    }
  }, [])

  return (
    <div id={id} className='hidden landscape:block w-fit mx-auto relative'>
      <button
        onBlur={() => setShowModal(false)}
        onClick={() => setShowModal(!showModal)}
        className={`${
          showModal ? 'text-blue-800' : 'text-primary/30'
        } hover:text-blue-800 duration-150 cursor-pointer rounded-full h-6 w-6 flex items-center justify-center shrink-0`}
      >
        <InfoIcon />
      </button>
      {showModal && (
        <>
          <div className='absolute left-16 bottom-0 bg-blue-800 p-[2vh] z-20 h-fit w-[40vh] rounded-lg'>
            <p className='text-[1.5vh] text-secondary'>
              Navega a través de los íconos o con el scroll de tu mouse
            </p>
          </div>
          <div className='bg-blue-800 p-[2vh] z-20 h-fit w-[40vh] rounded-lg absolute left-[80vh] bottom-[1vh]'>
            <p className='text-[1.5vh] text-secondary'>
              Haz click en la imagen o desliza hacia la derecha para verla mejor
            </p>
          </div>
        </>
      )}
    </div>
  )
}
