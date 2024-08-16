import { createLazyFileRoute } from '@tanstack/react-router'
import React from 'react'

const AuthPage = React.lazy(() => import('@/pages/auth'))

export const Route = createLazyFileRoute('/_authenticated/login')({
  component: AuthPage
})
