import React from 'react'

const AddProduct = () => {
  return (
    

<div className='addFirmSection'>
    <div className='firmSectionContainer'>
      <h1>Add Product</h1>
      <form className='authForm'>
      <label >Product Name</label><br/>
        <input type='text' placeholder='Enter product Name'/><br/>
      
        <label >Price</label><br/>
        <input type='text' placeholder='Enter price'/><br/>
        <label >Category</label><br/>
        <input type='checkbox' /><br/>
        <label >Best Sellar</label><br/>
        <input type='checkbox' /><br/>
        <label >Descripition</label><br/>
        <input type='text' /><br/>
        <label >Firm Image</label><br/>
        <input type='file' /><br/>
       
        <div className='subButton'>
        <button className='btnSubmit'>Submit</button>
        </div>
      </form>
      </div>
    </div>
    
  )
}

export default AddProduct