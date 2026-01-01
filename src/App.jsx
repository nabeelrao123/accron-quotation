import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Layout from './Layout'
import Container from './components/Container'
import { menuItems } from './data'
import Invoice from './components/Invoice'
import Invoiceform from './components/Invoiceform'

function App() {
  return (
    <div>
      {/* <Navbar menuItems={menuItems} /> */}
      <div className="bg-accent" >
        {/* <Container> */}
          {/* <Invoice /> */}
          <Invoiceform/>
        {/* </Container> */}
      </div>


    </div>
  )
}

export default App
