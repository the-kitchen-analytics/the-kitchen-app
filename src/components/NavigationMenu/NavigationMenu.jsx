import { Menu } from 'semantic-ui-react'
import { CREATE_RECEIPT, INFO, SETTINGS, STATISTICS_DAILY, TABLE_DAILY } from '../../data/routePaths'
import { NavigationMenuItem } from './NavigationMenuItem'
import { useUserSettings } from '../../hooks'
import './NavigationMenu.css'

const menuItems = [
  {
    name: 'home',
    icon: 'home',
    to: TABLE_DAILY
  },
  {
    name: 'statistics',
    icon: 'chart pie',
    to: STATISTICS_DAILY
  },
  {
    name: 'create-receipt',
    icon: 'plus circle',
    to: CREATE_RECEIPT
  },
  {
    name: 'info',
    icon: 'question circle',
    to: INFO
  },
  {
    name: 'settings',
    icon: 'setting',
    to: SETTINGS
  }
]

export const NavigationMenu = () => {
  const { settings: { accentColor } } = useUserSettings()

  return (
    <Menu
      className="navigation-menu"
      icon
      borderless
      fluid
      defaultActiveIndex={1}
      color={accentColor || 'black'}
      fixed="bottom"
      size="large"
      widths={menuItems.length}
    >
      {
        menuItems.map(item => <NavigationMenuItem key={item.name} {...item} />)
      }
    </Menu>
  )
}
