import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Layout({colorMode ,  theme , children}) {
  return (
    <div>
      <Header colorMode={colorMode} theme={theme}/>
      {children}
      <Footer  />
    </div>
  )
}
