import React, { useState } from 'react'
import Navbar from './Navbar'

const Viewall = () => {
    const [patientData,changePatientData]=useState(
        [
            {
                "slNo":1,"name":"Mathew","tokenNo":123,"doctorsName":"Ramesh","phnNo":97452267749
            },
            {
                "slNo":2,"name":"Thomas","tokenNo":133,"doctorsName":"Sumesh","phnNo":9207948067
            },
            {
                "slNo":3,"name":"Mithun","tokenNo":1,"doctorsName":"Ratheesh","phnNo":8547717067
            },
            {
                "slNo":5,"name":"Jacob","tokenNo":12,"doctorsName":"Remya","phnNo":9805267749
            },
            {
                "slNo":6,"name":"Jaya","tokenNo":987,"doctorsName":"Pradeep","phnNo":9747700234
            },
            {
                "slNo":7,"name":"Divya","tokenNo":563,"doctorsName":"Ramesh","phnNo":98034050523
            },
            {
                "slNo":8,"name":"Manasvi","tokenNo":333,"doctorsName":"Ramesh","phnNo":8765432109
            },
            {
                "slNo":9,"name":"Maya","tokenNo":456,"doctorsName":"Ramesh","phnNo":9806525763
            },
            {
                "slNo":10,"name":"Rama","tokenNo":999,"doctorsName":"Ramesh","phnNo":1200987364
            },
            {
                "slNo":11,"name":"Abijith","tokenNo":141,"doctorsName":"Lekshmi","phnNo":1593577899
            },
            {
                "slNo":12,"name":"Malavika","tokenNo":888,"doctorsName":"Ramesh","phnNo":1478523690
            },
            {
                "slNo":13,"name":"Miya","tokenNo":223,"doctorsName":"Ramesh","phnNo":1236967749
            },
            {
                "slNo":14,"name":"Niva","tokenNo":111,"doctorsName":"Ramesh","phnNo":7899357144
            },
            {
                "slNo":15,"name":"Lekshmi","tokenNo":114,"doctorsName":"Abijith","phnNo":3698741287
            }
        ]
    )
  return (
    <div>
        <Navbar/>
      <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
             
            <table class="table">
  <thead>
    <tr>
      <th scope="col">Sl.No:</th>
      <th scope="col">Name</th>
      <th scope="col">Token No:</th>
      <th scope="col">Doctor's Name</th>
      <th scope="col">Phn No:</th>
    </tr>
  </thead>
  <tbody>
    {patientData.map(
        (value,index)=>{
            return <tr>
            <th scope="row">{value.slNo}</th>
            <td>{value.name}</td>
            <td>{value.tokenNo}</td>
            <td>{value.doctorsName}</td>
            <td>{value.phnNo}</td>
          </tr>
        }
    )}
   
  </tbody>
</table>

            </div>
        </div>
      </div>
    </div>
  )
}

export default Viewall
