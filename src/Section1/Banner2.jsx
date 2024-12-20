import React from 'react'
import styled from 'styled-components'
let Div = styled.div`
    height:130vh;
    // border:2px solid red;
    // text-align:center;
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    color:white;
    font-size:60px;
    text-align:center
`

const Banner2 = () => {
    let style = {
        padding:'100px'
    }
  return (
    <>
      <Div style={{background:'url("https://knight-bite.com/res/index/banner-1.webp")'}}>
            <h1 style={style}>Enjoy food, enjoy life</h1>
      </Div>
      <Div style={{background:'url("https://knight-bite.com/res/index/banner-2.webp")'}}>
            <h1 style={style}>Burger, fries, shakes and many more</h1>
            <button style={{border:'2px solid white', backgroundColor:'rgba(0,0,0,0.1)', color:'white', fontSize:'20px',borderRadius:'40px', padding:'10px 30px'}}>see full meny</button>
      </Div>
    </>
  )
}

export default Banner2
