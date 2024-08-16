import { Button } from 'antd'

export default function AuthPage () {
  return (
    <Button
      type="primary"
      onClick={() => localStorage.setItem('isAuthenticated', 'true')}
    >
      Login
    </Button>
  )
}
