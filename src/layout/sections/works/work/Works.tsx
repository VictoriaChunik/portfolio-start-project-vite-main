import styled from "styled-components";
import { theme } from "../../../../styles/Theme";

type WorksPropsType = {
  title: string;
  text: string;
  src: string;
  link: string;
}

export const Works = (props: WorksPropsType) => {
  return (

    // карточка
    <StyledWorks>

    <LeftSide>
      {/* заголовок */}
      <Title>{props.title}</Title>
        {/* описание */}
      <Text>{props.text}</Text>

      {/* cсылка  ввиде кнопки */}
      <Link href={"#"}>View Project</Link>

    </LeftSide>

      {/* Правая часть: картинка */}
      <RightSide>
        <Image src={props.src} alt="" />
      </RightSide>

    </StyledWorks>
  );
};

const StyledWorks = styled.div`
  background-color: #eed9d9ea;
  width: 100%;
  display: flex;
  border-radius: 24px;
  align-items: stretch;
  overflow: hidden;

  /* На десктопе: четные элементы имеют обратный порядок */
  &:nth-child(even) {
    flex-direction: row-reverse;

  }

//  для планшета 678
    @media ${theme.media.tablet} {
    flex-direction: column-reverse;
    align-items: center;

    /* Отменяем реверсивный порядок для четных элементов на планшетах */
    &:nth-child(even) {
      flex-direction: column-reverse;

    }

  }

  /* Дополнительные стили для мобильных устройств*/
  @media ${theme.media.mobile} {
    width: 100%;
  }

`
const Title = styled.h3`
  color: #25282b;
  font-size: 40px;
  line-height: 150%;
  font-weight: 700;

`
const Text = styled.p`
  font-family: 'Ninito';
  color: #828282;
  font-size: 18px;
  line-height: 27px;
  font-weight: 400;

`
const Image = styled.img`
  width: 100%;

  /* height: 564px; */
  object-fit: cover;

  &:nth-child(even) {
    width: 83%;


  }

  @media ${theme.media.mobile} {
    height: 526px;
  }
`
const Link = styled.a`
  display: inline-block;
  padding: 8px 24px;
  color: #25282B;
  font-size: 18px;
  line-height: 24px;
  text-decoration: none;
  border-radius: 24px;
  border: 1px solid #25282B; /* Рамка */
  text-align: center;
  overflow: hidden;
  width: 200px;
  box-sizing: border-box;
  cursor: pointer;
`

const RightSide = styled.div`
  height: 100%;
  width: 100%;

`
const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  padding: 146px  38px  146px 50px;
  gap: 24px;

  @media ${theme.media.mobile} {
    padding: 131px  27px  130px 35px;
  }
`
