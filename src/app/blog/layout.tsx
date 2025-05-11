import { PropsWithChildren } from 'react'
import MainLayout from '~/components/layouts/main'

type IProps = PropsWithChildren

export default function BlogLayout({ children }: IProps) {
  return <MainLayout>{children}</MainLayout>
}
