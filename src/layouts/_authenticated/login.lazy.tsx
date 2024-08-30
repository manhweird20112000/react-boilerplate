import { createLazyFileRoute } from '@tanstack/react-router'
import React from 'react'

const SignInPage = React.lazy(() => import('@/pages/sign-in'))

export const Route = createLazyFileRoute('/_authenticated/login')({
  component: SignInPage
})
