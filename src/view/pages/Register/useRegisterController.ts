import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { authService } from '../../../app/services/authService'
import { useMutation } from '@tanstack/react-query'
import { SignupParams } from '../../../app/services/authService/signup'
import { toast } from 'react-hot-toast'
import { useAuth } from '../../../app/hooks/useAuth'

const schema = z.object({
  name: z.string().nonempty('Nome é obrigatório'),
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

export function useRegisterController() {
  const {
    handleSubmit: hookFormSubmit,
    register,
    formState: { errors }
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const { isPending: isLoading, mutateAsync } = useMutation({
    mutationKey: ['signup'],
    mutationFn: async (data: SignupParams) => {
      return authService.signup(data)
    }
  })

  const { signin } = useAuth()

  const handleSubmit = hookFormSubmit(async (data) => {
    try {
      const { accessToken } = await mutateAsync(data)
      signin(accessToken)
    } catch {
      toast.error('Erro ao criar sua conta!')
    }
  })

  return { handleSubmit, register, errors, isLoading }
}
