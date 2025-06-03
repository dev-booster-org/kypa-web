import { Github, Globe, Languages, Moon, Sun } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import kypaIcon from '@/assets/kypa_icon.svg'

import { useTheme } from '@/modules/core/providers/theme-provider'

import { Button } from '@/components/button'
import { Link } from '@/components/link'
import { Dropdown } from '@/components/dropdown'
import { NavLink } from 'react-router'

const languagesText = {
  pt: 'Português',
  en: 'English',
}

export function PublicMenu() {
  const { i18n } = useTranslation()
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="flex items-center gap-2 p-1 border-b border-gray-200 w-full justify-end bg-blue-50 dark:bg-zinc-700 dark:border-zinc-600">
      <div className="min-w-[1400px] mx-auto flex items-center justify-between gap-2">
        <NavLink
          to="/"
          className="cursor-pointer hover:scale-105 transition-all"
        >
          <img src={kypaIcon} alt="Kypa" className="w-[24px]" />
        </NavLink>
        <div className="flex items-center gap-2">
          <Link href="https://github.com/dev-booster-org" variant="ghost">
            <Github size={20} />
          </Link>
          <Button variant="ghost" onClick={toggleTheme}>
            {theme === 'light' ? <Sun /> : <Moon />}
          </Button>
          <Dropdown>
            <Dropdown.Trigger>
              <Button variant="ghost">
                <Languages size={20} />{' '}
                {languagesText[i18n.language as keyof typeof languagesText] ||
                  'PT'}
              </Button>
            </Dropdown.Trigger>
            <Dropdown.Content
              options={[
                {
                  label: 'Português',
                  value: 'pt',
                  icon: <Globe size={20} />,
                  action: () => i18n.changeLanguage('pt'),
                },
                {
                  label: 'English',
                  value: 'en',
                  icon: <Globe size={20} />,
                  action: () => i18n.changeLanguage('en'),
                },
              ]}
            />
          </Dropdown>
        </div>
      </div>
    </div>
  )
}
