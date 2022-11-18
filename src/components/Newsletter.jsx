import { Send } from '@material-ui/icons'
import styled from 'styled-components'

const Container = styled.div`
    height: max-content;
    display: flex;

`
const InputWrapper = styled.div`
    width: 50%;
    background-color: #e88a75;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
    color: white;
`
const Title = styled.h2`
    font-size: 60px;
    font-weight: 700;
    letter-spacing: 5px;
`
const Desc = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
`
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
`
const Input = styled.input`
    border: none;
    outline: none;
    font-size: 20px;
    flex: 8;
    padding-left: 20px;
  `
const Button = styled.button`
    flex: 1;
    border: none;
    background-color: teal;
    color: white;
`
const ImageWrapper = styled.div`
    width: 50%;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
`


export default function () {
    return (
        <div>
            <Container>
                <InputWrapper>
                    <Title>NEWSLETTER</Title>
                    <Desc>Get timely updates from you favorite products.</Desc>
                    <InputContainer>
                        <Input placeholder="Your email" />
                        <Button>
                            <Send />
                        </Button>
                    </InputContainer>
                </InputWrapper>
                <ImageWrapper>
                    <Image src="https://ae01.alicdn.com/kf/H4704ab0b1cf045328e7f03a374a8aa7bY/MAAP-Cycling-Jerseys-2020-New-Summer-Short-Cycling-Jersey-MTB-Cycling-Clothing-Bike-Jersey-Maillot-Ropa.jpg_Q90.jpg_.webp" />
                </ImageWrapper>


            </Container>
        </div>
    )
}
