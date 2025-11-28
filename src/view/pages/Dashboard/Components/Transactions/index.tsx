import { FilterIcon } from '../../../../components/icons/FilterIcon'
import { Swiper, SwiperSlide } from 'swiper/react'
import { MONTHS } from '../../../../../app/config/constants'
import { SliderOption } from './SliderOption'
import 'swiper/swiper-bundle.css'
import { SliderNavigation } from './SliderNavigation'
import { formatCurrency } from '../../../../../app/utils/formatCurrency'
import { CategoryIcon } from '../../../../components/icons/categories/CategoryIcon'
import { useTransactionsController } from './useTransactionsController'
import { cn } from '../../../../../app/utils/cn'
import { Spinner } from '../../../../components/Spinner'
import emptyStateImage from '../../../../../assets/empty-state.svg'
import { TransactionTypeDropdown } from './TransactionTypeDropdown'

export function Transactions() {
  const { areValuesVisible, isInitialLoading, isLoading, transactions } =
    useTransactionsController()

  const hasTransactions = transactions.length > 0
  const hasLoadedTransactions = !isLoading && hasTransactions
  const hasNoTransactions = !isLoading && !hasTransactions

  return (
    <div className='flex h-full w-full flex-col rounded-2xl bg-gray-100 p-10'>
      {isInitialLoading && (
        <div className='flex h-full w-full items-center justify-center'>
          <Spinner className='h-10 w-10' />
        </div>
      )}
      {!isInitialLoading && (
        <>
          <header>
            <div className='flex items-center justify-between'>
              <TransactionTypeDropdown />
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
          <div className='mt-4 flex-1 space-y-2 overflow-y-auto'>
            {isLoading && (
              <div className='flex h-full flex-col items-center justify-center'>
                <Spinner className='h-10 w-10' />
              </div>
            )}
            {hasNoTransactions && (
              <div className='flex h-full flex-col items-center justify-center'>
                <img
                  src={emptyStateImage}
                  alt='Não encontramos nenhuma transação!'
                />
                <p className='text-gray-700'>
                  Não encontramos nenhuma transação!
                </p>
              </div>
            )}
            {hasLoadedTransactions && (
              <>
                <div className='flex items-center justify-between gap-4 rounded-2xl bg-white p-4'>
                  <div className='flex flex-1 items-center gap-3'>
                    <CategoryIcon type='expense' />
                    <div>
                      <strong className='block font-bold tracking-[-0.5px]'>
                        Almoço
                      </strong>
                      <span className='text-sm text-gray-600'>07/04/2025</span>
                    </div>
                  </div>

                  <span
                    className={cn(
                      'font-medium tracking-[-0.5px] text-red-800',
                      !areValuesVisible && 'blur-sm'
                    )}
                  >
                    - {formatCurrency(123.45)}
                  </span>
                </div>
                <div className='flex items-center justify-between gap-4 rounded-2xl bg-white p-4'>
                  <div className='flex flex-1 items-center gap-3'>
                    <CategoryIcon type='income' />
                    <div>
                      <strong className='block font-bold tracking-[-0.5px]'>
                        Almoço
                      </strong>
                      <span className='text-sm text-gray-600'>07/04/2025</span>
                    </div>
                  </div>

                  <span
                    className={cn(
                      'font-medium tracking-[-0.5px] text-green-800',
                      !areValuesVisible && 'blur-sm'
                    )}
                  >
                    {formatCurrency(1123.45)}
                  </span>
                </div>
              </>
            )}
          </div>
        </>
      )}
    </div>
  )
}
