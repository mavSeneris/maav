import styled from "styled-components"

const Container = styled.div`
    
`
const CollectionContainer = styled.div`
    position: relative;
    
`

const ImageWrapper = styled.div`
    position: relative;
`

const Image = styled.img`
`

const ImageHover = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    transition: opacity 0.250s ease;

    &:hover {
        opacity: 1;
    }
`

const InfoWrapper = styled.div`
    position: absolute;
    z-index: 2;
    display: flex;
    flex-direction: column;
    bottom: 10px;
    font-size: 13px;
    padding: 10px;
    opacity: 1;
`


const Title = styled.div``
const Price = styled.div``


export default function Collection({ item }) {
    return (
        <div>
            <Container>
                <CollectionContainer>
                    <ImageWrapper>
                        <Image src={item.img1}
                        />
                        <ImageHover src={item.img2} />
                    </ImageWrapper>
                    <InfoWrapper>
                        <Title>{item.name}</Title>
                        <Price>${item.price}</Price>
                    </InfoWrapper>
                </CollectionContainer>
            </Container>
        </div>
    )
}
