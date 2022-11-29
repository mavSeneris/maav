import { Facebook, Instagram, Mail, Twitter } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../../responsive'

const Container = styled.div`
    padding: 70px 50px;
    display: flex;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 100px;
    background-color: #141f39;
    flex-wrap: no-wrap;
    height: 100%;

    ${mobile({
        gridTemplateColumns: "repeat(1, 1fr)",
        gap: "30px"
    })}
`

const Wrapper = styled.div`
    ${'' /* width: 500px; */}
    display: flex;
    flex-direction: column;
    color: white;
    gap: 9px;
`

const Title = styled.h3`
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 8px;
`

const Link = styled.a`
    cursor: pointer;
`

const IconWrapper = styled.div`
    display: flex;
    gap: 10px;
`

const Icon = styled.div`
    cursor: pointer;
`

const Logo = styled.h1`
    width: 50%;
    ${'' /* justify-self: flex-end; */}
    font-size: 100px;
    color: white;
    font-weight: 700;
    letter-spacing: 20px;
    font-style: italic;
    ${'' /* text-align: right; */}

    @media only screen and (max-width: 1050px){
            ${{gridColumn: "2 / 1", fontSize: "40px"}}
        }
      
`



export default function Footer() {
    return (
        <div>
            <Container>
                <Wrapper>
                    <Title>Customer Service</Title>
                    <Link>Email Us</Link>
                    <Link>Shipping</Link>
                    <Link>Returns</Link>
                    <Link>Cash Replacements</Link>
                    <Link>FAQ</Link>
                </Wrapper>
                <Wrapper>
                    <Title>About US</Title>
                    <Link>Email us</Link>
                    <Link>Privacy Policies</Link>
                    <Link>Terms and Conditions</Link>
                    <Link>Maap Lab</Link>
                </Wrapper>
                <Wrapper>
                    <Title>Connect</Title>
                    <IconWrapper>
                        <Icon>
                            <Facebook />
                        </Icon>
                        <Icon>
                            <Instagram />
                        </Icon>
                        <Icon>
                            <Twitter />
                        </Icon>
                        <Icon>
                            <Mail />
                        </Icon>
                    </IconWrapper>
                </Wrapper>
                <Logo>MAAV</Logo>
            </Container>
        </div>
    )
}
