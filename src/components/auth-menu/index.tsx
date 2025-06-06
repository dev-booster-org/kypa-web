import { LogOut, Settings } from 'lucide-react'
import { NavLink, useNavigate } from 'react-router'

import kypaIcon from '@/assets/kypa_icon.svg'

import { Dropdown } from '@/components/dropdown'
import { Avatar } from '@/components/avatar'

export function AuthMenu() {
  const navigate = useNavigate()

  return (
    <div className="flex items-center gap-2 p-2 border-b border-gray-200 w-full justify-end bg-blue-50 dark:bg-zinc-700 dark:border-zinc-600">
      <div className="w-full lg:max-w-[1400px] mx-auto flex items-center justify-between gap-2">
        <NavLink
          to="/"
          className="cursor-pointer hover:scale-105 transition-all"
        >
          <img src={kypaIcon} alt="Kypa" className="w-[24px]" />
        </NavLink>
        <div className="flex items-center gap-2">
          <Dropdown>
            <Dropdown.Trigger>
              <Avatar size="sm" cursorPointer />
            </Dropdown.Trigger>
            <Dropdown.Content
              options={[
                {
                  label: 'Configurações',
                  value: 'settings',
                  icon: <Settings size={20} />,
                  action: () => navigate('/auth/settings'),
                },
                {
                  label: 'Sair',
                  value: 'logout',
                  icon: <LogOut size={20} />,
                  action: () => navigate('/sign-in'),
                },
              ]}
            />
          </Dropdown>
        </div>
      </div>
    </div>
  )
}
