import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faShower, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import numeral from 'numeral'
import { useDispatch, useSelector } from 'react-redux'
import { Link  } from 'react-router-dom'

function Houses(props) {
    let{realestate} = useSelector((state)=>state.realestateReducer)
   // console.log(realestate)
    let dispatch = useDispatch()
    const AddProduct =()=>{
       dispatch({
           type:"ADDSELECTEDHOUSE",
           payload:{
               state:props.state,
               id:props.id,
               image:props.image,
               price:props.price,
               beds:props.number,
               shower:props.shower,
               size:props.size
           }
       })
    }
  return (
    <Container onClick={AddProduct}>
         <Link to={`/productview`}>
        <img src={props.image}/>
         <Info>
             <FontAwesomeIcon icon={faThumbsUp} className="icon"/>
             <h2>AED$ {numeral(props.price).format("0.a")}/monthly</h2>
         </Info>
         <Details>
             <small>{props.number}</small>
             <FontAwesomeIcon icon={faBed} className="bed"/>
             <p>|</p>
             <small>{props.shower}</small>
             <FontAwesomeIcon icon={faShower} className="shower"/>
             <p>|</p>
             <h4>{props.size}</h4>
         </Details>
         <h3>SkyScrapper</h3>
         </Link>
    </Container>
  )
}

export default Houses
let Container = styled.div`
  width:100%;
  box-shadow:0 0 2px 2px #333;
  border-radius:5px;
  cursor:pointer;
  margin: 10px 10px;
  text-align:left;
  img{
      width:100%;
      height:400px;
      object-fit:cover;
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