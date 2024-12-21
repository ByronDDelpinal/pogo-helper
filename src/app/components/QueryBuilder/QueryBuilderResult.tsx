import { useSelectedQueryOptions } from '../../contexts/SelectedQueryOptionsContext'
import { CopyTextSection } from '../CopyTextSecton'

export const QueryBuilderResult: React.FC = () => {
  const { selectedOptions } = useSelectedQueryOptions()
  let searchString = ''

  selectedOptions.map((option) => {
    if (option.selectionState !== 0) {
        if (searchString.length !== 0) searchString += '&';
        if (option.selectionState === 2) searchString += '!';
        searchString += option.id;
    }
  })

  return (
    <CopyTextSection stringToCopy={searchString} />
  )
}
