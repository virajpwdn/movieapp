import React from 'react'

const page = async ({params}: {params: {slug: string}}) => {
    const {slug} = await params;
    const [first, second] = slug;
  return (
    <div>
        <h1>{first}</h1>
        <h2>{second}</h2>
    </div>
  )
}

export default page