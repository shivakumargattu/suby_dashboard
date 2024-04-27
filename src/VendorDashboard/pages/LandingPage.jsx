import React from 'react'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import SideBar from '../components/SideBar'
import Login from '../components/forms/Login'
import Register from '../components/forms/Register'
import AddFirm from '../components/forms/AddFirm'
import AddProduct from '../components/forms/AddProduct'

const LandingPage = () => {

  const [showLogin, setShowLogin]=useState(false)
  const [showRegister,setShowRegister]=useState(false)
  const [showFirm,setShowFirm]=useState(false)
  const [showProduct,setShowProduct]=useState(false)

  const showLoginHandlar=()=>{
    setShowLogin(true)
    setShowRegister(false)
    setShowFirm(false)
    setShowProduct(false)
  }
  const showRegisternHandlar=()=>{
    setShowRegister(true)
    setShowLogin(false)
    setShowFirm(false)
    setShowProduct(false)
  }
  const showFirmHandlar=()=>{
    setShowRegister(false)
    setShowLogin(false)
    setShowFirm(true)
    setShowProduct(false)
  }
  const showProdutHandlar=()=>{
    setShowRegister(false)
    setShowLogin(false)
    setShowFirm(false)
    setShowProduct(true)
  }

  return (
    <>
        <section className='landingsection'>

<Navbar showLoginHandlar={showLoginHandlar} showRegisternHandlar={showRegisternHandlar} />
<div className='collectionSection'>
<SideBar showFirmHandlar={showFirmHandlar} showProdutHandlar={showProdutHandlar}/>
{showLogin && <Login/>}
{showRegister&& <Register/>}

{showFirm &&<AddFirm/>}
{showProduct &&<AddProduct/> }

</div>
        </section>
    </>
  )
}

export default LandingPage