import styled from "styled-components"
import { collections } from "../data"
import Collection from "./Collection"

const Container = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
`

export default function Collections() {
  return (
    <div>
        <Container>
            {collections.map((item) => {
                return( <Collection item={item} key={item.id}/>)
            })}
        </Container>
    </div>
  )
}
