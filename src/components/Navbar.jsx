import { Badge } from '@material-ui/core'
import { Clear, LocalMallOutlined, PersonOutlineOutlined, Search } from '@material-ui/icons'
import styled from 'styled-components'
import { useState } from 'react'


const Container = styled.div`
    height: max-content;
    position: sticky;
    
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
    font-size: 14px;
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
    cursor: pointer;
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

const ButtonSearch = styled.button`
    background-color: transparent;
    border:none;
    outline: none;
    cursor: pointer;
`

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 15px;
`

const InputWrapper = styled.div`
    padding: 10px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #e6e6e4;
    width: 100%;
    height: 60px;
    z-index: 2;
    
`

const Input = styled.input`
    z-index: 2;
    width: 100%;
    height: 50px;
    font-size: 20px;
    ${'' /* font-weight: 400; */}
    fomt-family: 'Urban', san-serif;
    color: #303030;
    background-color: #e6e6e4;
    border: none;
    outline: none;
`

const ButtonContainer = styled.button`
    width: max-content;
    display: flex;
    justify-content: flex-end;
    z-index: 1;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
`
//* END

export default function Navbar() {
    const [showSearch, setShowSearch] = useState(false)
    const [searchValue, setSearchValue] = useState("")

    function toggleSearch() {
        setShowSearch(prevShow => !prevShow)
    }

    function handleChange(event) {
        const { value } = event.target
        setSearchValue(value)
    }

    function clearSearchVal(){
        setSearchValue(prevValue => prevValue = "")
    }

    const handleKeyDown = event => {
        const { value } = event.target
        event.key === "Enter" && console.log(value) && setSearchValue(value);
      };


    return (
        <Container>
            <Wrapper>
                <Left>
                    <Category>
                        <CategoryLink>Men</CategoryLink>
                        <CategoryLink>Women</CategoryLink>
                        <CategoryLink>Accesories</CategoryLink>
                        <CategoryLink>Stories</CategoryLink>
                    </Category>
                </Left>
                <Center>
                    <Logo>MAAV</Logo>
                </Center>
                <Right>
                    <MenuItem>
                        <Language>EN</Language>
                        <ButtonSearch onClick={toggleSearch}>
                            {!showSearch && <Search />}
                            {showSearch && <Clear />}
                        </ButtonSearch>
                        <PersonOutlineOutlined />
                        <Badge overlap="rectangular" badgeContent={4} color="primary">
                            <LocalMallOutlined />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
            {showSearch && <InputWrapper >
                <Input
                    type="text"
                    placeholder='What are you looking for?'
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    name="firstName"
                    value={searchValue}
                >
                </Input>
                <ButtonContainer onClick={clearSearchVal}>
                    <Clear fontSize="small" />
                </ButtonContainer>
            </InputWrapper>}
        </Container>
    )
}
