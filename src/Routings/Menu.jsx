import React from 'react'
import MenuFeatures from '../Features/MenuFeatures'
// import img1 from '../images/burger-icom.png'
// import img2 from '../images/starters-icom.png'
import image1 from '../images/burger-icon.png'
import image2 from '../images/starters-icon.png'
import image3 from '../images/img3.png'
import image4 from '../images/img4.png'
import image5 from '../images/img5.png'
import image6 from '../images/img6.png'
const Menu = () => {
  let style ={
    background : "url('https://knight-bite.com/res/menu/banner.webp')",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: '100vh',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    gap:'30px',
    padding:'10% 10%',
    flexWrap:'wrap',
  }

  let data = [
    {
    image : image1,
    text: 'Burger'

    },
    {
    image : image2,
    text: 'desserts'

    },
    {
    image : image3,
    text: 'starters'

    },
    {
    image : image4,
    text: 'drinks'

    },
    {
    image : image5,
    text: 'beverage'

    },
    {
    image : image6,
    text: 'burger'

    },
  ]
  
  return (
    <div style={style}>
      {
        data.map((ele)=>{
          return <MenuFeatures data={ele} />
        })
      }
    </div>
  )
}

export default Menu
