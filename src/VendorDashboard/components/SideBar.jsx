import React from 'react'

const SideBar = ({showFirmHandlar,showProdutHandlar}) => {
  return (
    <div className='sideBarSection'>
      <ul>
        <li onClick={showFirmHandlar}>Add Firm</li>
        <li onClick={showProdutHandlar}>Add Product</li>
        <li>All Products</li>
        <li>User Details</li>
      </ul>
    </div>
  )
}

export default SideBar