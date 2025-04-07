import { EyeIcon } from '../../../../components/icons/EyeIcon'
import { AccountCard } from './AccountCard'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/swiper-bundle.css'
import { SliderNavigation } from './SliderNavigation'
import { useAccountsController } from './useAccountsController'
import { formatCurrency } from '../../../../../app/utils/formatCurrency'
import { cn } from '../../../../../app/utils/cn'

export function Accounts() {
  const {
    setSliderState,
    sliderState,
    windowWidth,
    areValuesVisible,
    toggleValuesVisibility
  } = useAccountsController()

  return (
    <div className='flex h-full w-full flex-col rounded-2xl bg-teal-900 px-4 py-8 md:p-10'>
      <div className='block tracking-[-0.5px] text-white'>Saldo total</div>
      <div className='flex items-center gap-2'>
        <strong
          className={cn(
            'text-2xl tracking-[-1px] text-white',
            !areValuesVisible && 'blur-md'
          )}
        >
          {formatCurrency(1234.56)}
        </strong>
        <button
          onClick={toggleValuesVisibility}
          className='flex h-8 w-8 items-center justify-center'
        >
          <EyeIcon open={!areValuesVisible} />
        </button>
      </div>

      <div className='mt-10 flex flex-1 flex-col justify-end md:mt-0'>
        <div>
          <Swiper
            spaceBetween={16}
            slidesPerView={windowWidth >= 500 ? 2.1 : 1.1}
            onSlideChange={(swiper) =>
              setSliderState({
                isBeginning: swiper.isBeginning,
                isEnd: swiper.isEnd
              })
            }
          >
            <div
              className='mb-4 flex items-center justify-between'
              slot='container-start'
            >
              <strong className='text-lg tracking-[-1px] text-white'>
                Minhas contas
              </strong>

              <SliderNavigation
                isBeginning={sliderState.isBeginning}
                isEnd={sliderState.isEnd}
              />
            </div>

            <SwiperSlide>
              <AccountCard
                balance={123.99}
                color='#7950F2'
                name='Nubank'
                type='CASH'
              />
            </SwiperSlide>

            <SwiperSlide>
              <AccountCard
                balance={500.5}
                color='#333'
                name='XP'
                type='INVESTMENT'
              />
            </SwiperSlide>

            <SwiperSlide>
              <AccountCard
                balance={500.5}
                color='#0f0'
                name='Carteira'
                type='CASH'
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}
