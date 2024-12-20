import React from 'react'

const MenuFeatures = ({data}) => {
    let style = {
        height:'200px',
        width:'200px',
        textAlign:'center',
        
    }
    // console.log(data)
  return (
    <div style={style}>
        <img src={data.image} alt="" />
        <h1 style={{color:'white'}}>{data.text}</h1>
    </div>
  )
}

export default MenuFeatures
