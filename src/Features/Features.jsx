import React from 'react'
import Feature from './Feature'


const Features = () => {

    let style = {
        // border: '2px solid red',
        display:'flex',
        justifyContent:'center',
        gap:'30px',
        marginTop:'50px'
    }
    let features = [
        {
            image:'https://www.knight-bite.com/res/index/feature-1.svg',
            text: 'Late Night Delivery Till 4 am'
        },{
            image:'https://www.knight-bite.com/res/index/feature-2.svg',
            text: 'Order on App Or Call 080-4710607'
        },{
            image:'https://www.knight-bite.com/res/index/feature-3.svg',
            text: 'Delivery within 40 mins'
        },{
            image:'https://www.knight-bite.com/res/index/feature-4.svg',
            text: 'Food for every kind of hunger'
        },{
            image:'https://www.knight-bite.com/res/index/feature-5.svg',
            text: 'Place Bulk orders through App'
        },
    ]
  return (
    <section style={{backgroundColor:'#f5f5f5',padding:'40px 0px'}}>
    
    <h1 style={{marginTop:'0px',textAlign:'center'}}>Features</h1>
    <div style={style}>
      {features.map((element)=>{
          return <Feature feature={element}/>;
        })}
    </div>
    </section>
  )
}

export default Features
