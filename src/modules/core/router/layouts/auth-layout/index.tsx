import { AuthMenu } from '@/components'
import { Outlet } from 'react-router'

export function AuthLayout() {
  return (
    <div className="flex flex-col gap-8">
      <AuthMenu />
      <Outlet />
    </div>
  )
}
