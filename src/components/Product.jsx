import { FavoriteBorderOutlined, LocalMallOutlined, Search } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Info = styled.div`
        opacity: 0;
        width: 100%;
        height: 100%;
        display: flex;
        gap: 15px;
        position: absolute;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        background-color: rgba(0,0,0, 0.2);
        transition: all 0.5s ease;
    `

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    &:hover ${Info}{
        opacity: 1
    }
`

const Image = styled.img`
    width: 100%;
    height: 400px;
    object-fit: cover;
    ${'' /* z-index: 2; */}
`

const Icon = styled.div`
    background-color: white;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background-color: #e9f5f5;
        transform: scale(1.1)
    }
`


export default function Product({ item }) {
    return (
        <Container>
            <Image src={item.img} />
            <Info>
                <Icon>
                    <LocalMallOutlined />
                </Icon>
                <Icon>
                    <Search />
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined />
                </Icon>
            </Info>

        </Container>
    )
}