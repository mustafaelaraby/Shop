import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';
import Announcement from '../Components/Announcement';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import Newsletter from '../Components/Newsletter';
import Products from '../Components/Products';

const Container = styled.div``

const Title = styled.h1`
text-align: center;
padding: 20px;
`

const FilterContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 10px;
`

const Filter = styled.div``

const FilterText = styled.span`
font-size: 20px;
font-weight: 600;
`

const Select = styled.select`
padding: 5px;
margin: 10px;

`

const Option = styled.option``

const ProductList = () => {

    const Location = useLocation();
    const cat = Location.pathname.split("/")[2];

    const [filters, setFilters] = useState({});
    const [sort , setSort] = useState("Newest");

    const handleFilter = (e)=> {
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]:value});
    };


    const handleSort = (e)=> {
        const value = e.target.value;
        setSort(value);
    };

  return (
    <Container>
        <Navbar/>
        <Announcement/>
        
        <Title>{cat}</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products:</FilterText>
                <Select name='color' onChange={handleFilter}>
                    <Option disabled >
                        color
                    </Option>
                    <Option>white</Option>
                    <Option>black</Option>
                    <Option>red</Option>
                    <Option>blue</Option>
                    <Option>yellow</Option>
                    <Option>green</Option>
                </Select>
                <Select name='size' onChange={handleFilter} >
                    <Option disabled >
                        Size
                    </Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                    <Option>XXL</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Sort Products:</FilterText>
                <Select onChange={handleSort}>
                    <Option>Newest</Option>
                    <Option>Price asc</Option>
                    <Option>Price desc</Option>
                    
                </Select>
            </Filter>
        </FilterContainer>

        <Products cat={cat} filters={filters} sort={sort} />
        <Newsletter/>
        <Footer/>
    </Container>
    
  )
}

export default ProductList