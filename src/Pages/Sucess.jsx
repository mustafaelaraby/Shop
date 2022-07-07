import React from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components';

const Container = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
`

const Success = styled.h1`
width: 400px;
height: 50px;
`

const Sucess = () => {
    const location = useLocation();
    console.log(location);
  return (
    <Container>
        <Success>Sucessfull payment..</Success>
    </Container>
  )
}

export default Sucess