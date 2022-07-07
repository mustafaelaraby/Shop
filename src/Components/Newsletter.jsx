import { Send } from "@material-ui/icons"
import styled from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`
height: 40vh;
width: 100vw;
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: orange;
${mobile({
  height: "30vh", 
})}

`

const Title = styled.h1`
font-size: 50px;
font-weight: 600;
padding-bottom: 30px;

${mobile({
  fontSize: "30px",
  fontWeight:"400",
  paddingBottom:"15px"
})}
`

const Desc = styled.p`
font-size: 24px;
font-weight: 400;
letter-spacing: 3px;
padding: 10px;

${mobile({
  fontSize: "16px",
  fontWeight:"400",
  textAlign: "center",
})}
`

const InputContainer = styled.div`
margin-top: 20px;
height: 50px;
width: 50%;
display: flex;

${mobile({
  width:"90%",
})}

`

const Input = styled.input`
flex:9;
padding: 10px;
border: none;
font-size: 16px;
&:focus{
    outline: lightgrey;
}
`

const Button = styled.button`
flex:1;
padding: 10px;
height: 100%;
border: none;
background-color: teal;
color: white;
cursor: pointer;
`

const Newsletter = () => {
  return (
    <Container>
        <Title>NEWSLETTER</Title>
        <Desc>GET TIMELY UPDATED WITH YOUR FAVOURITE PRODUCTS</Desc>
        <InputContainer>
            <Input placeholder="Your Email"/>
            <Button>
                <Send/>
            </Button>        
        </InputContainer>
    </Container>
  )
}

export default Newsletter