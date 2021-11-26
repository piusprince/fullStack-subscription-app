import styled from 'styled-components';
import img from '../../Assets/images/hero2Bg.webp'
import img2 from '../../Assets/images/heroBg.webp'
import { Container } from 'react-bootstrap';
import ModalComponent from '../Modal/ModalComponent';

const HeroWrapper = styled.header`
    padding: 5rem 0;
    height: 70vh;
    background-image: url(${img});
    background-position: center;
    background-size: cover;

`

const HeroTextContainer = styled.div`
    padding: 3rem;
    background-color: #30ba70;
    color: white;
    width: 32.5rem;
`

const HeroMainText = styled.h1`
    font-size: 5rem;
`

const HeroSubText = styled.h3`
    margin: 1rem 0;
    font-weight: 400;
`



const Hero = () => {
    return (
        <div>
            <HeroWrapper>
                <Container>
                   <HeroTextContainer>
                        <HeroMainText>Feed your mind with positivity</HeroMainText>
                        <HeroSubText>Nourish your mind and your mood with good thought which elevate your persona</HeroSubText>
                        <ModalComponent text="Sign up" variant="primary"/>
                        <ModalComponent text="Login" variant="danger"/>
                    </HeroTextContainer>
                </Container>
            </HeroWrapper>

        </div>
    )
}

export default Hero
