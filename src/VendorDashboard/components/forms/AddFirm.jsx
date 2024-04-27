import React from 'react'

const AddFirm = () => {
  return (
  
    <div className='addFirmSection'>
    <div className='firmSectionContainer'>
      <h1>Add Firm</h1>
      <form className='authForm'>
      <label >Firm Name</label><br/>
        <input type='text' placeholder='Enter firm Name'/><br/>
      
        <label >Area</label><br/>
        <input type='text' placeholder='Enter area'/><br/>
        
        <label >Offer</label><br/>
        <input type='text' /><br/>
        
        <div className='rigianContainer'>
        <label >Region</label>
        <div className='check-inp'>
        <div className='checkboxContainer'>
         <label>South Indian</label>
         <input type='checkbox' value="Veg"/>
        </div>
        <div className='checkboxContainer'>
         <label>North Indian</label>
         <input type='checkbox' value="Non-Veg"/>
        </div>
        <div className='checkboxContainer'>
         <label>Chines</label>
         <input type='checkbox' value="Non-Veg"/>
        </div>
        
        </div>
        </div>
        

        <div className='categaryContainer'>
        <label >Category</label>
        <div className='check-inp'>
        <div className='checkboxContainer'>
         <label>Veg</label>
         <input type='checkbox' value="Veg"/>
        </div>
        <div className='checkboxContainer'>
         <label>Non-Veg</label>
         <input type='checkbox' value="Non-Veg"/>
        </div>
        </div>
        </div>
        
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

export default AddFirm
