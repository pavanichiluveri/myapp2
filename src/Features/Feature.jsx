import React from 'react'
import styled from 'styled-components'
let Card = styled.div`
    // border:2px solid;
    width:200px;
    height:300px;
`
const Feature = (props) => {
    // console.log(props.feature)
    let {image, text} = props.feature
  return (
    <Card>
      <img src={image} style={{width:'100%', marginBottom:'20px'}} alt="" />
      <p style={{textAlign:'center', fontSize:'20px', fontWeight:'100', color:'#424242'}}>{text}</p>
    </Card>
  )
}

export default Feature
