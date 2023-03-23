import {
  Burger,
  Center,
  Container,
  createStyles,
  Group,
  Header,
  Menu,
  rem,
  Text,
  UnstyledButton,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconChevronDown } from '@tabler/icons-react'
import { BRAND } from 'config/env'
import { ColorSchemeToggle } from 'core/components/ColorSchemeToggle/ColorSchemeToggle'
import useNavMenu from 'data/useNavMenu'

const useStyles = createStyles((theme) => ({
  inner: {
    height: rem(56),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  linkLabel: {
    marginRight: rem(5),
  },
}))

export default function PublicHeader() {
  const [opened, { toggle }] = useDisclosure(false)
  const { classes } = useStyles()

  const queryNavMenu = useNavMenu()
  const { data } = queryNavMenu

  const items = data.map((item) => {
    const menuItems = item?.links?.map((subItem) => (
      <Menu.Item key={subItem.link}>{subItem.label}</Menu.Item>
    ))

    if (menuItems) {
      return (
        <Menu
          key={item.label}
          trigger="hover"
          transitionProps={{ exitDuration: 0 }}
          withinPortal
        >
          <Menu.Target>
            <a
              href={item.link}
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              <Center>
                <span className={classes.linkLabel}>{item.label}</span>
                <IconChevronDown size="0.9rem" stroke={1.5} />
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      )
    }

    return (
      <a
        key={item.label}
        href={item.link}
        className={classes.link}
        onClick={(event) => event.preventDefault()}
      >
        <UnstyledButton>
          <Group>
            {item.icon}
            {item.label}
          </Group>
        </UnstyledButton>
      </a>
    )
  })

  return (
    <Header height={56}>
      <Container>
        <div className={classes.inner}>
          <Text weight={600} size="lg">
            {BRAND}
          </Text>

          <Group spacing={5} className={classes.links}>
            {items}

            <ColorSchemeToggle />
          </Group>

          <Burger
            opened={opened}
            onClick={toggle}
            className={classes.burger}
            size="sm"
          />
        </div>
      </Container>
    </Header>
  )
}
