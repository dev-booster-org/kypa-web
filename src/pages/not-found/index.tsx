import { NavLink } from 'react-router'

import { Button } from '@/components'
import { useTranslation } from 'react-i18next'

export function NotFound() {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col gap-4 items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">{t('notFound.title')}</h1>
      <p className="text-lg">{t('notFound.description')}</p>
      <NavLink to="/">
        <Button variant="outline">{t('notFound.button')}</Button>
      </NavLink>
    </div>
  )
}
