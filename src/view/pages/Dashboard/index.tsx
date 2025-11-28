import { Logo } from '../../components/Logo'
import { UserMenu } from '../../components/UserMenu'
import { Accounts } from './Components/Accounts'
import { DashboardProvider } from './Components/DashboardContext'
import { Fab } from './Components/Fab'
import { Transactions } from './Components/Transactions'

export function Dashboard() {
  return (
    <DashboardProvider>
      <div className='flex h-full w-full flex-col gap-4 p-4 md:p-8 md:pt-6'>
        <header className='flex h-12 items-center justify-between'>
          <Logo className='h-6 text-teal-900' />
          <UserMenu />
        </header>
        <main className='flex max-h-full flex-1 flex-col gap-4 md:flex-row'>
          <div className='w-full md:w-1/2'>
            <Accounts />
          </div>
          <div className='w-full md:w-1/2'>
            <Transactions />
          </div>
        </main>
        <Fab />
      </div>
    </DashboardProvider>
  )
}
