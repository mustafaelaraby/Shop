import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons"
import { Link } from "react-router-dom"
import styled from "styled-components"


const Info =styled.div`
opacity: 0;
height: 100%;
width: 100%;
display: flex;
position: absolute;
top: 0;
left: 0;
align-items: center;
justify-content: center;
background-color:rgba(255,255,255,0.5);
`

const Container = styled.div`
display: flex;
margin: 5px;
width: 320px;
height: 430px;
background-color: blue;
position: relative;
&:hover ${Info} {
    opacity: 1;
    cursor: pointer;
}

`

const Image = styled.img`
height: 100%;
width: 100%;
`

const Icon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
margin: 10px;
background-color: white;
transition: all 1.5s ease;
&:hover{
transform: scale(1.2);  
}
`


const Product = ({item}) => {

  return (
    <Container> 
         <Image src={item.img}/>
        <Info>
            <Icon>
                <ShoppingCartOutlined/>
            </Icon>

            <Icon>
                <Link to={`/product/${item._id}`}>
                    <SearchOutlined/>
                </Link>
            </Icon>

            <Icon>
                <FavoriteBorderOutlined/>
            </Icon>
        </Info>
        
    </Container>
  )
}

export default Product