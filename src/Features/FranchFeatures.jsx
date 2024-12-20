import React from 'react'

const FranchFeatures = ({data}) => {
  return (
    <div style={{width:'270px',  textAlign:'center', padding:'20px'}}>
      <img src={data.image} alt="" />
      <h4 style={{ marginTop:'10px'}}>{data.text}</h4>
      <p style={{ marginTop:'10px',fontSize:'13px'}}>{data.paragraph}</p>
 <h2>pavani</h2>
    </div>
  )
}

export default FranchFeatures
