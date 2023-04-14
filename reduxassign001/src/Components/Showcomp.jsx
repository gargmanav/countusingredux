import React from 'react'
import { useSelector } from 'react-redux'

const Showcomp = () => {
    const selector = useSelector((storedata)=>{
        return storedata;
    })
    console.log(selector);
  return (
    <div><p>{selector.count}</p></div>
  )
}

export default Showcomp