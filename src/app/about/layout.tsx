import { PropsWithChildren } from 'react'
import MainLayout from '~/components/layouts/main'

type IProps = PropsWithChildren

export default function AboutLayout({ children }: IProps) {
  return <MainLayout>{children}</MainLayout>
}
