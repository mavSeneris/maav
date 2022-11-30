import styled from "styled-components"
import { collections } from "../data"
import Collection from "./Collection"
import { mobile } from "../../responsive"

const Container = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    ${mobile({gridTemplateColumns: "repeat(2, 1fr)"})}
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
