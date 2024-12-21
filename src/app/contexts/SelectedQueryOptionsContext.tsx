import React, { createContext, useContext, useState, ReactNode } from 'react'

// Define the shape of a query option
interface QueryOption {
  id: string
  selectionState: 0 | 1 | 2 // 0 = unselected, 1 = positive selection, 2 = negative selection
  displayText: string
  negatedText: string
}

// Define the shape of the context state
interface SelectedQueryOptionsContextType {
  selectedOptions: QueryOption[]
  toggleOption: (optionId: string) => void
}

// Create the context with default values
const SelectedQueryOptionsContext = createContext<
  SelectedQueryOptionsContextType | undefined
>(undefined)

// Define props for the provider
interface SelectedQueryOptionsProviderProps {
  children: ReactNode
}

// Initial data for friend query options
const friendQueryOptionData: QueryOption[] = [
  {
    id: 'interactable',
    selectionState: 0,
    displayText: 'have not interacted with today',
    negatedText: 'already interacted with today',
  },
  {
    id: 'giftable',
    selectionState: 0,
    displayText: 'can receive a gift from me',
    negatedText: 'still have an unopened gift from me',
  },
  {
    id: 'lucky',
    selectionState: 0,
    displayText: 'lucky friends',
    negatedText: 'not lucky friends',
  },
  {
    id: 'friendlevel0',
    selectionState: 0,
    displayText: 'never interacted with',
    negatedText: 'have interacted with more than once',
  },
  {
    id: 'friendlevel1',
    selectionState: 0,
    displayText: 'good friends',
    negatedText: 'not good friends',
  },
  {
    id: 'friendlevel2',
    selectionState: 0,
    displayText: 'great friends',
    negatedText: 'not great friends',
  },
  {
    id: 'friendlevel3',
    selectionState: 0,
    displayText: 'ultra friends',
    negatedText: 'not ultra friends',
  },
  {
    id: 'friendlevel4',
    selectionState: 0,
    displayText: 'best friends',
    negatedText: 'not best friends',
  },
]

// Create the provider component
export const SelectedQueryOptionsProvider: React.FC<
  SelectedQueryOptionsProviderProps
> = ({ children }) => {
  const [selectedOptions, setSelectedOptions] = useState<QueryOption[]>(
    friendQueryOptionData
  )

  const toggleOption = (optionId: string) => {
    setSelectedOptions((prevOptions) =>
      prevOptions.map((option) =>
        option.id === optionId
          ? { ...option, selectionState: (option.selectionState + 1) % 3 } // Cycle through 0, 1, 2
          : option
      )
    )
  }

  return (
    <SelectedQueryOptionsContext.Provider
      value={{ selectedOptions, toggleOption }}
    >
      {children}
    </SelectedQueryOptionsContext.Provider>
  )
}

// Custom hook to use the context
export const useSelectedQueryOptions = (): SelectedQueryOptionsContextType => {
  const context = useContext(SelectedQueryOptionsContext)
  if (!context) {
    throw new Error(
      'useSelectedQueryOptions must be used within a SelectedQueryOptionsProvider'
    )
  }
  return context
}
