import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { authService } from '../../../app/services/authService'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'
import { SigninParams } from '../../../app/services/authService/signin'

const schema = z.object({
  email: z
    .string()
    .nonempty('E-mail é obrigatório')
    .email('Informe um e-mail válido'),
  password: z
    .string()
    .nonempty('Senha é obrigatória')
    .min(8, 'Senha deve ter no mínimo 8 caracteres')
})

type FormData = z.infer<typeof schema>

export function useLoginController() {
  const {
    handleSubmit: hookFormSubmit,
    register,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(schema)
  })

  const { isPending: isLoading, mutateAsync } = useMutation({
    mutationKey: ['signin'],
    mutationFn: async (data: SigninParams) => {
      return authService.signin(data)
    }
  })

  const handleSubmit = hookFormSubmit(async (data) => {
    try {
      const { accessToken } = await mutateAsync(data)
    } catch {
      toast.error('Credenciais inválidas!')
    }
  })

  return { handleSubmit, register, errors, isLoading }
}
