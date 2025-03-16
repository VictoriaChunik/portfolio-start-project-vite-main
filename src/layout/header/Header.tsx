
import styled from "styled-components";
import { Menu } from "../../components/menu/Menu";
import { Logo } from "../../components/logo/Logo";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { MobileMenu } from "./mobileMenu/MobileMenu";


export const Header = () => {
  return (

      <StyledHeader>
        <Container>
          <FlexWrapper  direction="row" justify={"space-between"} align={"center"}>
            {/* логaтип*/}
            <Logo/>
            {/* меню*/}
            <Menu/>
            <MobileMenu/>
          </FlexWrapper>
        </Container>
      </StyledHeader>
  );

};
//  сам хедер
const StyledHeader= styled.header`
    padding: 14px 0px;

`
