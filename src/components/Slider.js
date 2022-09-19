import React from 'react'
import styled from 'styled-components'
import data from './ImageData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'

function Slider() {
    let[Index,setIndex] = React.useState(0);
    const MoveLeft =()=>{
       if(Index > 0){
           setIndex(Index-1)
       }
    }
    const MoveRight = ()=>{
       if(  Index < data.length-1){
           setIndex(Index+1)
       }
    }
  return (
     <Container>
          {data.map((sourcefiles,index)=>{
           return (
            <div className={Index === index?'active':'inactive'}>
                   <Content>
                    <img src={sourcefiles.imgpath}/>
                        <Information>
                            <h4>RENT A HOME</h4>
                            <h2>{sourcefiles.description}</h2>
                            <p> Explore from apartments,builder,floor,viles <br/>and more</p>
                        </Information>
                               <FontAwesomeIcon icon={faArrowAltCircleLeft} onClick={MoveLeft} className="leftBtn"/>
                                <FontAwesomeIcon icon={faArrowAltCircleRight} onClick={MoveRight} className="rightBtn"/>
                   </Content>
            </div>  
           )
          })}
     </Container>
  )
}

export default Slider
let Container = styled.div`
 display:flex;
 height:100vh;
 justify-content:space-between;
 align-items:center;
 margin: 5% 2%;
`
let Information = styled.div`
 text-align:left;
 h4{
     font-size:25px;
     font-weight:500;
     color:gray;
 }
 h2{
     font-size:40px;
     font-weight:600;
     margin:15px 0;
 }
 p{
     color:gray;
     font-size:17px;
 }
`
let Content = styled.div`
display:flex;
justify-content:space-between;
 align-items:center;
 img{
     width:800px;
     height:80vh;
     object-fit:cover;
     box-shadow:4px 4px 12px #000;
 }
 .leftBtn{
    top:50%;
    left:10px;
    position:absolute;
    cursor:pointer;
    font-size:25px;
 }
 .rightBtn{
    top:50%;
    right:10px;
    font-size:25px;
    cursor:pointer;
    position:absolute;
 }
`