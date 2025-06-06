import { Folder, Key } from 'lucide-react'

import { OptionsCard } from './components/options-card'
import { PasswordCard } from './components/password-card'

export function Dashboard() {
  return (
    <div className="h-full w-full flex flex-col gap-8">
      <div className="min-w-[1400px] mx-auto flex items-start gap-8">
        <section className="w-1/4">
          <OptionsCard
            title="Ações Rápidas"
            options={[
              {
                label: 'Gerar Senha',
                icon: <Key size={18} />,
                action: () => {},
              },
              {
                label: 'Criar Pasta',
                icon: <Folder size={18} />,
                action: () => {},
              },
            ]}
          />
        </section>
        <section className="flex-1 flex flex-col gap-4">
          <span className="text-lg font-bold pb-4 border-b border-gray-200 dark:border-zinc-600">
            Suas Senhas
          </span>
          <div className="flex flex-wrap gap-4">
            {Array.from({ length: 10 }).map((_, index) => (
              <PasswordCard key={index} title={`Senha ${index + 1}`} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
