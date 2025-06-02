import { Shield, Lock, Users, Smartphone } from 'lucide-react'

import kypaDarkLogo from '@/assets/kypa_dark_logo.svg'

import { Button } from '@/components'
import { Card } from '@/pages/home/components/card'

export function Home() {
  return (
    <main className="w-screen h-screen flex flex-col items-center justify-center gap-8">
      <section className="flex flex-col items-center justify-center gap-8">
        <img src={kypaDarkLogo} alt="Kypa" className="w-[250px]" />
        <div className="flex flex-col items-center justify-center gap-2">
          <span className="font-medium text-xl">
            Your passwords, secured and synchronized across all your devices.
          </span>
          <span className="font-medium text-xl">
            Military-grade encryption meets user-friendly design.
          </span>
        </div>
      </section>
      <section className="flex items-center gap-2">
        <Button>Sign in</Button>
        <Button variant="outline">Sign up</Button>
      </section>
      <section className="flex items-center gap-2 max-w-[1400px]">
        <Card>
          <Lock className="text-blue-500" size={28} />
          <span className="font-bold">AES-256 Encryption</span>
          <span>
            Military-grade encryption protects your passwords with the highest
            security standards.
          </span>
        </Card>
        <Card>
          <Smartphone className="text-blue-500" size={28} />
          <span className="font-bold">AES-256 Encryption</span>
          <span>
            Military-grade encryption protects your passwords with the highest
            security standards.
          </span>
        </Card>
        <Card>
          <Users className="text-blue-500" size={28} />
          <span className="font-bold">AES-256 Encryption</span>
          <span>
            Military-grade encryption protects your passwords with the highest
            security standards.
          </span>
        </Card>
        <Card>
          <Shield className="text-blue-500" size={28} />
          <span className="font-bold">AES-256 Encryption</span>
          <span>
            Military-grade encryption protects your passwords with the highest
            security standards.
          </span>
        </Card>
      </section>
    </main>
  )
}
