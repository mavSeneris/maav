import styled from "styled-components"
import CategoryItem from "./CategoryItem"
import { categories } from "../data"
import { mobile } from '../../responsive'



const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 6px 0;
    gap: 10px;
    padding:0 10px;

    ${mobile({flexDirection: "column"})}
`

export default function Categories() {
    return (
    
            <Container>
                {categories.map(item => {
                    return <CategoryItem key={item.id} item={item} />
                })}
            </Container>
        
    )
}

