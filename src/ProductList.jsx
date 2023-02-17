import Announcement from "../components/Announcements"
import styled from "styled-components"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Collections from "../components/Collections"
import { useLocation } from "react-router-dom"

const Container = styled.div`
    height: 100%;
`

const FilterContainer = styled.div`
    display: flex;
    padding: 40px 20px 0 20px;
    gap: 30px;
    background-color: white;
`

const Filter = styled.div`
`

const FilterTitle = styled.h2`
    padding: 20px;
    font-weight: 300;
`

const Select = styled.select`
    font-family: 'IBM Plex Sans', sans-serif;
    border: none;
    background-color: transparent;
`

const Option = styled.option`
    border: none;
`

export default function ProductList() {
    const location = useLocation()
    console.log(location)

    return (
        <Container>
            <Announcement />
            <Navbar />
            <FilterTitle>MAAV Collections</FilterTitle>
            <FilterContainer>
                <Filter>
                    <Select>
                        <Option disabled value>Sort</Option>
                        <Option>Newest</Option>
                        <Option>Prices High to Low</Option>
                        <Option>Prices Low to High</Option>
                    </Select>
                </Filter>
                <Filter>
                    <Select>
                        <Option disabled value>Size</Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <Select>
                        <Option disabled value>Color</Option>
                        <Option>Red</Option>
                        <Option>Orange</Option>
                        <Option>Yellow</Option>
                        <Option>Green</Option>
                        <Option>Blue</Option>
                        <Option>Indigo</Option>
                        <Option>Violet</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Collections />
            <Footer />
        </Container>
    )
}
