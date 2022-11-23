import styled from "styled-components"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Announcements from "../components/Announcements"


const Container = styled.div`
`

const Wrapper = styled.div`
    margin-top: 20px;
    display: flex;
`
const ImgContainer = styled.div`
    flex: 2; 
`
const Image = styled.img`
    width: 100%;
    min-height: 1000px;
    object-fit: contain;
    max-width: 70vw;

`
const InfoContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    
    
`
const InfoWrapper = styled.div`
    padding: 0 210px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    min-width: 700px;
    min-height: 1000px;
    max-width: 800px;
    margin-bottom: 40px;

`
const Title = styled.h2`
    font-size: 30px;
    font-weight: 300;
`
const Desc = styled.p`
    font-size: 16px;
    font-weight: 300;
    line-height: 1.47;
`
const Price = styled.span`
    font-size: 30px;
    font-weight: 300;
    margin-top: 20px;
`

const FilterContainer = styled.div`
    ${'' /* margin: 10px 0; */}
`
const Filter = styled.div`
    display: flex;
    margin: 20px 0;
`
const FilterColor = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
    margin: 5px;
    cursor: pointer;
`

const FilterSizeOption = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    width: 100%;
    height: 40px;
    cursor: pointer;
`

const Size = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
`

const ProductBtn = styled.button`
    width: 100%;
    height: 50px;
    background-color: black;
    color: white;
    font-size: 18px;
    border-radius: 25px;
    cursor: pointer;
    border: 1px solid black;
    outline: none;

    &:hover {
        background-color: #191919;
    }
`

const ProductInfoContainer = styled.div`
    border-top: 1px solid black;
    margin: 20px 0;
    display: flex;
    flex-direction: column;
`
const ProductWeightTitle = styled.h4`
    margin-top: 20px;
    font-weight: 600;

`
const ProductWeight = styled.span`
    margin-top: 5px;
    font-size: 16px;
    font-weight: 300;
`
const ProductInfoTitle = styled.h4`
    margin-top: 30px;
    font-weight: 700;
`
const ProductInfoPara = styled.p`
    margin-top: 5px;
    font-size: 16px;
    font-weight: 300;
    line-height: 1.47;
`

const ReviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`








export default function Product() {
    return (
        <div>
            <Container>
                <Announcements />
                <Navbar />
                <Wrapper>
                    <ImgContainer>
                        <Image src="https://maap.cc/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0510%2F7809%2Fproducts%2FMAP-MAJ334_LAVA_EvadeProBaseJersey_Lava_PDP_SPECS_02_DESKTOP.jpg%3Fv%3D1668029203&w=1920&q=100" />
                    </ImgContainer>
                    <InfoContainer>
                        <InfoWrapper>
                            <Title>Evade Pro Base Jersey</Title>
                            <Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                                venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
                                iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
                                tristique tortor pretium ut. Curabitur elit justo, consequat id
                                condimentum ac, volutpat ornare.</Desc>
                            <Price>$215.00</Price>
                            <FilterContainer>
                                <Filter>
                                    {/* <FilterTitle>Color</FilterTitle> */}
                                    <FilterColor style={{ border: "solid" }} color="orange" />
                                    <FilterColor color="darkblue" />
                                    <FilterColor color="gray" />
                                    <FilterColor color="green" />
                                    <FilterColor color="yellow" />
                                </Filter>
                                <Filter>

                                    <FilterSizeOption style={{ backgroundColor: "black", color: "white" }}>
                                        <Size>XS</Size>
                                    </FilterSizeOption>
                                    <FilterSizeOption>
                                        <Size>S</Size>
                                    </FilterSizeOption>
                                    <FilterSizeOption>
                                        <Size>M</Size>
                                    </FilterSizeOption>
                                    <FilterSizeOption>
                                        <Size>L</Size>
                                    </FilterSizeOption>
                                    <FilterSizeOption>
                                        <Size>XL</Size>
                                    </FilterSizeOption>

                                </Filter>

                            </FilterContainer>
                            <ProductBtn>ADD TO BAG</ProductBtn>
                            <ProductInfoContainer>
                                <ProductWeightTitle>
                                    Product Weight:
                                </ProductWeightTitle>
                                <ProductWeight>
                                    125g - 4.40 OZ
                                </ProductWeight>
                                <ProductInfoTitle>
                                    Care
                                </ProductInfoTitle>
                                <ProductInfoPara>
                                    Machine wash cold. Do not bleach. Do not tumble dry. Do not iron. Do not use softener. Do not dry clean. Do not soak.
                                </ProductInfoPara>
                                <ProductInfoTitle>
                                    WHAT IS BLUESIGN
                                </ProductInfoTitle>
                                <ProductInfoPara>
                                    bluesign® APPROVED label ensures that our goods are made from materials that are produced only using chemicals and processes that are safe for people and the environment, minimizing the impact on air and water emissions from the manufacturing processes.
                                </ProductInfoPara>
                            </ProductInfoContainer>
                            <ReviewContainer>
                                <ProductBtn>WRITE REVIEW</ProductBtn>
                                <ProductBtn style={{ backgroundColor: "white", color: "black" }}>SHOW REVIEWS</ProductBtn>
                            </ReviewContainer>
                        </InfoWrapper>

                    </InfoContainer>
                </Wrapper>
                <Footer />
            </Container>
        </div>
    )
}
