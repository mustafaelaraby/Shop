import styled from 'styled-components';
import Announcement from '../Components/Announcement';
import Navbar from '../Components/Navbar';
import Newsletter from '../Components/Newsletter';
import Footer from '../Components/Footer'
import { Add, Remove } from '@material-ui/icons';
import { mobile } from '../responsive';
import { useSelector } from 'react-redux';
import  StripeCheckout from 'react-stripe-checkout'
import { useEffect, useState } from 'react';
import { userRequest } from '../requestMethods';
import { useNavigate } from 'react-router-dom';

const KEY =  "pk_test_51KypmlHHob1nlapliZYKeIoQEJ4ugojwMDQbZ0Pjyq0t81yIBXp02CInyDr2MZE6Sn72lN4xGqkjFDTnyQVBWrQz00EuU3aqnu";

const Container = styled.div`
`
const CartContainer = styled.div``

const Title = styled.h1`
text-align: center;
padding: 20px;
`

const TopContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 10px 0px;
margin: 20px 40px;
`

const TopButton = styled.button`
font-size: 16px;
font-weight: 500;
padding: 10px;
background-color: ${props => (props.type === 'white'?'white' :'black')};
color: ${props => (props.type === 'white'?'black' :'white')};
cursor: pointer;

${mobile({
  width: "160px",
  padding: "5px 0px",
  fontSize:"14px"
})}

`

const TopCenter = styled.div`
display: flex;

${mobile({
  display:"none",

})}
`

const TopText = styled.span`
margin: 0px 20px;
cursor: pointer;
&:hover{
  color: red;
  text-decoration: underline;
}
`

const BottomContainer = styled.div`
display: flex;
${mobile({
  flexDirection: "column"
})}

`
const Basket = styled.div`
flex:2;
`

const ItemsContainer = styled.div`
display: flex;
height: 30vh;
padding: 10px;

`

const Image = styled.img`
flex: 1;
width: 25%;
height: 100%;
object-fit: cover;
margin:0px 10px;
`

const Info = styled.div`
flex: 3;
display: flex;
align-items: center;
justify-content: space-between;
`

const Details = styled.div`
display: flex;
flex-direction: column;
`

const DetailContainer = styled.div`
display: flex;
padding: 10px;
`

const DetailItem = styled.span`
padding-right: 10px;
font-size: 16px;
font-weight: 700;
`

const DetailValue = styled.span``

const ItemColor = styled.div`
height: 20px;
width: 20px;
border-radius: 50%;
background-color: ${props => props.color};
border: 2px solid black;
`

const PriceDetails = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const AmountContainer = styled.div`
display: flex;
padding: 20px;
display: flex;
align-items: center;
justify-content: center;
`

const Amount = styled.div`
width: 30px;
height: 30px;
display: flex;
align-items: center;
justify-content: center;
font-size: 20px;
`

const Price = styled.div`
padding: 20px;
font-size: 30px;
font-weight: 400;
`
const Hr = styled.hr`
  background-color: antiquewhite;
  border: none;
  height: 1px;

`
const Summary = styled.div`
flex:1;
margin:0px 20px;
border: 1px solid black;
border-radius: 10px;
margin-bottom: 160px;
height: 300px;
`
const SummaryTitle = styled.h1`
padding: 10px;
text-align: center;
`

const SummaryItemContainer = styled.div`
padding: 10px;
display: flex;
align-items: center;
justify-content: space-between;
`

const SummaryItem = styled.span``

const SummaryItemValue = styled.span``

const SummaryButton = styled.button`
width: 90%;
font-size: 16px;
padding: 8px;
margin: 10px 20px;
background-color: black;
color: white;
cursor: pointer;
`


const Cart = () => {
  const cart = useSelector(state => state.cart);
  const subtotal = cart.total;
  const estShipping = 5.99;
  const discount = 4.99;
  const total = subtotal + estShipping - discount;

  const [stripeToken , setStripeToken] = useState(null);
  const navigate = useNavigate();

  const onToken = (token)=> {
    setStripeToken(token);
  }

  useEffect(()=> {
    const makeRequest= async ()=> {
      try {
        const res = await userRequest.post('/checkout/payment' , {
          tokenId:stripeToken.id,
          amount:total * 100,
        })
          navigate('/success',{data:res.data});
      } catch (err) {
        console.log(err)        
      }
    }
    stripeToken && makeRequest();
  },[stripeToken,total,navigate]) 

  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <CartContainer>
            <Title>Your Bag</Title>
            <TopContainer>
                <TopButton type='white'>CONTINUE SHOPPING</TopButton>
                <TopCenter>
                    <TopText>Shopping Bag (2)</TopText>
                    <TopText>Your Wishlist(0)</TopText>
                </TopCenter>
                <TopButton type='black'>CHECKOUT NOW</TopButton>
            </TopContainer>

            <BottomContainer>
              <Basket>
                {cart.products.map((product) => (
                  
                
                  <ItemsContainer>
                  <Image src={product.img}/>
                  <Info>
                    <Details>
                      <DetailContainer>
                        <DetailItem>Product:</DetailItem>
                        <DetailValue>{product.title}</DetailValue>
                      </DetailContainer>
                      <DetailContainer>
                        <DetailItem>ID:</DetailItem>
                        <DetailValue>{product._id}</DetailValue>
                      </DetailContainer>
                      <DetailContainer>
                        <ItemColor color={product.color}/>
                      </DetailContainer>
                      <DetailContainer>
                        <DetailItem>Size:</DetailItem>
                        <DetailValue>{product.size}</DetailValue>
                      </DetailContainer>
                    </Details>
                    <PriceDetails>
                      <AmountContainer>
                        <Add/>
                        <Amount>{product.quantity}</Amount>
                        <Remove/>
                      </AmountContainer>
                      <Price>${product.price * product.quantity}</Price>
                    </PriceDetails>
                  </Info>
                </ItemsContainer>
                ))}
              </Basket>
             
              <Summary>
                <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                <SummaryItemContainer>
                  <SummaryItem>Subtotal</SummaryItem>
                  <SummaryItemValue>${subtotal}</SummaryItemValue>
                </SummaryItemContainer>

                <SummaryItemContainer>
                  <SummaryItem>Estimated Shipping</SummaryItem>
                  <SummaryItemValue>${estShipping}</SummaryItemValue>
                </SummaryItemContainer>

                <SummaryItemContainer>
                  <SummaryItem>Discount</SummaryItem>
                  <SummaryItemValue>$-{discount}</SummaryItemValue>

                </SummaryItemContainer>
                <Hr/>
                <SummaryItemContainer>
                  <SummaryItem><b>Total</b></SummaryItem>
                  <SummaryItemValue><b>${total}</b></SummaryItemValue>
                </SummaryItemContainer>
                <StripeCheckout
                name='LAMA Shop'
                image='https://i.pinimg.com/564x/4b/35/e2/4b35e213e3645632f319d6a6917f4412.jpg'
                shippingAddress
                billingAddress
                description={`Your total is $${cart.total}`}
                amount = {cart.total * 100}
                token={onToken}
                stripeKey = {KEY}
                >
                  <SummaryButton>CHECKOUT</SummaryButton>
                </StripeCheckout>
              </Summary>
            </BottomContainer>

        </CartContainer>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Cart