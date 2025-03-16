import styled from "styled-components";
import { theme } from "../styles/Theme";

//h2 - заголовок
export const SectionTitle = styled.h2`
  font-family: 'Playfair Display';
  font-weight: 700;
  font-size: 48px;
  text-align: center;
  color: #25282B;
  letter-spacing: 5px;
  margin-bottom: 80px;
  position: relative;

  @media ${theme.media.mobile} {
    margin-bottom: 50px;
  }

  &::before{
    content: '';
    display: inline-block;
    width: 100px;
    height: 4px;
    background-color: ${theme.colors.accent};

    position: absolute;
    left: 50%;
    bottom:  -30px;
    transform: translateX(-50%);

    @media ${theme.media.mobile}{
       bottom:  -24px;
    }
  }
`
