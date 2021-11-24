import { useState } from 'react'
import { SentPair } from '../../../../server/types'
import Button from '../../widgets/Button'
import EditSelectedSentPair from './EditSelectedSentPair'

interface Props {
  sentPair: SentPair
  onRemoveSentPair: (sentPair: SentPair) => void
  onSentPairUpdated: () => void
}

const SelectedSentPair: React.FC<Props> = props => {
  const {
    sentPair,
    onRemoveSentPair,
    onSentPairUpdated,
  } = props

  const [isEditing, setIsEditing] = useState<boolean>(false)

  let display
  if (isEditing) {
    display = (
      <EditSelectedSentPair
        sentPair={sentPair}
        onSentPairUpdated={() => { onSentPairUpdated(); setIsEditing(false) }}
        onCancel={() => setIsEditing(false)} />
    )
  } else {
    display = (
      <div className="flex bg-blue-200 rounded-md p-5">
        <div className="flex-col flex-1 cursor-pointer space-y-2" onClick={() => onRemoveSentPair(sentPair)}>
          <div>{sentPair.targetSent}</div>
          <div>{sentPair.sourceSent}</div>
        </div>
        <div className="flex items-center m-2">
          <Button onClick={() => setIsEditing(true)}>Edit</Button>
        </div>
      </div>
    )
  }

  return (
    <div>
      {display}
    </div>
  )
}

export default SelectedSentPair