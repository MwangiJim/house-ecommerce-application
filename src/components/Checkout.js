import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faShower, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import numeral from 'numeral'
import { PayPalButton } from 'react-paypal-button-v2'

function Checkout() {
    let{realestate} = useSelector((state)=>state.realestateReducer)
    let{furnitures} = useSelector((state)=>state.realestateReducer)
    let dispatch = useDispatch()

    const RemoveFromCart=()=>{
       dispatch({
           type:'REMOVEFROMCART',
           payload:furnitures.id
       })
    }
  return (
    <Container>
       <MainImage>
           <img src={realestate.image}/>
           <br/>
           <Info>
             <FontAwesomeIcon icon={faThumbsUp} className="icon"/>
             <h2>AED$ {numeral(realestate.price).format("0.a")}/monthly</h2>
           </Info>
           <Details>
             <small>{realestate.beds}</small>
             <FontAwesomeIcon icon={faBed} className="bed"/>
             <p>|</p>
             <small>{realestate.shower}</small>
             <FontAwesomeIcon icon={faShower} className="shower"/>
             <p>|</p>
             <h4>{realestate.size}</h4>
         </Details>
         {furnitures.map((cart)=>{
             return(
               <Cart>
                  <img src={cart.image}/>
                  <Other>
                    <h4>{cart.description}</h4>
                    <p>$<i>{cart.price}</i></p>
                    <button onClick={RemoveFromCart}>Remove From Cart</button>
                  </Other>
               </Cart>
             )
         })}
       </MainImage>
       <CheckoutDetails>
           <h2>Checkout Page</h2>
           <h4>{furnitures.length}{furnitures.length ===1?'Item':'Items'}</h4>
            <CheckoutBox>
               <h2>Payment Section</h2>
               <h4>Selected Items:{furnitures.length}{furnitures.length ===1?'Item':'Items'}</h4>
               <h5>Discount Price:10%</h5>
               <h3>Total Price:${numeral(realestate.price).format('0,0')}</h3>
               <PayPalButton
                 options={{
                     clientId:'PRODUCTION_CLIENT_ID',
                     currency:'KE',
                 }}
                 amount={realestate.price}
                 onSuccess ={(details,data) => {
                     alert('Transaction was completed by'+ details.payer.name.given_name);

                      return fetch("/paypal-transaction-complete",{
                          method:"post",
                          body:JSON.stringify({
                              orderID:data.orderID,
                          }),
                      });
                 }}
               />
            </CheckoutBox>
       </CheckoutDetails>
    </Container>
  )
}

export default Checkout

let Container = styled.div`
 margin:10% 5%;
 display:flex;
 justify-content:space-between;
 padding:40px;
 box-shadow:4px 4px 12px #000;
 border-radius:7px;
 background-color:#fff;
`
let MainImage = styled.div`
margin:5% 0;
flex-basis:50%;
 img{
     width:100%;
     object-fit:contain;
 }
 button{
     background-color:#000;
     outline:none;
     border:none;
     color:#fff;
     padding:12px 38px;
     border-radius:5px;
     cursor:pointer;
 }
 h2{
     text-align:center;

 }
`
let CheckoutDetails = styled.div`
 flex-basis:45%;
`
let Details = styled.div`
 display:flex;
 align-items:center;
 justify-content:left;
 margin: 6px 0;
 margin-left:10px;
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
display:flex;
justify-content:left;
align-items:center;
margin-left:10px;
h2{
    margin: 0 10px;
    font-size:24px;
}
.icon{
    color:green;
    font-size:19px;
}
`
let CheckoutBox = styled.div`
 background-color:#f4f4f4;
 width:100%;
 height:max-content;
 padding:20px 12px;
 border-radius:10px;
 color:#000;
 h2{
     text-align:center;
 }
 h4{
     font-size:34px;
     font-weight:400;
 }
 h5{
     font-size:30px;
     font-weight:300;
     margin:15px 0;
 }
 h3{
     font-size:27px;
     font-weight:700;
 }
`
let Cart = styled.div`
 display:flex;
 background-color:#f4f4f4;
 padding:20px 12px;
 border-radius:5px;
 margin:5px 0;
 width:100%;
 color:#000;
 img{
     width:40%;
 }
`
let Other = styled.div`
 margin-left:10px; 
text-align:left;
`