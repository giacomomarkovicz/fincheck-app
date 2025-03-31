import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons'
import { EyeIcon } from '../../../components/icons/EyeIcon'

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
        <div className='flex items-center justify-between'>
          <strong className='text-lg tracking-[-1px] text-white'>
            Minhas contas
          </strong>
          <div>
            <button className='rounded-full py-3 pr-3.5 pl-2.5 transition-colors enabled:hover:bg-black/10 disabled:opacity-40'>
              <ChevronLeftIcon className='h-6 w-6 text-white' />
            </button>
            <button className='rounded-full py-3 pr-3.5 pl-2.5 transition-colors enabled:hover:bg-black/10 disabled:opacity-40'>
              <ChevronRightIcon className='h-6 w-6 text-white' />
            </button>
          </div>
        </div>
        <div>Contas</div>
      </div>
    </div>
  )
}
