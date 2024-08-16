import { useId } from 'react'

export function AuthLayout () {
  const id = useId()
  return <div id={id}>Auth</div>
}
