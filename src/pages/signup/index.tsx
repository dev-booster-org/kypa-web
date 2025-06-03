import kypaLightLogo from '@/assets/kypa_light_logo.svg'
import kypaDarkLogo from '@/assets/kypa_dark_logo.svg'

import { useTheme } from '@/modules/core/providers/theme-provider'

import { Card } from '@/components'

export function SignUp() {
  const { theme } = useTheme()

  return (
    <div className="flex flex-col h-screen w-full">
      <div className="flex flex-col gap-8 max-w-[1400px] mx-auto w-full">
        <section className="flex flex-col gap-2 items-center">
          <img
            src={theme === 'light' ? kypaDarkLogo : kypaLightLogo}
            alt="Kypa"
            className="w-[200px]"
          />
          <span className="text-2xl font-bold">Cadastre-se gratuitamente</span>
          <span className="text-lg font-medium text-zinc-500">
            Falta muito pouco para você começar a gerenciar suas senhas com
            segurança!
          </span>
        </section>
        <section className="flex gap-4">
          <Card>
            <span>Form</span>
          </Card>
          <Card>
            <span>Image</span>
          </Card>
        </section>
      </div>
    </div>
  )
}
