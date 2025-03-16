import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";
import { theme } from "../../../../styles/Theme";

type SkillIconPropsType = {
  // здесь только иконка
  iconId: string;
}


// сама иконка
export const SkillIcon = (props: SkillIconPropsType) => {
  return (

     <StyledSkill>
        {/* иконка  vscode*/}
      <Icon iconId={props.iconId}/>
     </StyledSkill>

  );
};

const StyledSkill = styled.div`
  width: 100%;
  text-align: center;

  @media ${theme.media.tablet} {
    width: 100%;
  }
`;


