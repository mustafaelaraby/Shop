import { Badge } from '@material-ui/core'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { mobile } from '../responsive'
import { useSelector } from 'react-redux'

const Container = styled.div`
display:flex;
background-color: teal;
height: 60px;
width: 100vw;
`

const Left = styled.div`
flex :1 ;
padding: 5px 10px;
`
const LeftContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
`

const LanguageContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin: 0px 10px;
padding: 10px;
border-radius: 5px;
border: 1px solid white;
width: 15px;
height: 15px;
cursor: pointer;
:hover{
    border: 2px solid black;
}

${mobile({
    display: "none",
})}

`

const Language = styled.span`
font-size: 16px;
font-weight: 800;
color: white;
:hover{
    color: black;
}
`


const SearchContainer = styled.div`
display: flex;
flex: auto;
margin: 0px 10px;
border: 1px solid white;
background-color: white;
:hover{
    outline: 2px solid blue;
}
${mobile({
margin: "0px",
})}

`

const Input = styled.input`
flex: 8;
padding: 10px;
border: none;
:focus{
    outline:none;
}

`

const SearchIcon = styled.div`
flex:1;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
`

const Center = styled.div`
flex:1;
display: flex;
align-items: center;
justify-content: center;
${mobile({
    display: "none",
})}

`

const Logo = styled.h1`
    font-size: 36px;
    font-weight: 600;
    color: white;
    cursor: pointer;
`

const Right = styled.div`
flex:1;
`

const RightContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
`

const ItemContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin: 0px 20px;
cursor: pointer;

${mobile({
    margin: "0px 5px",
})}
`

const ItemText = styled.span`
font-size: 16px;
color: white;
${mobile({
    fontSize: "10px",
})}
`

const CartContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin:0px 20px;
cursor: pointer;
color: white;
`






const Navbar = () => {

    const quanity = useSelector(state => state.cart.quanity);

  return (
    <Container>
        <Left>
            <LeftContainer>
                <LanguageContainer>
                    <Language>EN</Language>
                </LanguageContainer>

            <SearchContainer>
                <Input placeholder='Search'/>
                <SearchIcon>
                    <Search/>
                </SearchIcon>
            </SearchContainer> 
            </LeftContainer>
        </Left>

        <Center>
            <Link style={{textDecoration:"none"}} to={"/"}>
                <Logo>LAMA.</Logo>
            </Link>
        </Center>

        <Right>
            <RightContainer>
                <ItemContainer>
                    <Link style={{textDecoration:"none"}} to={"/register"} >
                        <ItemText>REGISTER</ItemText>
                    </Link>
                </ItemContainer>

                <ItemContainer>
                    <Link style={{textDecoration:"none"}} to={"/login"}>
                        <ItemText>SIGN IN</ItemText>
                    </Link>
                </ItemContainer>

                <Link style={{textDecoration:"none"}} to={"/cart"}>
                <CartContainer>
                    <Badge badgeContent={quanity} color="primary">
                        <ShoppingCartOutlined/>
                    </Badge>
                </CartContainer>
                </Link>

            </RightContainer>
        </Right>

    </Container>
  )
}

export default Navbar