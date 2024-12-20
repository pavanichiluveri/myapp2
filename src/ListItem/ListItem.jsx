import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

let Nav = styled.nav`
  // border:2px solid;
  display: flex;
  position:fixed;
  height: 100px;
  width: 100%;
  padding: 10px 90px;
  justify-content:space-between;
  align-items:center;
    background-color: rgba(1, 12, 9, 0.2);
    z-index:2;
    // opacity: 50%;
  `;
let style = {
  //  border: "2px solid",
  listStyle: 'none',
  display: 'flex',
  gap: '30px',
  fontSize: '20px',
  //  color: 'white'

}
const ListItem = () => {

  let hancleEve = () => {
   
  // console.log(header)
  // console.log(btns)
  
  }
  return (

    <Nav>
      <h2 style={{ fontSize: '18px', color: 'white' }}>KNIGHT BITE</h2>
      <ol id='ol' onClick={() => { 
         var header = document.getElementById("ol");
         var btns = header.getElementsByClassName("btn");
         for (var i = 0; i < btns.length; i++) {
          btns[i].addEventListener("click", function () {
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
          }); 
         
          }

       }} style={style}>
        <li className='btn active'><Link style={{ color: 'white', textDecorationLine: 'none' }} to="/">Home  <span></span></Link></li>
        <li className='btn'><Link style={{ color: 'white', textDecorationLine: 'none' }} to="/about">About <span></span></Link></li>
        <li className='btn'><Link style={{ color: 'white', textDecorationLine: 'none' }} to="/menu">Menu <span></span></Link></li>
        <li className='btn'><Link style={{ color: 'white', textDecorationLine: 'none' }} to="/franchise">Franchise <span></span></Link></li>

      </ol>
    </Nav>
  )
}

export default ListItem
