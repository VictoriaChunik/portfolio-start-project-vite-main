import styled, { css } from "styled-components";

type StyledProjectPropsType = {
  color?: string;
  primary?: boolean;
  outline?: boolean;
}


/*  кнопки */
export const StyledProject = styled.button<StyledProjectPropsType>`
  /* background-color: ${props => props.color || "white"}; */
  /* background-color: #FDC435; */
  padding: 8px 24px;
  border-radius: 8px;
  /* color: #25282b; */
  font-size: 18px;
  line-height: 24px;
  border: none;
  margin-right: 20px;

  &:last-child {
    margin-right: 0px;
  }

  //интреполяция
  ${props => props.outline && css<StyledProjectPropsType>`

  //outline
  border: 2px solid ${props => props.color || "#25282b"};
  color: #25282b;
  background-color: transparent;

  `}

  ${props => props.primary && css<StyledProjectPropsType>`

  //primary
  background-color: ${props => props.color || "#FDC435"};
  color: #25282b;


  `}

`
