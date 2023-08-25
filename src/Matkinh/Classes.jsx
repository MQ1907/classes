import React, { useState } from 'react'
import Icon from './Icon'


export default function Body() {

  let [glass, setGlass] = useState("")

  const handleChangeGlass = (type) => {
    setGlass(type)
  }


  return (
    <div className='container mt-5'>
      <div className="row">
        <div className='text-center text-danger'>
            <h1>Cypher Classes</h1>
        </div>
        <div className='col-6 text-center'>
          <img src="./img/model.jpg" alt="" width="250px" />
        </div>
        <div className='col-6 text-center position-relative'>
          <img src="./img/model.jpg" alt="" width="250px" />
          <div>
            <img src={glass} alt="" className='position-absolute' style={{top:" 33%", left: "50%", transform: "translate(-50%, -50%)",width:"150px"}} />
          </div>
        </div>
      </div>
      <div>
        <div className='row '>
       <Icon onChangeType={handleChangeGlass}/>
        </div>
      </div>
    </div>
  )
}