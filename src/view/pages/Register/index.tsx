import { Link } from 'react-router-dom'
import { Input } from '../../components/Input'

export function Register() {
  return (
    <div>
      <header className='flex flex-col items-center gap-4 text-center'>
        <h1 className='text-2xl font-bold text-gray-900'>Crie sua conta</h1>

        <p className='space-x-2'>
          <span className='tracking-[-1px] text-gray-700'>
            Já possui uma conta?
          </span>
          <Link
            to={'/login'}
            className='font-medium tracking-[-1px] text-teal-900'
          >
            Fazer login
          </Link>
        </p>
      </header>
      <form className='mt-[60px] flex flex-col gap-4'>
        <Input name='name' placeholder='Nome' />
        <Input type='email' name='email' placeholder='E-mail' />
        <Input type='password' name='password' placeholder='Senha' />
        <button type='submit' className='mt-2'>
          Criar conta
        </button>
      </form>
    </div>
  )
}
