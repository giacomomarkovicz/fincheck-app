import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

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
    handleSubmit: hookFormHandleSubmit,
    register,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(schema)
  })

  const handleSubmit = hookFormHandleSubmit((data) => {
    console.log('form submitted: ', data)
    schema.parse(data)
  })

  return { handleSubmit, register, errors }
}
