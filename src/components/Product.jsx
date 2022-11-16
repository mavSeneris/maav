import { FavoriteBorderOutlined, LocalMallOutlined, Search } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
`

    const Circle = styled.div`
        ${'' /* width: 200px;
        height: 200px;
        border-radius: 50%;
        background-color: transparent;
        position: absolute; */}
    `

    const Image = styled.img`
        width: 100%;
        height: 400px;
        object-fit: cover;
        ${'' /* z-index: 2; */}
    `

    const Info = styled.div`
        display: flex;
        gap: 15px;
        position: absolute;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    `

    const Icon = styled.div`
        background-color: white;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    `


export default function Product({ item }) {
    return (
        <Container>
            <Circle />
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