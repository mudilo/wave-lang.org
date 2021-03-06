import React from 'react'
import { Header } from './header'

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
