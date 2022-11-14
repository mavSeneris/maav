import { Badge } from '@material-ui/core'
import { LocalMallOutlined, PersonOutlineOutlined, Search } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    height: 60px;
    
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

//* NAVBAR LEFT:
const Left = styled.div`
    flex: 1;
`
const Category = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap:15px;
`

const CategoryLink = styled.a`
    cursor: pointer;
`
//* END

//* NAVBAR CENTER: Logo
const Center = styled.div`
    flex: 1;
    text-align: center;
`
const Logo = styled.h1`
    font-weight: bold;
    font-style: italic;
    align-items: center;
    letter-spacing: 5px;
`
//* END

//* NAVBAR RIGHT: Language, Search, Input, MenutItem
const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;   
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 15px;
`

//* END

export default function Navbar() {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Category>
                        <CategoryLink>Men</CategoryLink>
                        <CategoryLink>Women</CategoryLink>
                    </Category>
                </Left>
                <Center>
                    <Logo>MAAV</Logo>
                </Center>
                <Right>
                    <MenuItem>
                        <Language>EN</Language>
                        <Search />
                        <PersonOutlineOutlined/>
                        <Badge overlap="rectangular" badgeContent={4} color="primary">
                            <LocalMallOutlined color="action" />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}
