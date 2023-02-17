import { Link } from "react-router-dom"
import styled from "styled-components"

const Container = styled.div`
    width: 100%;

    flex: 1;
    height: 50vh;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-item: center;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const InfoContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
`

const Title = styled.h1`
    color: white;
    font-size: 30px;
    font-weight: 700;
    letter-spacing: 2px
`
const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: white;
    color:gray;
    cursor: pointer;
    font-weight: 600;
`


export default function CategoryItem({ item }) {
    return <Container>
        <Image src={item.img} />
        <InfoContainer>
            <Title>{item.title}</Title>
            <Link to={`product-list/:${item.category}`}>
                <Button>SHOP NOW</Button>
            </Link>

        </InfoContainer>

    </Container>

}

