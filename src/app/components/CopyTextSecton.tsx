import Image from 'next/image'
import { useState } from 'react'

import { useCopyToClipboard } from '../hooks/useCopyToClipboard'

export function CopyTextSection({
  stringToCopy,
}: {
  stringToCopy: string
}) {
  const copySectionStyle = {
    display: 'flex',
    padding: 'var(--spacing-m) 0',
  }

  const textToCopyStyle = {
    background: 'var(--gray-high)',
    color: 'var(--primary)',
    lineHeight: '1.5em',
    padding: 'var(--spacing-m)',
    position: 'relative',
    textAlign: 'center',
  }

  const copyButtonStyle = {
    alignItems: 'center',
    background: 'var(--gray-high)',
    color: 'var(--primary)',
    display: 'flex',
    flexDirection: 'column',
    padding: 'var(--spacing-s)',
  }

  const [copiedText, copy] = useCopyToClipboard()

  const handleCopy = (text: string) => () => {
    copy(text)
      .then(() => {
        console.log('Copied!', { text })
      })
      .catch(error => {
        console.error('Failed to copy!', error)
      })
  }

  return (
    <div onClick={handleCopy(stringToCopy)} style={copySectionStyle}>
      <code style={textToCopyStyle}>{stringToCopy}</code>
      <button style={copyButtonStyle}>
        <Image
          aria-hidden
          src='/copy-icon.svg'
          alt='Copy icon'
          width={16}
          height={16}
        />
        <p>Copy</p>
      </button>
    </div>
  )
}
