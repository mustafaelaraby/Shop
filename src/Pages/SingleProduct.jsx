import { Add, Remove } from '@material-ui/icons';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Announcement from '../Components/Announcement';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import Newsletter from '../Components/Newsletter';
import { mobile } from '../responsive';
import {publicRequest} from "../requestMethods";
import { useDispatch } from 'react-redux';
import { addProduct } from '../Redux/cartRedux';


const Container = styled.div``

const ProductContainer = styled.div`
height: 88vh;
width: 98vw;
padding: 10px;
display: flex;

${mobile({
  flexDirection: "column",
  height: "100%",
  padding: 0,
})}

`

const Image = styled.img`
flex:1;
height: 95%;
object-fit: cover;

${mobile({
  width: "97%",
  padding:"10px"
})}

`

const Info = styled.div`
flex: 2;
padding: 10px;
display: flex;
flex-direction: column;
`

const Title = styled.h1`
padding: 30px;
text-align: center;
`

const Desc = styled.p`
padding: 10px;
`

const Price = styled.span`
padding:30px 0px;
font-size: 40px;
font-weight: 400;

`

const Filter = styled.div`
display: flex;
align-items: center;
`

const FilterColor = styled.div`
margin-right: 50px;
display: flex;
align-items: center;
justify-content: center;
`

const FilterText = styled.span`
font-size: 20px;
font-weight: 300;
`

const Color = styled.div`
height: 20px;
width: 20px;
border-radius: 50%;
margin: 5px;
background-color: ${props => (props.color)};
border:2px solid ;
border-color: black;
&:hover{
  border: 2px solid orange;
}
`

const FilterSize = styled.div``

const Select = styled.select`
padding: 5px;
`

const Option = styled.option``

const AddContainer = styled.div`
padding: 30px 0px;
display: flex;
align-items: center;
`

const AmountContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
`

const Amount = styled.div`
width: 20px;
height: 20px;
display: flex;
align-items: center;
justify-content: center;
padding: 5px;
margin: 10px;
border: 2px solid teal;
border-radius: 5px;
`

const Button = styled.button`
margin-left: 100px;
padding: 10px;
background-color: teal;
color: white;
border: none;
cursor: pointer;
`

const SingleProduct = () => {

  const Location = useLocation();
  const id = Location.pathname.split("/")[2];

  const [product , setProduct] = useState({});
  const [quantity , setQuantity] = useState(1);
  const [color , setColor] = useState('');
  const [size , setSize] = useState('');
  const dispatch = useDispatch();

  useEffect(()=> {
      const getProducts = async()=>{
          try {
              
              const res = await publicRequest.get("/products/find/" +id);
              setProduct(res.data)
          } catch (err) {
              console.log(err)
          }

      }
      getProducts();
  },[id]);

  const handleQuantity = (type)=> {
    if(type ==="dec"){
      (quantity > 1) && setQuantity(quantity - 1);
    }else{
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    dispatch(
      addProduct({...product,quantity,color,size})
    );
  };

  return (

    <Container>
        <Navbar/>
        <Announcement/>
        
        <ProductContainer>
          <Image src= {product.img}/>
          <Info>
            <Title>Dump Dress</Title>
            <Desc>
              Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups, Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
            </Desc>
            <Price>${product.price}</Price>
            <Filter>
              <FilterColor>
                <FilterText>Color: </FilterText>

                {product.color?.map((c)=> (
                 <Color color={c} onClick= {()=> {setColor(c)}} /> 
                ))}
                
              </FilterColor>
              <FilterSize>
                <FilterText>Size: </FilterText>
                <Select onChange={(e)=> {setSize(e.target.value)}} >

                  {product.size?.map((s)=> (
                    <Option>{s}</Option>
                  ))}
      
                </Select>
              </FilterSize>
            </Filter>
            <AddContainer>
              <AmountContainer>
                <Remove onClick ={ ()=> {handleQuantity("dec")}} />
                <Amount>{quantity}</Amount>
                <Add onClick ={ ()=> {handleQuantity("inc")}} />
              </AmountContainer>
              <Button onClick={handleClick} >Add To Cart</Button>
            </AddContainer>
          </Info>
        </ProductContainer>

        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default SingleProduct