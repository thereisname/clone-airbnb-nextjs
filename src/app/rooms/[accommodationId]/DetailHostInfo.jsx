import React from 'react'

const DetailHostInfo = ({ hostName, hostSince }) => {
  return (
    <div>
      <h2 className='text-xl font-bold mb-4'>Host Information</h2>
      <p>Host Name: {hostName}</p>
      <p>Host Since: {hostSince}</p>
    </div>
  )
}

export default DetailHostInfo
