import React from 'react'

const Footer = () => {
    let style = {
        padding : '13px',
        background: 'linear-gradient(90deg, #C77BF4 0%, #FF5672 100%)',
        textAlign : 'center',
        boxShadow: '0px 0px 4px 1px gray'
    }
  return (
    <div style={style}>
      <p>Ⓒ Copyright <span >2024</span>. Knight Bite Foods Pvt. Ltd. All Rights Reserved</p>
    </div>
  )
}

export default Footer
