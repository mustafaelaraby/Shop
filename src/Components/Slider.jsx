import { ArrowLeftRounded, ArrowRightRounded } from '@material-ui/icons'
import { useState } from 'react'
import styled from 'styled-components'
import { slides } from '../data'
import { mobile } from '../responsive'

const Container = styled.div`
height: 88vh;
display: flex;
position: relative;

${mobile({
    display: "none",
})}
`

const Arrow = styled.div`
width: 50px;
height: 50px;
background-color: antiquewhite;
opacity: 0.4;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top: 0;
bottom: 0;
left:${props => props.direction === "left" && "10px"};
right:${props => props.direction === "right" && "10px"};
margin: auto;
cursor: pointer;
z-index: 3;
`

const Wrapper = styled.div`
height: 100%;
display: flex;
transition: all 1.5s ease;
transform: translateX(${props => props.slideIndex * -100}vw);
`
const Slide = styled.div`
width: 100vw;
height: 100%;
display: flex;
background-color: ${props => props.bg};
`

const ImageContainer = styled.div`
flex: 1;
`

const Image = styled.img`
height: 100%;
width: 100%;
object-fit: cover;
`

const InfoContainer = styled.div`
flex:1;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding: 20px;
`

const Title =styled.h2`
font-size: 50px;
font-weight: 500;
padding: 30px;
`

const Desc = styled.p`
width: 100%;
font-size: 24px;
font-weight: 300;
padding: 20px;
width: 80%;
`

const Button = styled.button`
width: 120px;
height: 40px;
padding: 10px;
font-size: 36;
font-weight: 300;
background-color: teal;
border: none;
color: white;
margin: 20px 0px;
cursor: pointer;
`


const Slider = () => {

  const [slideIndex , setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if(direction === "left"){
      setSlideIndex(slideIndex > 0 ? slideIndex -1 : 2);
    }else{
      setSlideIndex(slideIndex < 2 ? slideIndex +1 : 0);
    }
  }

  return (
    <Container>
        <Arrow direction ="left" onClick={() => handleClick("left")}>
            <ArrowLeftRounded/>
        </Arrow>

        <Wrapper slideIndex = {slideIndex}>
          {slides.map((item) => (
             <Slide  key={item.id}  bg = {item.bg}>
             <ImageContainer>
               <Image src={item.img}/>
             </ImageContainer>
   
             <InfoContainer>
               <Title>{item.title}</Title>
               <Desc>{item.desc}</Desc>
   
               <Button>SHOP NOW</Button>
             </InfoContainer>
             </Slide>
          ))}
        </Wrapper>

        <Arrow direction ="right" onClick={() => handleClick("right")}>
            <ArrowRightRounded/>
        </Arrow>
    </Container>
  )
}

export default Slider