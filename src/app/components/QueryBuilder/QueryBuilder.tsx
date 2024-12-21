import { useSelectedQueryOptions } from '../../contexts/SelectedQueryOptionsContext'
import { QueryOption } from './QueryOption'

export const QueryBuilder: React.FC = () => {
  const { selectedOptions, unselectAllOptions } = useSelectedQueryOptions()

  const getClearAll = () => {
    const numSelectedOptions = selectedOptions.filter((option) => option.selectionState !== 0);
    if (numSelectedOptions.length > 0) {
      return (
        <button onClick={unselectAllOptions} style={clearAllStyle}>(Clear All)</button>
      )
    }
  }

  const clearAllStyle = {
    color: 'var(--action-low)',
    cursor: 'pointer',
  }

  const selectedOptionsStyle = {
    padding: 'var(--spacing-m) 0',
  }

  return (
    <div>
      <div>
        <p style={selectedOptionsStyle}>Available Options:</p>
        {selectedOptions.map((option) => {
          if (option.selectionState === 0) {
            return <QueryOption key={option.id} option={option} />
          }
        })}
        <p style={selectedOptionsStyle}>Selected Options: {getClearAll()}</p>
        {selectedOptions.map((option) => {
          if (option.selectionState !== 0) {
            return <QueryOption key={option.id} option={option} />
          }
        })}
      </div>
    </div>
  )
}
