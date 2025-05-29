import React, { useState } from "react"
import "./style.css"
export const Loading = () => {
     const [loading, setLoading] = useState(false)
    return <div>
        <span className="loader"></span>
    </div>
}


export const Suspense = ({children}) => {
  return ( <React.Suspense fallback={<Loading/>}>
    {children}
  </React.Suspense>
  )
}