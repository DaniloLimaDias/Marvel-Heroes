import React, {useEffect, useState} from 'react'
import {api} from '../../api/api'

export default function Card() {
  
   const Herais =  useEffect(()=>{
    api.get('')
    .then((response)=>{
     const herois= response.data
     console.log(herois)
    })
  },[]);
  
  return (
    <div>
      
    </div>
  )
}
