import { Link } from 'react-router-dom'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { useLoginController } from './useLoginController'

export function Login() {
  const { handleSubmit, register, errors } = useLoginController()

  return (
    <div>
      <header className='flex flex-col items-center gap-4 text-center'>
        <h1 className='text-2xl font-bold text-gray-900'>Entre em sua conta</h1>

        <p className='space-x-2'>
          <span className='tracking-[-1px] text-gray-700'>Novo por aqui?</span>
          <Link
            to={'/register'}
            className='font-medium tracking-[-1px] text-teal-900'
          >
            Crie uma conta
          </Link>
        </p>
      </header>
      <form onSubmit={handleSubmit} className='mt-[60px] flex flex-col gap-4'>
        <Input
          type='email'
          error='hahahaha'
          placeholder='E-mail'
          {...register('email')}
        />
        <Input type='password' placeholder='Senha' {...register('password')} />

        <Button type='submit' className='mt-2'>
          Entrar
        </Button>
      </form>
    </div>
  )
}
