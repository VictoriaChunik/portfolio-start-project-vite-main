import styled, { css } from "styled-components";
import { theme } from "../../../styles/Theme";

export const MobileMenu = () => {
  return (
    <StyledMobileMenu>
      {/* Кнопка бургер-меню */}
      <BurgerButton isOpen={false}>
        <span></span>
      </BurgerButton>

      {/* Попап с меню */}
      <MobileMenuPopup isOpen={false}>
        <ul>
          <ListItem>
            <Link href="">About</Link>
          </ListItem>
          <ListItem>
            <Link href="">Projects</Link>
          </ListItem>
          <ListItem>
            <Link href="">Contacts</Link>
          </ListItem>
        </ul>
      </MobileMenuPopup>
    </StyledMobileMenu>
  );
};

// Стили для контейнера
const StyledMobileMenu = styled.nav`
  display: none;

  @media ${theme.media.tablet} {
    display: block;
  }
`;

// Стили для попапа меню
const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  min-height: 700px; /* Фиксированная высота */
  z-index: 9999;
  background-color: rgba(241, 231, 231, 0.9);
  display: none;
  justify-content: center;
  align-items: center;

  ${props =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
      display: flex;
    `}

  ul {
    display: flex;
    gap: 48px;
    align-items: center;
    flex-direction: column;
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;

// Стили для кнопки бургер-меню
const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  top: 25px;
  right: 20px;
  width: 36px;
  height: 36px;
  z-index: 10000000;
  border: none;
  background: transparent;
  cursor: pointer;

  @media ${theme.media.tablet} {
    top: 10px;
  }

  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: #000;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* transition: opacity 0.3s ease; */
    opacity: ${props => (props.isOpen ? 0 : 1)};
  }

  &::before,
  &::after {
    content: '';
    display: block;
    width: 36px;
    height: 2px;
    background-color: #000;
    position: absolute;
    left: 0;
    transition: transform 0.3s ease;
  }

  &::before {
    top: 10px;
    ${props =>
      props.isOpen &&
      css<{ isOpen: boolean }>`
        transform: rotate(45deg) translate(5px, 5px);
      `}
  }

  &::after {
    bottom: 10px;
    ${props =>
      props.isOpen &&
      css<{ isOpen: boolean }>`
        transform: rotate(-45deg) translate(5px, -5px);
      `}
  }
`;

// Стили для пунктов меню
const ListItem = styled.li`
  list-style: none;
`;

// Стили для ссылок
const Link = styled.a`
  font-family: 'Raleway';
  font-weight: 500;
  font-size: 18px;
  color: ${theme.colors.font};
  text-decoration: none;

  &:hover {
    color: ${theme.colors.accent};
  }
`;
