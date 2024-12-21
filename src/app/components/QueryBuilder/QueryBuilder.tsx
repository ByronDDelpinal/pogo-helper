import { useSelectedQueryOptions } from '../../contexts/SelectedQueryOptionsContext'
import { QueryOption } from './QueryOption'

export const QueryBuilder: React.FC = () => {
  const { selectedOptions } = useSelectedQueryOptions()

  return (
    <div>
      <div>
        <p>Available Options:</p>
        {selectedOptions.map((option) => {
          if (option.selectionState === 0) {
            return <QueryOption key={option.id} option={option} />
          }
        })}
        <p>Selected Options:</p>
        {selectedOptions.map((option) => {
          if (option.selectionState !== 0) {
            return <QueryOption key={option.id} option={option} />
          }
        })}
      </div>
    </div>
  )
}
