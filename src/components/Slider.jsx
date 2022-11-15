import styled from "styled-components"


const Container = styled.div`
    width: 100%;
    display: flex;
    position: relative;
`

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`

const ImgContainer = styled.div`
    width: 100%;
    
`
const Image = styled.img`
    width: 100%;
    height: 100%;
`
const InfoContainer = styled.div`
    position: absolute;
    bottom: 50px;
    left: 20px;
    color: white;
    text-shadow: 0 1px 12px rgb(22,22,22, 0.2)
`

const Title = styled.h2`
    font-size: 40px;
    font-style: italic;
    font-weight: 600;
    letter-spacing: 6px;
    word-spacing: 5px;
    padding-bottom: 5px;
`
const SubTitle = styled.p`
    font-size: 16px;
    word-spacing: 4px;
`

const Button = styled.button `
    font-size: 20px;
    border: none;
    outline: None;
    margin: 10px 0;
    background-color: transparent;
    cursor: pointer;
    color: white;
`

export default function Slider() {
    return (
        <div>
            <Container>
                <Wrapper>
                    
                        <ImgContainer>
                            <Image src="https://cdn.shopify.com/s/files/1/0419/5939/1399/files/4qChoZT_2048x2048.jpg?v=1601115655"/>
                        </ImgContainer>
                        <InfoContainer>
                            <Title>EVOLVING COLOURS</Title>
                            <SubTitle>New Season Evade and Evolve</SubTitle>
                            <Button>SHOP NOW</Button>
                        </InfoContainer>
                    
                </Wrapper>
            </Container>
        </div>
    )
}
