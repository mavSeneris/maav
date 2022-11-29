import React from 'react'
import styled from 'styled-components'
import { popularProducts } from '../data'
import Product from './Product'
import {mobile} from '../../responsive' 

const Container = styled.div`
    width: 100%;
    padding: 10px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-content: center;
    gap: 10px;

    ${mobile({gridTemplateColumns: "repeat(2, 1fr)"})}
`

export default function Products() {
  return (
    <Container>
        {popularProducts.map(item => {
            return <Product item={item} key={item.id}/>
        })}
    </Container>
  )
}
