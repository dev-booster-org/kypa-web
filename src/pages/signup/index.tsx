import kypaIcon from '@/assets/kypa_icon.svg'

import { Button, Form } from '@/components'
import { useCallback } from 'react'
import { NavLink } from 'react-router'
import { z } from 'zod'

const formSchema = z.object({
  name: z.string().min(1, { message: 'Nome é obrigatório' }),
  email: z.string().email({ message: 'Email inválido' }),
  password: z.string().min(8, { message: 'Mínimo de 8 caracteres' }),
  confirmPassword: z.string().min(8, { message: 'Mínimo de 8 caracteres' }),
  terms: z.boolean().refine((value) => value, {
    message: 'Obrigatório',
  }),
})

type FormData = z.infer<typeof formSchema>

export function SignUp() {
  const handleSubmit = useCallback((data: FormData) => {
    console.log(data)
  }, [])

  return (
    <div className="flex flex-col h-screen w-full items-center p-4 lg:p-0">
      <div className="rounded p-4 bg-white shadow flex flex-col gap-4 items-center text-center dark:bg-zinc-700 max-w-[500px]">
        <img src={kypaIcon} alt="Kypa" className="w-[40px]" />
        <span className="text-2xl font-bold">Criar Conta</span>
        <span className="font-medium text-zinc-500 dark:text-zinc-400">
          Se junte a nossa comunidade e comece a gerenciar suas senhas com
          segurança!
        </span>

        <Form
          formSchema={formSchema}
          onSubmit={handleSubmit}
          resetOnSubmit
          className="flex flex-col gap-4 w-full"
        >
          <Form.Input label="Nome" name="name" type="text" placeholder="Nome" />
          <Form.Input
            label="Email"
            name="email"
            type="email"
            placeholder="Email"
          />
          <Form.Input
            label="Senha"
            name="password"
            type="password"
            placeholder="Senha"
          />
          <Form.Input
            label="Confirmar Senha"
            name="confirmPassword"
            type="password"
            placeholder="Confirmar Senha"
          />
          <Form.Checkbox
            label="Li e aceito os termos e condições"
            name="terms"
          />
          <Button>Criar Conta</Button>
        </Form>

        <div className="flex items-center gap-2">
          <span className="font-medium text-zinc-500">Já tem uma conta?</span>
          <NavLink to="/sign-in" className="font-medium text-blue-500">
            Entrar
          </NavLink>
        </div>
      </div>
    </div>
  )
}
