import React from 'react'
import Usercard from './Usercard'
import { useFetch } from '../../hooks/useFetch'

const User = () => {
   const {data} = useFetch("/users")
  return (
    
    <div className='mt-20'>
         <Usercard data={data}/>
     </div>
  )
}

export default React.memo(User)