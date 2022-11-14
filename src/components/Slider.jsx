import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons"
import styled from "styled-components"


const Container = styled.div`
    width: 100%;
    ${'' /* height: 100vh; */}
    display: flex;
    position: relative;
`

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top:0;
    bottom: 0;
    right: ${props => props.direction === "right" && "10px"};
    left: ${props => props.direction === "left" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
`

const Slide = styled.div`
    ${'' /* width: 100%; */}
`
const ImgContainer = styled.div`
    ${'' /* width: 100%; */}
    
`
const Image = styled.img`
    ${'' /* width: 100%; */}
    ${'' /* height: 100%; */}
`
const InfoContainer = styled.div`
    
`

export default function Slider() {
    return (
        <div>
            <Container>
                <Arrow direction="left">
                    <ArrowLeftOutlined />
                </Arrow>
                <Wrapper>
                    <Slide>
                        <ImgContainer>
                            <Image src="https://images.unsplash.com/photo-1535294379103-d629272eee40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80" />
                        </ImgContainer>
                        <InfoContainer></InfoContainer>
                    </Slide>
                </Wrapper>
                <Arrow direction="right">
                    <ArrowRightOutlined />
                </Arrow>
            </Container>
        </div>
    )
}
