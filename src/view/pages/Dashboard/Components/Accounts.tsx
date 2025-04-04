import { EyeIcon } from '../../../components/icons/EyeIcon'
import { AccountCard } from './AccountCard'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/swiper-bundle.css'
import { AccountsSliderNavigation } from './AccountsSliderNavigation'

export function Accounts() {
  return (
    <div className='flex h-full w-full flex-col rounded-2xl bg-teal-900 px-4 py-8 md:p-10'>
      <div className='block tracking-[-0.5px] text-white'>Saldo total</div>
      <div className='flex items-center gap-2'>
        <strong className='text-2xl tracking-[-1px] text-white'>
          R$ 1000,00
        </strong>
        <button className='flex h-8 w-8 items-center justify-center'>
          <EyeIcon open={true} />
        </button>
      </div>

      <div className='flex flex-1 flex-col justify-end'>
        <div>
          <Swiper spaceBetween={16} slidesPerView={2.1}>
            <div
              className='mb-4 flex items-center justify-between'
              slot='container-start'
            >
              <strong className='text-lg tracking-[-1px] text-white'>
                Minhas contas
              </strong>

              <AccountsSliderNavigation />
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
