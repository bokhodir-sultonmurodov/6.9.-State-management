import React, { useEffect, useState } from 'react'
import { api } from '../api'
import Productss from './products/Productss'
import { useFetch } from '../hooks/useFetch'

const Home = () => {
 const {data} = useFetch("/products")
  return (
    <div className='mt-20'>
      <Productss data={data} />

    </div>
  )
}

export default React.memo(Home)