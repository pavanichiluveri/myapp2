import React from 'react'
import styled from 'styled-components'

let Button = styled.button`
    background: #ff5672;
    color: #ffffff;
    font-size: 19px;
    padding: 10px 10px;
    border-radius: 9px;
    border: none;
`

const Banner = (props) => {
  console.log(props)
  console.log("hell")
  let Ban = styled.div`
    height: 100vh;
    // border: 2px solid red;
    background: url(${props.image});
    background-position: top;
    background-size: cover;
    // display:flex;
    flex-direction: column;
    text-align:center;
    padding-top: 16%;
}
`
  return (
    <Ban>
      
      <h1 style={{color:'white', fontSize:'90px', marginBottom: '30px'}}>Delicious, one click Away</h1>
      <Button>Order On Web</Button>
      <h3 style={{color:'white', margin:'10px'}}>Or</h3>
      
      <img src="https://knight-bite.com/res/index/ios-store.svg"  alt="" />
      <img src="https://knight-bite.com/res/index/google-play-badge.svg" alt="" />
    </Ban>
  )
}

export default Banner
