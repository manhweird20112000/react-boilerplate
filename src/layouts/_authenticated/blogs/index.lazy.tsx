import { createLazyFileRoute } from '@tanstack/react-router'
import React from 'react'

const BlogsPage = React.lazy(() => import('@/pages/blogs'))

export const Route = createLazyFileRoute('/_authenticated/blogs/')({
  component: BlogsPage
})
