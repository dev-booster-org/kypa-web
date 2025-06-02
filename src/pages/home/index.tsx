import { useMemo } from 'react'
import { Shield, Lock, Users, Smartphone } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import kypaDarkLogo from '@/assets/kypa_dark_logo.svg'
import kypaLightLogo from '@/assets/kypa_light_logo.svg'

import { Button } from '@/components'
import { Card } from '@/pages/home/components/card'
import { useTheme } from '@/modules/core/providers/theme-provider'

export function Home() {
  const { t } = useTranslation()
  const { theme } = useTheme()

  const cards = useMemo(() => {
    return [
      {
        icon: <Lock className="text-blue-500" size={28} />,
        title: t('home.cards.card1.title'),
        description: t('home.cards.card1.description'),
      },
      {
        icon: <Smartphone className="text-blue-500" size={28} />,
        title: t('home.cards.card2.title'),
        description: t('home.cards.card2.description'),
      },
      {
        icon: <Users className="text-blue-500" size={28} />,
        title: t('home.cards.card3.title'),
        description: t('home.cards.card3.description'),
      },
      {
        icon: <Shield className="text-blue-500" size={28} />,
        title: t('home.cards.card4.title'),
        description: t('home.cards.card4.description'),
      },
    ]
  }, [t])

  return (
    <div className="flex flex-col items-center gap-8 p-4">
      <section className="flex flex-col items-center justify-center gap-8">
        <img
          src={theme === 'light' ? kypaDarkLogo : kypaLightLogo}
          alt="Kypa"
          className="w-[250px]"
        />
        <div className="flex flex-col items-center justify-center gap-2 text-center">
          <span className="font-medium text-xl">{t('home.title')}</span>
          <span className="font-medium text-xl">{t('home.description')}</span>
        </div>
      </section>
      <section className="flex items-center gap-2">
        <Button>{t('home.buttons.signIn')}</Button>
        <Button variant="outline">{t('home.buttons.signUp')}</Button>
      </section>
      <section className="flex items-center gap-2 max-w-[1400px] flex-wrap lg:flex-nowrap">
        {cards.map((card, index) => (
          <Card key={index}>
            {card.icon}
            <span className="font-bold">{card.title}</span>
            <span>{card.description}</span>
          </Card>
        ))}
      </section>
      <footer className="flex items-center justify-center gap-2">
        <span className="text-zinc-600">
          Densenvolvido por{' '}
          <a href="https://github.com/jhonesjhonatas">Jhones Jhonatas</a> e{' '}
          <a href="https://github.com/bruno-oli">Bruno Oliveira</a>
        </span>
      </footer>
    </div>
  )
}
