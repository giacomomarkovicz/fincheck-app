import { formatCurrency } from '../../../../../app/utils/formatCurrency'
import { BankAccountTypeIcon } from '../../../../components/icons/BankAccountTypeIcon'

interface AccountCardProps {
  color: string
  name: string
  balance: number
  type: 'CASH' | 'CHECKING' | 'INVESTMENT'
}

export function AccountCard({ balance, color, name, type }: AccountCardProps) {
  return (
    <div
      className='flex h-[200px] flex-col justify-between rounded-2xl border-b-4 border-b-teal-950 bg-white p-4'
      style={{ borderBottomColor: color }}
    >
      <div>
        <BankAccountTypeIcon type={type} />
        <span className='mt-4 block font-medium tracking-[-0.5px] text-gray-800'>
          {name}
        </span>
      </div>
      <div>
        <span className='block font-medium tracking-[-0.5px] text-gray-800'>
          {formatCurrency(balance)}
        </span>
        <small className='text-sm text-gray-800'>Saldo atual</small>
      </div>
    </div>
  )
}
