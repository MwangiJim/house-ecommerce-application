import React from 'react'
import styled from 'styled-components'
import numeral from 'numeral'
import { useDispatch, useSelector } from 'react-redux'

function Furitures(props) {
    // let{furnitures} = useSelector((state)=>state.realestateReducer)
    //console.log(furnitures)
    let dispatch = useDispatch()
    function AddToCart(){
       dispatch({
           type:'ADDTOCART',
           payload:{
               id:props.id,
               image:props.image,
               price:props.price,
               description:props.description,
           }
       })
    }
  return (
    <Container>
       <img src={props.image}/>
       <h2>${numeral(props.price).format('0,0')}</h2>
       <h3>{props.description}</h3>
       <button onClick={AddToCart}>ADD TO CART</button>
    </Container>
  )
}

export default Furitures

let Container = styled.div`
 width:80%;
 margin: 0 10px;
 box-shadow:0 0 3px 3px #333;
 img{
     width:100%;
     object-fit:contain;
 }
 text-align:left;
 button{
     left:20%;
     position:relative;
     margin:15px 0;
     padding:11px 37px;
     outline:none;
     border:none;
     box-shadow:0 0 2px 2px;
     cursor:pointer;
     color:#fff;
     background-color:#333;
     border-radius:5px;
 }
`