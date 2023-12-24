import { Grid } from 'semantic-ui-react'
import { MainLayout } from '../../components/layouts'
import { ContactUs } from './ContactUs'
import contactOptions from '../../data/contactOptions.json'
import { Info } from './Info'

export const InfoPage = () => {

  const settingsOptions = [
    {
      key: 'contact-us',
      element: (
        <ContactUs
          options={contactOptions}
        />
      )
    },
    {
      key: 'app-info',
      element: <Info />
    }
  ]

  const content = settingsOptions.map(({ key, element }) => (
    <Grid.Row key={key}>
      <Grid.Column>
        {
          element
        }
      </Grid.Column>
    </Grid.Row>
  ))

  return (
    <MainLayout
      icon="question circle"
      header="Информация"
      content={content}
    />
  )
}