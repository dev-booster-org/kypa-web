import { useCallback, useMemo } from 'react'
import { NavLink } from 'react-router'
import { z } from 'zod'
import { useTranslation } from 'react-i18next'

import kypaIcon from '@/assets/kypa_icon.svg'

import { Button, Form } from '@/components'

export function SignUp() {
  const { t } = useTranslation()

  const formSchema = useMemo(() => {
    return z.object({
      name: z.string().min(1, { message: t('signUp.formErrors.name') }),
      email: z.string().email({ message: t('signUp.formErrors.email') }),
      password: z.string().min(8, { message: t('signUp.formErrors.password') }),
      confirmPassword: z
        .string()
        .min(8, { message: t('signUp.formErrors.password') }),
      terms: z.boolean().refine((value) => value, {
        message: t('signUp.formErrors.terms'),
      }),
    })
  }, [t])

  const handleSubmit = useCallback((data: z.infer<typeof formSchema>) => {
    console.log(data)
  }, [])

  return (
    <div className="flex flex-col h-screen w-full items-center p-4 lg:p-0">
      <div className="rounded p-4 bg-white shadow flex flex-col gap-4 items-center text-center dark:bg-zinc-700 max-w-[500px]">
        <img src={kypaIcon} alt="Kypa" className="w-[40px]" />
        <span className="text-2xl font-bold">{t('signUp.title')}</span>
        <span className="font-medium text-zinc-500 dark:text-zinc-400">
          {t('signUp.description')}
        </span>

        <Form
          formSchema={formSchema}
          onSubmit={handleSubmit}
          resetOnSubmit
          className="flex flex-col gap-4 w-full"
        >
          <Form.Input
            label={t('signUp.form.name')}
            name="name"
            type="text"
            placeholder={t('signUp.form.name')}
          />
          <Form.Input
            label={t('signUp.form.email')}
            name="email"
            type="email"
            placeholder={t('signUp.form.email')}
          />
          <Form.Input
            label={t('signUp.form.password')}
            name="password"
            type="password"
            placeholder={t('signUp.form.password')}
          />
          <Form.Input
            label={t('signUp.form.confirmPassword')}
            name="confirmPassword"
            type="password"
            placeholder={t('signUp.form.confirmPassword')}
          />
          <Form.Checkbox label={t('signUp.form.terms')} name="terms" />
          <Button>{t('signUp.form.submit')}</Button>
        </Form>

        <div className="flex items-center gap-2">
          <span className="font-medium text-zinc-500">
            {t('signUp.footer.hasAccount')}
          </span>
          <NavLink to="/sign-in" className="font-medium text-blue-500">
            {t('signUp.footer.signIn')}
          </NavLink>
        </div>
      </div>
    </div>
  )
}
