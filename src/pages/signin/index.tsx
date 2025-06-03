import { useCallback, useMemo } from 'react'
import { NavLink } from 'react-router'
import { z } from 'zod'
import { useTranslation } from 'react-i18next'

import kypaIcon from '@/assets/kypa_icon.svg'

import { Button, Form } from '@/components'

export function SignIn() {
  const { t } = useTranslation()

  const formSchema = useMemo(() => {
    return z.object({
      email: z.string().email({ message: t('signIn.formErrors.email') }),
      password: z.string().min(8, { message: t('signIn.formErrors.password') }),
      keepSignedIn: z.boolean(),
    })
  }, [t])

  const handleSubmit = useCallback((data: z.infer<typeof formSchema>) => {
    console.log(data)
  }, [])

  return (
    <div className="flex flex-col h-screen w-full items-center p-4 lg:p-0">
      <div className="rounded p-4 bg-white shadow flex flex-col gap-4 items-center text-center dark:bg-zinc-700 w-full lg:w-[500px]">
        <img src={kypaIcon} alt="Kypa" className="w-[40px]" />
        <span className="text-2xl font-bold">{t('signIn.title')}</span>
        <span className="font-medium text-zinc-500 dark:text-zinc-400">
          {t('signIn.description')}
        </span>

        <Form
          formSchema={formSchema}
          onSubmit={handleSubmit}
          resetOnSubmit
          className="flex flex-col gap-4 w-full"
        >
          <Form.Input
            label={t('signIn.form.email')}
            name="email"
            type="email"
            placeholder={t('signIn.form.email')}
          />
          <Form.Input
            label={t('signIn.form.password')}
            name="password"
            type="password"
            placeholder={t('signIn.form.password')}
          />
          <div className="flex items-center justify-between">
            <Form.Checkbox
              label={t('signIn.form.keepSignedIn')}
              name="keepSignedIn"
              defaultChecked
            />
            <NavLink
              to="/forgot-password"
              className="text-sm font-medium text-blue-500"
            >
              {t('signIn.form.forgotPassword')}
            </NavLink>
          </div>
          <Button>{t('signIn.form.submit')}</Button>
        </Form>
        <div className="flex items-center gap-2">
          <span className="font-medium text-zinc-500">
            {t('signIn.footer.noAccount')}
          </span>
          <NavLink to="/sign-up" className="font-medium text-blue-500">
            {t('signIn.footer.createAccount')}
          </NavLink>
        </div>
      </div>
    </div>
  )
}
