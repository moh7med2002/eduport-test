import React from 'react'

export default function Loader() {
  return (
    <div className='h-[100vh] bg-blue flex items-center justify-center text-white'>
        <div className="lds-facebook"><div></div><div></div><div></div></div>
    </div>
  )
}
