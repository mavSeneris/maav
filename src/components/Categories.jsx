import styled from "styled-components"
import CategoryItem from "./CategoryItem"
import { categories } from "../data"

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 6px 0;
    gap: 10px;
    padding:0 10px
`

export default function Categories() {
    return (
        <div>
            <Container>
                {categories.map(item => {
                    return <CategoryItem key={item.id} item={item}  />
                })}
            </Container>
        </div>
    )
}

