import { useSelectedQueryOptions } from '../../contexts/SelectedQueryOptionsContext'

interface QueryOptionProps {
  option: {
    id: string
    selectionState: 0 | 1 | 2
    displayText: string
    negatedText: string
  }
}

export const QueryOption: React.FC<QueryOptionProps> = ({ option }) => {
  const { toggleOption } = useSelectedQueryOptions()

  const getDisplayText = () => {
    switch (option.selectionState) {
      case 0:
      case 1:
        return option.displayText
      case 2:
        return option.negatedText
      default:
        return 'Not Selected'
    }
  }

  const getBackgroundColor = () => {
    switch (option.selectionState) {
      case 0:
        return 'var(--primary)'
      case 1:
      case 2:
        return 'var(--action-low)'
      default:
        return 'var(--primary)'
    }
  }

  const queryOptionStyle = {
    background: option.selectionState === 0 ? 'var(--primary)' : 'var(--action-low)',
    color: option.selectionState === 0 ? 'var(--action-low)' : 'var(--primary)',
    padding: 'var(--spacing-s)',
    margin: 'var(--spacing-s)',
  }

  return (
    <button style={queryOptionStyle} onClick={() => toggleOption(option.id)}>
      {getDisplayText()}
    </button>
  )
}
