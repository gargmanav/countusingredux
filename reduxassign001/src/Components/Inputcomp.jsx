import React, { useState } from 'react'
import mystore from '../Redux/Store'

const Inputcomp = () => {
   const [data, setdata] = useState(0)
   const addfunc = ()=>{
    setdata(data+1)
    mystore.dispatch({
        type:"count+",
        username:data,
    })
   }
   const subfunc = ()=>{
    setdata(data-1)
    mystore.dispatch({
        type:"count-",
        username:data,
    })
   }
  return (
    <div style={{marginTop:"50px"}}><button onClick={addfunc}>Count+</button>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button onClick={subfunc}>Count-</button>
    </div>
  )
}

export default Inputcomp