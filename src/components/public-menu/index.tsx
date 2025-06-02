import { Globe } from 'lucide-react'
import { Button } from '../button'
import { useTranslation } from 'react-i18next'

export function PublicMenu() {
  const { i18n } = useTranslation()

  return (
    <div className="flex items-center gap-2 p-1 border-b border-gray-200 w-full justify-end bg-blue-50">
      <div className="min-w-[1400px] mx-auto flex items-center justify-end gap-2">
        <Button variant="ghost" onClick={() => i18n.changeLanguage('pt')}>
          <Globe /> PT
        </Button>
        <Button variant="ghost" onClick={() => i18n.changeLanguage('en')}>
          <Globe /> EN
        </Button>
      </div>
    </div>
  )
}
