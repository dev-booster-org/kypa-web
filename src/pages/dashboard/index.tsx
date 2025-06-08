import { Filter, Folder, Key } from 'lucide-react'

import { OptionsCard } from './components/options-card'
import { Button, CollapsableBox } from '@/components'
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
        <section className="flex-1 flex flex-col gap-4 w-full">
          <div className="flex gap-4 w-full">
            <input
              type="text"
              placeholder="Pesquisar Senhas"
              className="p-2 rounded border border-zinc-300 focus:border-blue-500 outline-none dark:bg-zinc-800 dark:border-zinc-700 dark:focus:border-blue-500 flex-1"
            />
            <Button>
              <Filter size={18} />
            </Button>
          </div>
          <div>
            <CollapsableBox title="Geral" variant="ghost" defaultOpen={true}>
              <div className="flex flex-col gap-4">
                <PasswordCard
                  name="Senha 1"
                  email="senha1@gmail.com"
                  folderName="Geral"
                  favicon="https://www.google.com/favicon.ico"
                />
                <PasswordCard
                  name="Senha 2"
                  email="senha2@gmail.com"
                  folderName="Geral"
                  favicon="https://www.google.com/favicon.ico"
                />
                <PasswordCard
                  name="Senha 3"
                  email="senha3@gmail.com"
                  folderName="Geral"
                  favicon="https://www.google.com/favicon.ico"
                />
              </div>
            </CollapsableBox>
          </div>
        </section>
      </div>
    </div>
  )
}
