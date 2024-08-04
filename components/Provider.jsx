"use client"

import { SessionProvider } from "next-auth/react"

const Provider = ({session, Children}) => {
  
  return (
    <SessionProvider session={session}>
      {Children}
    </SessionProvider>
  )
}

export default Provider