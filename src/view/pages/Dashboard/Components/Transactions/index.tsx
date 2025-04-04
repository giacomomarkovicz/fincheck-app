import { ChevronDownIcon } from '@radix-ui/react-icons'
import { TransactionsIcon } from '../../../../components/icons/TransactionsIcon'
import { FilterIcon } from '../../../../components/icons/FilterIcon'
import { Swiper, SwiperSlide } from 'swiper/react'
import { MONTHS } from '../../../../../app/config/constants'
import { cn } from '../../../../../app/utils/cn'

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

        <div className='mt-6'>
          <Swiper slidesPerView={3} centeredSlides>
            {MONTHS.map((month) => (
              <SwiperSlide key={month}>
                {({ isActive }) => (
                  <button
                    className={cn(
                      'h-12 w-full rounded-full text-sm font-medium tracking-[-0.5px] text-gray-800',
                      isActive && 'bg-white'
                    )}
                  >
                    {month}
                  </button>
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
