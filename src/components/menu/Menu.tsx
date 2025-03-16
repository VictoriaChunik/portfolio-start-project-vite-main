import styled from "styled-components";
import { theme } from "../../styles/Theme";

export const Menu = () => {  return (
// здесь был nav
      <StyledMenu>

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

        </StyledMenu>
  );
};
//  потом созданый сомпонент мы вставляем вместо тего в даном случае это тег Nav
const StyledMenu = styled.nav`
position: relative;
z-index: 2;
  ul {
    display: flex;
    gap: 48px;
  }

  //адаптив под 768px
  @media ${theme.media.tablet} {
    display: none;

  }
`
const ListItem = styled.li`

`

const Link = styled.a`
  font-family: 'Raleway';
  font-weight: 500;
  font-size: 18px;
  line-height: 156%;
  color:${theme.colors.font}
`
