import styled from "styled-components";
import { theme } from "../../styles/Theme";

export const Logo = () => {
  return (
    // ссылка а без картинки, так нет иконки в лого
    <StyleLogo href="#">Victoria Chunik</StyleLogo>
  );
};

const StyleLogo = styled.a`
  font-family: 'Comfortaa';
  font-weight: 700;
  font-size: 18px;
  line-height: 180%;
  color: ${theme.colors.font};

 @media ${theme.media.tablet} {
    position: relative;
    z-index: 1;
    margin-right: auto;
  }

`
