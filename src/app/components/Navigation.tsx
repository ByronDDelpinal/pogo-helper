export default function Navigation() {
    const navigationItemStyle = {
        listStyleType: 'none',
      }

  return (
    <ul className='flex'>
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
          className='inline-block py-1 px-3 text-gray-400 cursor-not-allowed'
          href='#'
        >
          Disabled Pill
        </a>
      </li>
    </ul>
  )
}
