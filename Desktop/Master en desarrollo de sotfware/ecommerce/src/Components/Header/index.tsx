import React, { useContext } from 'react'
import "./header.css"
import { UserNameContext } from '../../Context/Users'


type Props = {}

export default function Header({}: Props) {
  const userNameOnHeader = useContext(UserNameContext);
  return (
    <div>
      <h1>Hola, {userNameOnHeader}</h1>
    </div>
  )
}