import Link from 'next/link'
import React from 'react'

const Books = () => {
  return (
    <div>
        This is a Book Page
        <Link className='px-6 py-2 bg-indigo-400' href={"games/bk1/bk10"}>
            Click to buy Books
        </Link>
    </div>
  )
}

export default Books