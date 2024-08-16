import { createLazyFileRoute } from '@tanstack/react-router'
import React from 'react'

const BlogDetailPage = React.lazy(() => import('@/pages/blogs/detail'))

export const Route = createLazyFileRoute('/_authenticated/blogs/$blogId')({
  component: BlogDetailPage
})
