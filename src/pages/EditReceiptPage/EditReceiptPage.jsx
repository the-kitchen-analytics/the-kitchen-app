import { useNavigate, useParams } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'
import { ButtonGroup, Loader, MainHeader } from '../../shared/components'
import { ErrorMessage, GoBackButton } from '../../shared/components'
import { usePostData, useReceiptContext } from '../../shared/hooks'
import { deleteReceiptById } from '../../domain/receipt'
import { DataTable } from '../../modules'

export const EditReceiptPage = () => {

  const { id } = useParams()
  const { getReceiptById } = useReceiptContext()
  const [isLoading, error, postData] = usePostData()
  const navigate = useNavigate()
  const receipt = getReceiptById(id)

  const handleDeleteButtonClick = async () => {
    if (window.confirm('Вы действительно хотите удалить запись?')) {
      await postData(deleteReceiptById, id)
      navigate(-1)
    }
  }

  return (
    <Grid>
      <Grid.Row>
        <Grid.Column>
          <MainHeader content={'Просмотреть запись'} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          {
            error && <ErrorMessage content={error.message} />
          }
          {
            isLoading
              ? <Loader />
              : (receipt && <DataTable data={[[receipt]]} showNotes />)
          }
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
          <ButtonGroup
            buttons={[
              {
                as: GoBackButton
              },
              {
                disabled: isLoading,
                fluid: true,
                icon: 'trash',
                type: 'button',
                negative: true,
                content: 'Удалить',
                onClick: handleDeleteButtonClick
              }
            ]}
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}
