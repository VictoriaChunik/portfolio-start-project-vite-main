import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Works } from "./work/Works";

import sportImg from './../../../assets/images/yoga.jpg'
import writeImg from './../../../assets/images/write.jpg'
import deviceImg from './../../../assets/images/device.jpg'
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";



export const MyWorks = () => {

  return (
    <StyledMyWorks>

    <Container>
      {/* заголовок h2*/}
      <SectionTitle>Projects</SectionTitle>

      {/* контейнер для контента картинки и текста */}
      <FlexWrapper justify="center" direction="column" align={"flex-start"} wrap={"wrap"}>


         {/* две части  правая картинка  левая, текст */}
        <Works title={'Project Name'}
          text={'I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.'}
          link={''}
          // картинка
          src={sportImg}
        />

        <Works title={'Project Name'}
          text={'What was your role, your deliverables, if the project was personal, freelancing.'}
          link={''}
          src={writeImg}
        />

        <Works title={'Project Name'}
          text={'You can also add in this description the type of the project, if it was for web, mobile, electron.'}
          link={''}
          src={deviceImg}
        />

      </FlexWrapper>

    </Container>

    </StyledMyWorks>
  );
};

const StyledMyWorks = styled.section`
  margin: 0 auto;
  padding: 144px 0px;

  // обертка флекс
  ${FlexWrapper} {
    gap: 80px;
    padding: 0px 100px;
  }

  // Стили для разрешения 768px и меньше
  @media ${theme.media.tablet} {
    padding: 80px 0px; // Уменьшаем padding для секции
    margin: 0px; // Убираем margin

    ${FlexWrapper} {
      gap: 50px; // Уменьшаем gap
      padding: 0px 0px; // Убираем padding
    }
  }
`;
