import styled from "styled-components"

const Container = styled.div`
height: 30px;
width: 100vw;
display: flex;
align-items: center;
justify-content: center;
background-color: red;
`

const Text = styled.h3`
font-size: 14px;
font-weight: 600;
color: white;
cursor: pointer;
:hover{
  text-decoration: underline;
}
`

const Announcement = () => {
  return (
    <Container>
        <Text>Super deal ! Free shipping on orders above $50</Text>
    </Container>
  )
}

export default Announcement