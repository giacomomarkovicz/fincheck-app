import * as RdxDropdownMenu from '@radix-ui/react-dropdown-menu'
import { cn } from '../../app/utils/cn'

interface DropdownMenuItemProps {
  children?: React.ReactNode
  className?: string
  onSelect?: () => void
}

interface DropdownMenuContentProps {
  children?: React.ReactNode
  className?: string
}

interface DropdownMenuTriggerProps {
  children?: React.ReactNode
  className?: string
}

function DropdownMenuRoot({ children }: { children?: React.ReactNode }) {
  return <RdxDropdownMenu.Root>{children}</RdxDropdownMenu.Root>
}

function DropdownMenuTrigger({
  children,
  className
}: DropdownMenuTriggerProps) {
  return (
    <RdxDropdownMenu.Trigger
      className={cn(
        'outline-none focus:outline-none focus-visible:outline-none',
        className
      )}
    >
      {children}
    </RdxDropdownMenu.Trigger>
  )
}

function DropdownMenuContent({
  children,
  className
}: DropdownMenuContentProps) {
  return (
    <RdxDropdownMenu.Portal>
      <RdxDropdownMenu.Content
        align='end'
        sideOffset={4}
        className={cn(
          'z-50 space-y-2 rounded-2xl bg-white p-2 shadow-[0px_11px_20px_0px_rgba(0,0,0,0.1)] will-change-[opacity,transform]',
          'data-[side=bottom]:animate-slide-up-and-fade',
          'data-[side=top]:animate-slide-down-and-fade',
          className
        )}
      >
        {children}
      </RdxDropdownMenu.Content>
    </RdxDropdownMenu.Portal>
  )
}

function DropdownMenuItem({
  children,
  className,
  onSelect
}: DropdownMenuItemProps) {
  return (
    <RdxDropdownMenu.Item
      onSelect={onSelect}
      className={cn(
        'flex min-h-[40px] items-center rounded-2xl px-4 py-2 text-sm text-gray-800 transition-colors outline-none data-[highlighted]:bg-gray-50',
        className
      )}
    >
      {children}
    </RdxDropdownMenu.Item>
  )
}

export const DropdownMenu = {
  Root: DropdownMenuRoot,
  Trigger: DropdownMenuTrigger,
  Content: DropdownMenuContent,
  Item: DropdownMenuItem
}
