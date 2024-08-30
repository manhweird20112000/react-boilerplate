import { AuthLayout, HomeLayout } from '@/components/partials'
import { useAuth } from '@/hooks/use-auth.ts'

export function RootLayout (){
  const { isLogged } = useAuth()
  return isLogged() ? <HomeLayout /> : <AuthLayout />
}
