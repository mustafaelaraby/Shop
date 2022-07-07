import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
background: rgba(0, 128, 0, 0.3)
`

const Wrapper = styled.div`
width: 25%;
height: 45%;
display: flex;
flex-direction: column;
padding: 20px;

background: rgba(255, 255, 255, 0.66);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(13.6px);
-webkit-backdrop-filter: blur(13.6px);

${mobile({
  width: "80%",
  height: "37%"

})}
`

const Title = styled.h3`
padding-bottom: 15px;
margin-top: 20px;
text-align: center;
`

const Form = styled.form`
display: flex;
flex-direction: column;
display: flex;
align-items: center;
justify-content: center;
border-radius: 10px;
`

const Input = styled.input`
margin-bottom: 5px;
padding: 4px;
width: 90%;
border:none;
border-radius: 4px;
outline: none;
`

const Agreement = styled.span`
font-size: 10px;
width: 90%;
padding-bottom: 20px;
`

const Button = styled.button`
width: 100px;
padding: 10px;
margin-bottom: 20px;

${mobile({
  marginBottom: "5px"

})}
`


const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACOUNT</Title>
            <Form>
                <Input placeholder='First Name'/>
                <Input placeholder='Last Name'/>
                <Input placeholder='Username'/>
                <Input placeholder='Email'/>
                <Input placeholder='Password'/>
                <Input placeholder='Confirm Password'/>
                <Agreement>By creating an acount, I consent to the processing of my personal data in accordance with the <b>privacy policy</b>.</Agreement>
                <Button>CREATE</Button>
            </Form>
        </Wrapper>
        
    </Container>
  )
}

export default Register