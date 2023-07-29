import React from 'react'
import { useOutletContext } from 'react-router-dom'

export default function HostVanInfo() {
    const {van} = useOutletContext()
  return (
    <div>
        <h4>Name: {van.name}</h4>
        <h4>Category: {van.type}</h4>
        <h4>Description: {van.description}</h4>
        <h4>Visibility: public</h4>
    </div>
  )
}
