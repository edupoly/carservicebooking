import axios from 'axios';
import React,{useState} from 'react';

function AddServiceType() {
  const [newServiceType, setNewServiceType] = useState('')
  function addServiceType(){
    axios({
      method: 'post',
      url: 'http://localhost:4000/serviceTypes',
      data: {
        type: newServiceType
      }
    }).then(()=>{
      alert("HI")
    })
  }
  return (
    <div>
      <h1>AddServiceType</h1>
      <input type="text" onChange={(e)=>{setNewServiceType(e.target.value)}}/>
      <button onClick={addServiceType}>Add Service Type</button>
    </div>
  )
}

export default AddServiceType