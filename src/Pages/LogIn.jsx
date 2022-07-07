import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { login } from '../Redux/apiCalls';
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
height: 25%;
display: flex;
flex-direction: column;
padding: 20px;

background: rgba(255, 255, 255, 0.66);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(13.6px);
-webkit-backdrop-filter: blur(13.6px);

${mobile({
  width: "80%"

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
const Error = styled.span`
color:red;
`

const Button = styled.button`
width: 100px;
padding: 10px;
margin-bottom: 20px;
`


const LogIn = () => {

  const [username, setUsername] = useState('');
  const [password , setPassword] = useState('');
  const dispatch = useDispatch();
  const {isFetching , error} = useSelector(state =>state.user);

  const handleClick = (e)=> {
    e.preventDefault();
    login(dispatch, {username,password});
  }

  return (
    <Container>
          <Wrapper>
            <Title>SIGN IN</Title>
            <Form> 
                <Input placeholder='Username' onChange={(e) => setUsername(e.target.value)} />
                <Input placeholder='Password' type='password' onChange={(e) => setPassword(e.target.value)} />
                {error && <Error>Something went wrong...</Error>}
                <Button onClick={handleClick} disabled = {isFetching} >Sign in</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default LogIn