import styled from "styled-components";
import { Icon } from "../../components/icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Container } from "../../components/Container";


export const Footer = () => {
  return (
    <StyledFooter>

      <Container>

      <FlexWrapper direction={"column"} align={"center"} style={{ gap: '32px' }}>
      {/* список Ul */}
    <SocialList>

      {/* это Li */}
      <SocialItem>

          {/* это ссылка */}
        <SocialLink>
          <Icon  height={'38px'} width={'38px'} viewBox={'0 0 38px 38px'} iconId={'instagram'}/>
        </SocialLink>
      </SocialItem>

      <SocialItem>
          {/* соцсети */}
        <SocialLink>
          <Icon  height={'38px'} width={'38px'} viewBox={'0 0 38px 38px'} iconId={'linkindin'}/>
        </SocialLink>
      </SocialItem>

      <SocialItem>
          {/* соцсети */}
      <SocialLink>
          <Icon  height={'38px'} width={'42px'} viewBox={'0 0 38px 42px'} iconId={'envelop'}/>
        </SocialLink>
      </SocialItem>

    </SocialList>

      {/* кооперайт */}
      <Copyrigth>Madelyn Torff 2021 </Copyrigth>
      </FlexWrapper>

      </Container>

    {/* Добавляем SVG-волну */}
      <WaveIcon>
        <Icon height={"100%"} width={"100%"} viewBox={"0 0 1440 344"} iconId={"wave"} />
      </WaveIcon>

    </StyledFooter>
  );
};
// футер
const StyledFooter = styled.footer`
  background-color: #f9faff;
  /* position: relative; */
  /* min-height: 400px; */

`
//  декор волна
const  WaveIcon = styled.div`
  bottom: 0;
  left: 0;
  width: 100%;

`

const SocialList = styled.ul`
  display: flex;
  gap: 24px;
  width: 192px;

  &:last-child {
    gap: 0px
  }

`
const SocialItem = styled.li`


`

const SocialLink  = styled.a`
  width: 38px;
  height: 38px;
  justify-content: center;
  align-items: center;
  display: inline-block;


//изменить позже цвет
  &:hover {
    color: green;
  }

`
const Copyrigth = styled.small`
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  color: #828282;
`
