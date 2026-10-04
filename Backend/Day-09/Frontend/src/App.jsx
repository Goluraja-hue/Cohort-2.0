import React, { useState } from 'react'
import axios from 'axios'

const App = () => {

  const [info, setinfo] = useState([
    {
    "Name":"Golu",
    "Course":"MCA",
    "College":"IGNOU University",
    "Pincode":"803118",
    "City":"Bihar"
  },
  {
    "Name":"Sunil",
    "Course":"MCA",
    "College":"IGNOU University",
    "Pincode":"803118",
    "City":"Bihar"
},
{
    "Name":"Subhash",
    "Course":"MCA",
    "College":"IGNOU University",
    "Pincode":"803118",
    "City":"Bihar"
},
{
    "Name":"Rani",
    "Course":"MCA",
    "College":"IGNOU University",
    "Pincode":"803118",
    "City":"Bihar"
},
{
    "Name":"Rahul",
    "Course":"MCA",
    "College":"IGNOU University",
    "Pincode":"803118",
    "City":"Bihar"
},
])

axios.get('http://localhost:3000/api/info').then((res)=>{
  setinfo(res.data.info)
})

  return (
    <>
    <div className="infos">
    {
      info.map((info)=>{
        return <div className="info">
        <h2>{info.Name}</h2>
        <h3>{info.College}</h3>
        <h3>{info.Course}</h3>
        <h3>{info.City}</h3>
        <h4>{info.Pincode}</h4>
      </div>
      })
    }

      
    </div>

    </>
  )
}

export default App