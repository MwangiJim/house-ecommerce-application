import React from 'react'
import styled from 'styled-components'
import { faBed, faShower, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import numeral from 'numeral'
import { useSelector } from 'react-redux'
import Furitures from './Furitures'

function ProductDetail() {
    let {realestate} = useSelector((state)=>state.realestateReducer)
    console.log(realestate)
  return (
    <Container>
        <img src={realestate.image} className="img"/>
        <EstateInfo>
             <FirstLine>
                 <FontAwesomeIcon icon={faThumbsUp}/>
                 <h2>AED ${numeral(realestate.price).format('0.a')}</h2>
             </FirstLine>
        </EstateInfo>
        <Details>
             <small>{realestate.beds}</small>
             <FontAwesomeIcon icon={faBed} className="bed"/>
             <p>|</p>
             <small>{realestate.shower}</small>
             <FontAwesomeIcon icon={faShower} className="shower"/>
             <p>|</p>
             <h4>{realestate.size}</h4>
         </Details>
         <Info>
             <h3>Exclusive|Affordable Options Available</h3>
             <p>Brought to you by Driven Properties,this 2 bedrooms Apartment is located in Divine Residence.<br/>
             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum esse consequuntur quis molestiae <br/>
             nihil, vitae cumque eum? Esse, fugiat non libero quod rem ratione earum, harum<br/> ullam error assum?
             enda quas porro dolorum animi corrupti. Ipsam dolorum ullam a itaque vel voluptatum, sint natus quo, <br/>
             animi qui magni numquam accusantium deleniti!Brought to you by Driven Properties,this 2 bedrooms Apartment is located in Divine Residence.<br/>
             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum esse consequuntur quis molestiae <br/>
             nihil, vitae cumque eum? Esse, fugiat non libero quod rem ratione earum, harum<br/> ullam error assum?
             enda quas porro dolorum animi corrupti. Ipsam dolorum ullam a itaque vel voluptatum, sint natus quo, <br/>
             animi qui magni numquam accusantium deleniti!
             </p>
         </Info>
         <Desc>
             <p>TYPE</p>
             <strong>PROPERTY</strong>
             <p>PURPOSE</p>
             <strong>{realestate.state?'FOR SALE':'FOR RENT'}</strong>
         </Desc>
         <h3>Facilities:</h3>
         <Facilities>
             <div className='boxes'>
                 <h2>Parking Spaces</h2>
             </div>
             <div className='boxes'>
                 <h2>Centrally Air Conditioned</h2>
             </div>
             <div className='boxes'>
                 <h2>Furnished Sofas</h2>
             </div>
             <div className='boxes'>
                 <h2>Decorated walls</h2>
             </div>
         </Facilities>
         <h3>Other Furnitures</h3>
         {/*Row of Furnitures*/}
         <Row>
             <Furitures
              image = '/Images/px1.jpg'
              price = {2500}
              id = {1}
              description = 'Orange Furnish Living Room With Magnificent View'
              vat = {5}
             />
             <Furitures
              image = '/Images/px2.jpg'
              price = {2000}
              description = 'Lavish Coach with Bouyant Sit'
              id ={2}
              vat = {2}
             />
             <Furitures
               image = '/Images/px3.jpg'
               price = {1500}
               description = 'White Coach with wide Sitting Area'
               id={3}
               vat = {2.5}
             />
             <Furitures
              image = '/Images/px4.jpg'
              price = {1000}
              description = 'Wall Art Inclusive,Beautiful Luxurios Coach'
              id={4}
              vat = {2}
             />
         </Row>
         <Row>
             <Furitures
              image = '/Images/px5.jpg'
              price = {2500}
              id = {1}
              description = 'Orange Furnish Living Room With Magnificent View'
              vat = {5}
             />
             <Furitures
              image = '/Images/px6.jpg'
              price = {2000}
              description = 'Lavish Coach with Bouyant Sit'
              id ={2}
              vat = {2}
             />
             <Furitures
               image = '/Images/px7.jpg'
               price = {1500}
               description = 'White Coach with wide Sitting Area'
               id={3}
               vat = {2.5}
             />
         </Row>
    </Container>
  )
}

export default ProductDetail
let Container  =styled.div`
 width:100%;
 height:80vh;
 .img{
     margin-top:10%;
     margin-left:15%;
     object-fit:contain;
     width:60%;
 }
 h3{
     font-weight:bold;
     margin-left:15%;
     margin-top:15px;
 }
`
let EstateInfo = styled.div`
margin-left:15%;
margin-top:10px;
`
let FirstLine = styled.div`
 display:flex;
 align-items:center;
 justify-content:left;
`
let Details=styled.div`
display:flex;
align-items:center;
justify-content:left;
margin-left:15%;
margin-top:10px;
.bed{
    color:lightblue;
    margin: 0 7px;
}
p{
    margin: 0 7px;
}
h4{
    font-size:18px;
    font-weight:300;
}
.shower{
    color:lightblue;
    margin: 0 6px;
}
`
let Info = styled.div`
 text-align:left;
 margin-left:15%;
 h3{
   margin:10px 0;
   font-weight:600;
 }
 p{
     font-weight:400;
     font-size:19px;
 }
`
let Desc = styled.div`
 display:flex;
 justify-content:space-between;
 align-items:center;
 width:80%;
 margin-left:15%;
 margin-top:15px;
`
let Facilities = styled.div`
 display:flex;
 justify-content:left;
 align-items:center;
 margin-left:15%;
 margin-top:15px;
 .boxes{
     background-color:lightblue;
     padding:13px 40px;
     border-radius:9px;
     color:cyan;
     h2{
         font-size:19px;
     }
     margin:0 10px;
 }
`
let Row = styled.div`
 display:flex;
 justify-content:space-between;
 align-items:center;
 margin-top: 3%;
 margin-left:2%;
 `