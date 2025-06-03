import kypaIcon from '@/assets/kypa_icon.svg'

import { Button, Form } from '@/components'
import { useCallback } from 'react'
import { NavLink } from 'react-router'
import { z } from 'zod'

const formSchema = z.object({
  email: z.string().email({ message: 'Email inválido' }),
  password: z.string().min(8, { message: 'Mínimo de 8 caracteres' }),
  keepSignedIn: z.boolean(),
})

type FormData = z.infer<typeof formSchema>

export function SignIn() {
  const handleSubmit = useCallback((data: FormData) => {
    console.log(data)
  }, [])

  return (
    <div className="flex flex-col h-screen w-full items-center p-4 lg:p-0">
      <div className="rounded p-4 bg-white shadow flex flex-col gap-4 items-center text-center dark:bg-zinc-700 max-w-[500px] lg:min-w-[500px]">
        <img src={kypaIcon} alt="Kypa" className="w-[40px]" />
        <span className="text-2xl font-bold">Bem Vindo de Volta!</span>
        <span className="font-medium text-zinc-500 dark:text-zinc-400">
          Faça login para continuar
        </span>

        <Form
          formSchema={formSchema}
          onSubmit={handleSubmit}
          resetOnSubmit
          className="flex flex-col gap-4 w-full"
        >
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
          <div className="flex items-center justify-between">
            <Form.Checkbox
              label="Manter conectado"
              name="keepSignedIn"
              defaultChecked
            />
            <NavLink
              to="/forgot-password"
              className="text-sm font-medium text-blue-500"
            >
              Esqueceu sua senha?
            </NavLink>
          </div>
          <Button>Entrar</Button>
        </Form>
      </div>
    </div>
  )
}
