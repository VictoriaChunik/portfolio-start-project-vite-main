import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { SkillIcon } from "./iconSkill/SkillIcon";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";
// import { FlexWrapper } from "../../../components/FlexWrapper";
// import { theme } from "../../../styles/Theme";


export const Skills = () => {
  return (
    // div
  <StyledSkills>

    <Container>
        {/* заголовок */}
      <SectionTitle>Skills</SectionTitle>
      {/*  контенер для иконок */}
  {/* <FlexWrapper direction="row" justify={"space-between"} align={"center"} wrap={"wrap"} style={{ gap: '80px'}}  > */}
  <SkillsGrid>
      {/* здесь будут иконки для скилов Skill*/}
      <SkillIcon iconId = {'vscode'}/>
      <SkillIcon iconId = {'js'}/>
      <SkillIcon iconId = {'css'}/>
      <SkillIcon iconId = {'html'}/>
      <SkillIcon iconId = {'man'}/>
      <SkillIcon iconId = {'vector'}/>
      <SkillIcon iconId = {'githab'}/>
      <SkillIcon iconId = {'git'}/>
      <SkillIcon iconId = {'react'}/>
      <SkillIcon iconId = {'sass'}/>
      <SkillIcon iconId = {'bootstrap'}/>
      <SkillIcon iconId = {'taillwing'}/>
  </SkillsGrid>

{/* </FlexWrapper> */}

    </Container>

  </StyledSkills>
  );
};


;
// Стили для секции
const StyledSkills = styled.section`
  /* padding: 20px 0; */
`;

// Grid-контейнер для иконок
const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  row-gap: 72px;
  column-gap: 80px;
  justify-content: center;
  align-items: center;

  @media ${theme.media.tablet} {
    grid-template-columns: repeat(3, 1fr);
    /* gap: 50px */
  }

  @media ${theme.media.mobile} {
   grid-template-columns: repeat(2, 1fr);
    column-gap: 50px;
  }
`;
