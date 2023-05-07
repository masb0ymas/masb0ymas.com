import { Center, Footer } from '@mantine/core'
import { BRAND } from '~/config/env'

function PublicFooter() {
  const dateNow = new Date()
  const yearNow = dateNow.getFullYear()

  const startYear = 2023
  const rangeYear =
    startYear === yearNow ? `${yearNow}` : `${startYear} - ${yearNow}`

  return (
    <Footer height={60} p="md" style={{ fontSize: 14 }}>
      <Center>
        &copy; {`${rangeYear} Created by`}&nbsp;
        <b>{BRAND}</b>
      </Center>
    </Footer>
  )
}

export default PublicFooter
