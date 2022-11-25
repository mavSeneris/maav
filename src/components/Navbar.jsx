import { Badge } from '@material-ui/core'
import { ArrowBack, Clear, LocalMallOutlined, PersonOutlineOutlined, Search } from '@material-ui/icons'
import styled from 'styled-components'
import { useState } from 'react'


const Container = styled.div`
    height: max-content;
    position: sticky;
    top: 0;
    z-index: 3;
    background-color: white;
    opacity: 0.97;
    box-shadow: 0 1px 10px rgba(160, 160, 160, 0.1);

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

const LoginWrapper = styled.div`
    width: 400px;
    height: 100vh;
    padding: 20px;
    background-color: white;
    position: absolute;
    right: 0px;
    transition: 0.5s;
`

const Title = styled.h3`
    padding: 17px 20px;
    height: 50px;
    background-color: #e6e6e4;
    font-size: 14px;
`

const Desc = styled.div`
    padding: 20px;
    margin-top: 30px;
    font-size: 14px;
    
`

const LoginFlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-item: center;
    padding: 20px;
    gap: 30px;
`

const Email = styled.input`
    border-radius: 25px;
    border: 1px solid black;
    height: 40px;
    padding: 20px;
    font-size: 16px;
`

const Button = styled.button`
    border-radius: 25px;
    border: 1px solid black;
    height: 40px;
    font-size: 16px;
    color: white;
    background-color: black;
    cursor: pointer;  
`
const ShoppingBagWrapper = styled.div`
    width: 400px;
    height: 100vh;
    background-color: white;
    position: absolute;
    right: 0px;
`


//** Login Menu */ 
const Form = styled.form`
    border-top: 1px solid #d0d0d0;
    padding: 60px 20px 0 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
`
const Header = styled.h3`
    font-size: 30px;
    padding: 0 20px;
    margin: 30px 0 10px 0;
`

const SubTitle = styled.div`
    padding: 0 20px;
    margin-bottom: 60px;
    font-size: 14px;
`
const Label = styled.label`
    font-size: 14px;
`
const InputLogin = styled.input`
    width: 100%;
    height: 42px;
    border-radius: 25px;
    cursor: pointer;
    border: 1px solid black;
    outline: none;
    background-color: white;
    padding: 20px;
    font-size: 14px;
`
const Agreement = styled.p`
    font-size: 16px;
    margin: 10px 0;
`
const ButtonLogin = styled.button`
    width: 100%;
    height: 42px;
    border-radius: 25px;
    cursor: pointer;
    border: 1px solid black;
    outline: none;
    background-color: black;
    color: white;

&:hover {
    background-color: #191919;
}
`

const FormLogin = styled.form`
    padding: 10px 20px 0 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
`

const EmailLogin = styled.div`
    padding: 0 20px;
    margin-bottom: 20px;
    font-size: 14px;
`

// * END

//* Shopping cart 

const Bag = styled.div`
    margin-top: 5px;
    padding: 8px 20px 0 20px;
    display: flex;
    gap: 13px;
    font-size: 12px;
`
const ProductImage = styled.img`\
    width: 30%;
`
const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 70%;
`
const ProductName = styled.h4``
const ProductSize = styled.h4``
const ProductColour = styled.h4``
const AddContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const AmountContainer = styled.div`
    display: flex;
    gap: 6px;
    font-size: 16px;
    align-items: center;
`

const AmountButton = styled.button`
    border: none;
    background-color: white;
`
const Amount = styled.span`
    font-size: 12px;
`
const ProductAmountPrice = styled.div`
    font-size: 12px;
`

const ViewProduct = styled.a`
    text-decoration: underline;
    font-size: 12px;
`
const Remove = styled.a`
    text-decoration: underline;
    font-size: 10px;c
`



export default function Navbar() {
    const [showSearch, setShowSearch] = useState(false)
    const [searchValue, setSearchValue] = useState("")
    const [showLogin, setShowLogin] = useState(false)
    const [showBag, setShowBag] = useState(false)

    function toggleSearch() {
        setShowSearch(prevShow => !prevShow)
        setShowLogin(false)
        setShowBag(false)
    }

    function handleChange(event) {
        const { value } = event.target
        setSearchValue(value)
    }

    function clearSearchVal() {
        setSearchValue(prevValue => prevValue = "")
    }

    function toggleLogin() {
        setShowLogin(prevState => !prevState)
        setShowBag(false)
        setShowSearch(false)
    }

    function toggleBag() {
        setShowBag(prevState => !prevState)
        setShowLogin(false)
        setShowSearch(false)
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
                        <PersonOutlineOutlined onClick={toggleLogin} />
                        <Badge overlap="rectangular" badgeContent={4} color="primary">
                            <LocalMallOutlined onClick={toggleBag} />
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

            ${'' /* {showLogin && !showSearch && <LoginWrapper>
                <Title>MAAV Profile</Title>
                <Desc>Build your unique profile for faster checkout, see full order history, save riding preferences and get access to special offers, before the rest of the pack.</Desc>
                <LoginFlexContainer>
                    <Email placeholder='email@example.com' />
                    <Button>Get Started</Button>
                </LoginFlexContainer>
            </LoginWrapper>}  */}

            {showLogin && !showSearch && <LoginWrapper>
                <ArrowBack fontSize='large' cursor="pointer" />
                <Header>One Last Step!</Header>
                <SubTitle>Sit tight - just two minutes until your account is ready to go</SubTitle>
                <Form>
                    <Label>Email</Label>
                    <InputLogin placeholder='email@example.com' />
                    <Label>First Name</Label>
                    <InputLogin placeholder='First Name' />
                    <Label>Last Name</Label>
                    <InputLogin placeholder='Last Name' />
                    <Agreement>
                        By registering, I agree to the MAAV Terms & Conditions and Privacy Policy
                    </Agreement>
                    <ButtonLogin>Creat Profile</ButtonLogin>
                </Form>
            </LoginWrapper>}

            ${'' /* {showLogin && !showSearch && <LoginWrapper>
                <ArrowBack fontSize='large' cursor="pointer"/>
                <Header>Please login</Header>
                <EmailLogin>Email: email@example.com</EmailLogin>
                <FormLogin>
                    <Label>Password</Label>
                    <InputLogin placeholder='Password' />
                    
                    <ButtonLogin>Login</ButtonLogin>
                </FormLogin>
            </LoginWrapper>} */}


            ${'' /* {showBag && !showSearch && <ShoppingBagWrapper>
                <Title>Shopping Bag (0 items)</Title>
                <Desc>Your Cart is currently empty.</Desc>
            </ShoppingBagWrapper>} */}

            {showBag && !showSearch && <ShoppingBagWrapper>
                <Title>Shopping Bag (4 items)</Title>
                <Bag>
                    <ProductImage src="https://maap.cc/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0510%2F7809%2Fproducts%2FMAP-MAJ334_LAVA_EvadeProBaseJersey_Lava_PDP_SPECS_03_DESKTOP.jpg%3Fv%3D1668029203&w=1920&q=100" />
                    <ProductInfo>
                        <ProductName>Shift Pro Base Jersey</ProductName>
                        <ProductSize>Size Extra Small</ProductSize>
                        <ProductColour>Colour Spruce</ProductColour>
                        <AddContainer>
                            <AmountContainer>
                                <AmountButton>+</AmountButton>
                                <Amount>1</Amount>
                                <AmountButton>-</AmountButton>
                            </AmountContainer>
                            <ProductAmountPrice>$115.00</ProductAmountPrice>
                        </AddContainer>
                        <ViewProduct>View Product</ViewProduct>
                        <Remove>Remove</Remove>
                    </ProductInfo>
                </Bag>
                <Bag>
                    <ProductImage src="https://maap.cc/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0510%2F7809%2Fproducts%2FShiftProBaseJersey_Spruce_PDP_SPECS_03_DESKTOP.jpg%3Fv%3D1660192789&w=1920&q=100" />
                    <ProductInfo>
                        <ProductName>Shift Pro Base Jersey</ProductName>
                        <ProductSize>Size Extra Small</ProductSize>
                        <ProductColour>Colour Spruce</ProductColour>
                        <AddContainer>
                            <AmountContainer>
                                <AmountButton>+</AmountButton>
                                <Amount>1</Amount>
                                <AmountButton>-</AmountButton>
                            </AmountContainer>
                            <ProductAmountPrice>$115.00</ProductAmountPrice>
                        </AddContainer>
                        <ViewProduct>View Product</ViewProduct>
                        <Remove>Remove</Remove>
                    </ProductInfo>
                </Bag>
                <Bag>
                    <ProductImage src="https://maap.cc/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0510%2F7809%2Fproducts%2FMAP-MAB148_STK_ProBib2.0_Shitaki_PDP_SPECS_03_DESKTOP.jpg%3Fv%3D1668029203&w=1920&q=100" />
                    <ProductInfo>
                        <ProductName>Shift Pro Base Jersey</ProductName>
                        <ProductSize>Size Extra Small</ProductSize>
                        <ProductColour>Colour Spruce</ProductColour>
                        <AddContainer>
                            <AmountContainer>
                                <AmountButton>+</AmountButton>
                                <Amount>1</Amount>
                                <AmountButton>-</AmountButton>
                            </AmountContainer>
                            <ProductAmountPrice>$115.00</ProductAmountPrice>
                        </AddContainer>
                        <ViewProduct>View Product</ViewProduct>
                        <Remove>Remove</Remove>
                    </ProductInfo>
                </Bag>
                <Bag>
                    <ProductImage src="https://maap.cc/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0510%2F7809%2Fproducts%2FMAP-MAA097_CLROLV_TrainingBottle_ClearOlive_PDP_HERO_01_DESKTOP.jpg%3Fv%3D1667427496&w=1920&q=100" />
                    <ProductInfo>
                        <ProductName>Shift Pro Base Jersey</ProductName>
                        <ProductSize>Size Extra Small</ProductSize>
                        <ProductColour>Colour Spruce</ProductColour>
                        <AddContainer>
                            <AmountContainer>
                                <AmountButton>+</AmountButton>
                                <Amount>1</Amount>
                                <AmountButton>-</AmountButton>
                            </AmountContainer>
                            <ProductAmountPrice>$115.00</ProductAmountPrice>
                        </AddContainer>
                        <ViewProduct>View Product</ViewProduct>
                        <Remove>Remove</Remove>
                    </ProductInfo>
                </Bag>
            </ShoppingBagWrapper>}
        </Container>
    )
}
