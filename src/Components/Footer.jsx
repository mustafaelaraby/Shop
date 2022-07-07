import { Facebook, GitHub, Instagram, MailOutlined, Phone, Pinterest, Room, WhatsApp } from '@material-ui/icons';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
height: 50vh;
width: 100vw;
display: flex;
justify-content: space-between;
background-color: darkblue;

${mobile({
    flexDirection:"column",
    height: "100vh"
})}
`

const Left = styled.div`
flex: 1;
padding: 10px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const Logo = styled.h1`
padding-bottom: 20px;
color: beige;
`

const Desc = styled.p`
padding: 10px;
color: beige;

`

const SocialContainer = styled.div`
display: flex;
`

const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius:50%;
margin:10px 10px;
display: flex;
align-items: center;
justify-content: center;
color: white;
font-size: 24px;
background-color: ${props => props.color};
transition: all 1.5s ease;
&:hover{
transform: scale(1.2);  
cursor: pointer;
}
`


const Center = styled.div`
flex: 1;
padding: 10px;
`

const Title = styled.h2`
padding: 20px;
color: beige;
`

const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`

const ListItem = styled.li`
width: 50%;
margin-bottom: 20px;
cursor: pointer;
color: beige;
&:hover{
    text-decoration: underline;
}
`

const Right = styled.div`
flex: 1;
padding: 10px;
`
const ContactItem = styled.div`
display: flex;
align-items: center;
padding: 20px;
color: beige;
cursor: pointer;
&:hover{
    text-decoration: underline;
}
`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>LAMA.</Logo>
            <Desc>
                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups,Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
            </Desc>
            <SocialContainer>
                <SocialIcon color=' #3b5998'>
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color='#cd486b'>
                    <Instagram />
                </SocialIcon>
                <SocialIcon color=' #cb2027	'>
                    <Pinterest/>
                </SocialIcon>
                <SocialIcon color=' #34bf49	'>
                    <WhatsApp/>
                </SocialIcon>
                <SocialIcon color='#6e5494'>
                    <GitHub/>
                </SocialIcon>
            </SocialContainer>
        </Left>

        <Center>
            <Title>USEFUL LINKS</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man</ListItem>
                <ListItem>Woman</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>Acount</ListItem>
                <ListItem>Orders</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Best</ListItem>
                <ListItem>Terms</ListItem>

            </List>
        </Center>

        <Right>
            <Title>Contact</Title>
            <ContactItem><Room style={{marginRight:"10px"}} /> 633 Dixi Path, South Turbinchester , 98336</ContactItem>
            <ContactItem><Phone style={{marginRight:"10px"}}/> +1 234 56 78</ContactItem>
            <ContactItem><MailOutlined style={{marginRight:"10px"}}/> lama@div.com</ContactItem>
        </Right>

    </Container>
  )
}

export default Footer