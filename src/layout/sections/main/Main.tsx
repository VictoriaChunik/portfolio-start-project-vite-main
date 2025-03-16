import styled from "styled-components";
import photo from '../../../assets/images/yellow-bg.png'
import { FlexWrapper } from "../../../components/FlexWrapper";
import { StyledProject } from "../../../components/StyledProject";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";

export const Main = () => {
  return (
    // общий div
  <StyledMain>

    <Container >

     <Photo  src={photo} alt="girl"/>

    <FlexWrapper direction="row" align={'center'} justify={'space-between'}  wrap={'wrap'} >

      {/* div */}
        <BoxText>
        {/* блок с текстом */}

        {/* h1 */}
        <MainTytle>Software Developer</MainTytle>
        {/* h2 */}
        <Name>Hello, my name is Victoria Chunik</Name>
        {/* p */}
        <StyledText>Short text with details about you, what you do or
          your professional career. You can add more information on the about page.
        </StyledText>

        {/* контенер для кнопок */}
        <BoxButton>
           {/* кнопки */}
        <StyledProject primary as={'a'}>Projects</StyledProject>
        <StyledProject outline as={'a'}>LinkedIn</StyledProject>

        </BoxButton>
      </BoxText>


      {/* <Photo  src={photo} alt="girl"/> */}

    </FlexWrapper>
    </Container>

  </StyledMain>
  );
};

// обший div сама обшая секция
const StyledMain = styled.div`
// пока такая высота  секции
  min-height: 90vh;
  display: flex;

  @media ${theme.media.tablet} {
    min-height: 80vh;
  }
  @media ${theme.media.mobile} {
    min-height: 60vh;
  }

 ${Container} {
  position: relative;
  overflow-x: clip;
 }

`
//картинка
const Photo = styled.img`
  width: 100%;
  max-width: 720px;
  object-fit: cover;
  position: absolute;
  top: -20%;
  right: -7%;

  @media ${theme.media.tablet} {
    right: -8%;
    width: 90%; // Уменьшаем ширину на планшетах

  }
  @media ${theme.media.mobile} {
    width: 100%;
  }

`

//h1
const MainTytle = styled.h1`
  color: #FDC435;
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 10px;

  @media ${theme.media.tablet}{
    margin-bottom: 12px;
  }

`
//h2
const Name = styled.h2`
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 64px;
  color: #333;
  margin-bottom: 32px;

  @media ${theme.media.tablet} {
    font-size: 42px;
  }

  @media ${theme.media.mobile} {
    font-size: 42px;
  }

`
//p
const StyledText = styled.p`
  font-family: 'Ninito';
  font-weight: 400;
  font-size: 24px;
  color: #828282;
  margin-bottom: 32px;
`
//div
const BoxText = styled.div`
  text-align: left;
  max-width: 508px;
  top: 20%;
  position: relative;

// адаптив под  плоншет
  @media ${theme.media.tablet} {
    /* position: relative; */
    top: 30%;
  }
   @media ${theme.media.mobile} {
    width: 345px;
    top: 20%;
  }

`

// контенер для кнопок
const BoxButton = styled.div`
 button {
  cursor: pointer;
 }
`
