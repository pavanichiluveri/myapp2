import React from 'react'
import video from '../Videos/franchise_playback.mp4'
import FranchFeatures from '../Features/FranchFeatures'
import image1 from '../images/apply-grid.png'
const Franchise = () => {
let style = {
  'background':' #ff5672',
  'color': '#ffffff',
  'fontSize': '19px',
  'padding': '10px 25px',
  'borderRadius': '25px',
  'border': 'none'
}
  let data = [
    {
      image:'https://www.knight-bite.com/res/franchise/1.svg',
      text:'LOW INVESTMENT',
      paragraph:'No need of prime roadside location, interior decor. A office desk and any well hygenic kitchen space is enough.'
    },
    {
      image:'https://www.knight-bite.com/res/franchise/2.svg',
      text:'LOW MAINTAINANCE',
      paragraph:'The hygiene, rent, staff and storage is the only maintenance the franchise would have to focus on.'
    },
    {
      image:'https://www.knight-bite.com/res/franchise/3.svg',
      text:'BASIC SKILLSET',
      paragraph:'Anyone with basic training can step into the shoes of the staff. No serious training is required. Materials are sent.'
    },
    {
      image:'https://www.knight-bite.com/res/franchise/4.svg',
      text:'IN-HOUSE POS',
      paragraph:'Anyone with basic training can step into the shoes of the staff. No serious training is required. Materials are sent.'
    },
    {
      image:'https://www.knight-bite.com/res/franchise/5.svg',
      text:'GOOD PROFIT MARGIN',
      paragraph:'Establishment running cost is much lesser than traditional restaurant. You are in for a good profit margin.'
    },
    {
      image:'https://www.knight-bite.com/res/franchise/pandemic_ic.svg',
      text:'PANDEMIC FRIENDLY',
      paragraph:'Knight Bite is the most successful business to run hassle-free even during the Pandemic. The faith in Knight Bite has taken a hit due to its high efficiency and extraordinary sustainability'
    },

  ]


  return (
    <div style={{ }}>
      <video src={video}  autoPlay muted loop style={{width:'100%'}} >
     </video>

     <div style={{position:'absolute',width:'100%', height:'124%', background:'rgba(0,0,0,0.2)', top:'0',color:'white',textAlign:'center', paddingTop:'300px'}}>
      <h1 style={{fontSize:'3.5rem'}}>Franchise with knight bite</h1>
      <h2>Get Started with the modern way of doing business</h2>
     </div>

     <div style={{background:'#f5f5f5', padding:'10px 30px'}}>
      <div style={{width:'90%',height:'300px',display:'flex',flexDirection:'column',textAlign:'center', alignItems:'center',justifyContent:'center',gap:'10px'}}>

         <h1>Mission and Vision</h1>
         <p style={{paddingTop:'30px', fontSize:'20px', width:'40%'}}>Our Mission is to deliver the best food with the ultimate customer service.</p>
         <p style={{paddingTop:'30px', fontSize:'20px', width:'40%'}}>Our Vision is to be the most favourite food chain brand in the country and world.</p>
      </div>
      <hr style={{border:'2px solid #c77bf4'}}/>

        <h1 style={{textAlign:'center', margin:'20px 0px'}}>Key Benefits Of Knight Bite Franchise</h1>
      <div style={{ display:'flex', flexWrap:'wrap', justifyContent:'center',gap:'25px' }} >
          {data.map((ele)=>{
            return <FranchFeatures data= {ele} />
          })}
      </div>

          <hr style={{border:'2px solid #c77bf4'}}/>

        <div style={{textAlign:'center', margin:'30px 0px'}}>
          <h1>Apply Here</h1>
          <p>Request for initial meeting</p>
            <img src={image1} width='60%' alt="" /> <br />
          <button style={style}>Apply Now</button>

        </div>

          <hr style={{border:'2px solid #c77bf4'}}/>

     </div>
    </div>
        )
}

        export default Franchise
