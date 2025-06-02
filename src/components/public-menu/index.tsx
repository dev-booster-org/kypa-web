import { Github, Globe, Moon, Sun } from 'lucide-react'
import { Button } from '../button'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/modules/core/providers/theme-provider'

export function PublicMenu() {
  const { i18n } = useTranslation()
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="flex items-center gap-2 p-1 border-b border-gray-200 w-full justify-end bg-blue-50 dark:bg-zinc-700 dark:border-zinc-600">
      <div className="min-w-[1400px] mx-auto flex items-center justify-end gap-2">
        <Button variant="ghost" onClick={toggleTheme}>
          <Github /> <span className="text-xs">17k</span>
        </Button>
        <Button variant="ghost" onClick={toggleTheme}>
          {theme === 'light' ? <Sun /> : <Moon />}
        </Button>
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
