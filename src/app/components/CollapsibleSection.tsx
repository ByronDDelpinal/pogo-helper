import React, { CSSProperties, ReactNode } from 'react'

interface CollapsibleProps {
  additionalButtonText: string
  collapsed: boolean
  children: ReactNode
}

export const CollapsibleSection: React.FC<CollapsibleProps> = ({
  additionalButtonText,
  collapsed,
  children,
}) => {
  const [isCollapsed, setIsCollapsed] = React.useState(collapsed)

  const collapsibleButtonStyle = {
    background: 'var(--primary)',
    borderRadius: '5px',
    color: 'var(--action-low)',
    margin: 'var(--spacing-m) auto',
    padding: 'var(--spacing-m) var(--spacing-m)',
    maxWidth: '75vw'
  }

  const collapsibleSectionStyle = {
    maxHeight: isCollapsed ? '0px' : '10000px',
    transition: 'visibility 1s, max-height 1s',
    visibility: isCollapsed ? 'hidden' : 'visible' as CSSProperties['visibility'],
  }

  return (
    <>
      <div
        aria-expanded={isCollapsed}
        className={`collapse-content ${isCollapsed ? 'collapsed' : 'expanded'}`}
        style={collapsibleSectionStyle}
      >
        {children}
      </div>
      <button
        className='collapse-button'
        onClick={() => setIsCollapsed(!isCollapsed)}
        style={collapsibleButtonStyle}
      >
        {`Read ${isCollapsed ? 'More' : 'Less'} ${
          additionalButtonText ? additionalButtonText : ''
        }`}
      </button>
    </>
  )
}
