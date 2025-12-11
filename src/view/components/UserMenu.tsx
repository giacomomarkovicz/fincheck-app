import { ExitIcon } from '@radix-ui/react-icons'
import { DropdownMenu } from './DropdownMenu'
import { useAuth } from '../../app/hooks/useAuth'

export function UserMenu() {
  const { signout } = useAuth()

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <div className='bg-teal-0 flex h-12 w-12 items-center justify-center rounded-full border border-teal-100 hover:border-teal-900 focus:border-teal-900'>
          <span className='text-sm font-medium tracking-[-0.5px] text-teal-900'>
            GC
          </span>
        </div>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content className='w-32'>
        <DropdownMenu.Item
          onSelect={signout}
          className='flex items-center justify-between'
        >
          Sair <ExitIcon className='h-4 w-4' />
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}
