import { ChevronDownIcon } from '@radix-ui/react-icons'
import { TransactionsIcon } from '../../../../components/icons/TransactionsIcon'
import { FilterIcon } from '../../../../components/icons/FilterIcon'
import { Swiper, SwiperSlide } from 'swiper/react'
import { MONTHS } from '../../../../../app/config/constants'
import { SliderOption } from './SliderOption'

import 'swiper/swiper-bundle.css'
import { SliderNavigation } from './SliderNavigation'

export function Transactions() {
  return (
    <div className='h-full w-full rounded-2xl bg-gray-100 p-10'>
      <header className=''>
        <div className='flex items-center justify-between'>
          <button className='flex items-center gap-2'>
            <TransactionsIcon />
            <span className='text-sm font-medium tracking-[-0.5px] text-gray-800'>
              Transações
            </span>
            <ChevronDownIcon className='text-gray-900' />
          </button>
          <button>
            <FilterIcon />
          </button>
        </div>

        <div className='relative mt-6'>
          <Swiper slidesPerView={3} centeredSlides>
            <SliderNavigation />
            {MONTHS.map((month, index) => (
              <SwiperSlide key={month}>
                {({ isActive }) => (
                  <SliderOption
                    isActive={isActive}
                    month={month}
                    index={index}
                  />
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </header>
      <div className='mt-4'>Conteudo</div>
    </div>
  )
}
