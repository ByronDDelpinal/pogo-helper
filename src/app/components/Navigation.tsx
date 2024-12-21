export default function Navigation() {
  const navigationItemStyle = {
    listStyleType: 'none',
  }

  const navigationStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  }

  return (
    <ul style={navigationStyle}>
      <li className='mr-3' style={navigationItemStyle}>
        <a
          className='inline-block bg-[--action-high] border border-[--action-high] text-[--primary] rounded py-1 px-3'
          href='#friend-queries'
        >
          Friendship Queries
        </a>
      </li>
      <li className='mr-3' style={navigationItemStyle}>
        <a
          className='inline-block rounded text-[--action-high] hover:border-[--tertiary] hover:bg-[--action-high] hover:text-[--primary] py-1 px-3'
          href='#pokemon-queries'
        >
          Pokemon Queries
        </a>
      </li>
      <li className='mr-3' style={navigationItemStyle}>
        <a
          className='inline-block rounded text-[--action-high] hover:border-[--tertiary] hover:bg-[--action-high] hover:text-[--primary] py-1 px-3'
          href='#resources'
        >
          Resources
        </a>
      </li>
    </ul>
  )
}
