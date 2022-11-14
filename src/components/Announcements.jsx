import { ClearOutlined } from "@material-ui/icons"
import styled from "styled-components"


const Container = styled.div`
  height: 37px;
  background-color: #222;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  padding: 0 5px;
  box-shadow: 0px 3px 7px rgba(22, 22, 22, 0.4);
`

const AnnouncementsText = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`

const TextUnderline = styled.a`
  text-decoration: underline;
  color: white;
  margin: 0 7px;
  cursor: pointer;
`

export default function Announcements() {

  return (
    <Container>
      <AnnouncementsText>
        Shop Bundles, Save 15%.
        <TextUnderline>
          Men
        </TextUnderline>
        <TextUnderline>
          Women
        </TextUnderline>
      </AnnouncementsText>
      <ButtonContainer >
        <ClearOutlined />
      </ButtonContainer>

    </Container>
  )
}
