import React from 'react'
import { useAuth0 } from "@auth0/auth0-react"

type Props = {
};

export function Welcome({}: Props) {
  const { loginWithRedirect } = useAuth0()
  

  return (
    <>
    <button onClick={()=>loginWithRedirect()}>
            LOGIN
          </button>

    </>
  )

}


