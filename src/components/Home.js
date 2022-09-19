import React from 'react'
import styled from 'styled-components'
import Houses from './Houses'
import Slider from './Slider'

function Home() {
  return (
    <Container>
       <Slider/>
       <h1>OUR HOME PRODUCTS</h1>
       <Row>
           <Houses
            state={true}
            id={1}
             image ="/Images/bg1.jpg"
             price = {120000}
             number = {3}
             shower = {5}
             size = "2456 sqft"
           />
           <Houses
           state={true}
           id={2}
             image = "/Images/bg3.jpg"
             price = {89000}
             number = {2}
             shower = {2}
             size = "178.7sqft"
           />
           <Houses
           state={false}
           id={3}
             image = "/Images/bg4.jpg"
             price = {50000}
             number = {4}
             shower = {4}
             size = "160.56sqft"
           />
       </Row>
       <Row>
           <Houses
           state={true}
           id={4}
            image = "/Images/bg5.jpg"
            price = {100000}
            number = {2}
            shower = {1}
            size = "100.3sqft"
           />
           <Houses
           state={true}
           id={5}
            image = "/Images/bg7.jpg"
            price = {80000}
            number = {5}
            shower = {3}
            size = "99.70sqft"
           />
           <Houses
           state={false}
           id={6}
             image = "/Images/bg8.jpg"
             price = {150000}
             number = {6}
             shower = {2}
             size = "1002.4sqft"
           />
             <Houses
             state={true}
             id={7}
             image = "/Images/bg16.jpg"
             price = {350000}
             number = {7}
             shower = {3}
             size = "102.4sqft"
           />
       </Row>
       <Row>
       <Houses
       state={false}
       id={8}
            image = "/Images/bg9.jpg"
            price = {200000}
            number = {8}
            shower = {4}
            size = "300.2sqft"
           />
           <Houses
           state={true}
           id={9}
            image = "/Images/bg13.jpg"
            price = {140000}
            number = {3}
            shower = {1}
            size = "130.34sqft"
           />
            <Houses
            state={false}
            id={10}
            image = "/Images/bg14.jpg"
            price = {98000}
            number = {2}
            shower = {3}
            size= "100.4sqft"
           /> 
       </Row>
       <Row>
           <Houses
           state={false}
           id={11}
           image = "/Images/bg19.jpg"
            price = {80000}
            number = {3}
            shower = {1}
            size = "120.10sqft"
           />
           <Houses
           state={true}
           id={12}
            image = "/Images/bg25.jpg"
            price = {80000}
            number = {4}
            shower = {3}
            size = "1000sqft"
           />
           <Houses
           state={false}
           id={13}
            image = "/Images/bg27.jpg"
            price = {100000}
            number = {6}
            shower = {2}
            size = "900sqft"
           />
       </Row>
    </Container>
  )
}

export default Home
let Container = styled.div`
 height:100vh;
 h1{
     ::after{
         content:'';
         width:200px;
         height:5px;
         background-color:#000;
         border-radius:5px;
         display:block;
         margin:auto;
         margin:10px 0;
     }
     margin: 10px 5%;
 }
`
let Row = styled.div`
 display:flex;
 width:100%;
 margin:20px 0;
 justify-content:spac}e-between;
 align-items:center;
`