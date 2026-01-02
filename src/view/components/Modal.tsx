import * as Dialog from '@radix-ui/react-dialog'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import { cn } from '../../app/utils/cn'
import { Cross2Icon } from '@radix-ui/react-icons'

interface ModalProps {
  open?: boolean
  onClose?(): void
  children?: React.ReactNode
  title?: string
  rightAction?: React.ReactNode
}

export function Modal({
  open,
  onClose,
  children,
  title,
  rightAction
}: ModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay
          className={cn(
            'fixed inset-0 z-50 bg-black/70 backdrop-blur-xs',
            'data-[state=open]:animate-overlay-show'
          )}
        />
        <Dialog.Content
          className={cn(
            'fixed top-1/2 left-1/2 z-51 w-full max-w-[400px] -translate-x-1/2 -translate-y-1/2 space-y-10 rounded-2xl bg-white p-6 shadow-[0px_11px_20px_0px_rgba(0,0,0,0.1)] outline-none',
            'data-[state=open]:animate-content-show'
          )}
        >
          <VisuallyHidden asChild>
            <Dialog.Title> {title}</Dialog.Title>
          </VisuallyHidden>

          <VisuallyHidden asChild>
            <Dialog.Description>
              Modal de filtros de conta e ano
            </Dialog.Description>
          </VisuallyHidden>

          <header className='flex h-12 items-center justify-between text-gray-800'>
            <button
              className='flex h-12 w-12 items-center justify-center outline-none'
              onClick={onClose}
            >
              <Cross2Icon className='h-6 w-6' />
            </button>
            <span className='text-lg font-bold tracking-[-1px]'>{title}</span>
            <div className='flex h-12 w-12 items-center justify-center'>
              {rightAction}
            </div>
          </header>
          <div>{children}</div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
