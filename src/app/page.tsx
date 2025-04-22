import MainLayout from '~/components/layouts/main'
import CTA from './home/cta'

export default function Home() {
  return (
    <MainLayout>
      <h1>Home</h1>

      {/* CTA Section */}
      <CTA />
    </MainLayout>
  )
}
