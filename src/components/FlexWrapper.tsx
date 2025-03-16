import styled from "styled-components";
import { theme } from "../styles/Theme";


// определения типа данных
type FlexWrapperPropsType = {
  direction?: string;
  justify?: string;
  align?: string;
  wrap?: string;
  gap?: string;
  position?: string;
}
export const FlexWrapper = styled.div<FlexWrapperPropsType>`
  display: flex;
  flex-direction: ${props => props.direction || 'column'};
  justify-content: ${props => props.justify || 'flex-start'};
  align-items: ${props => props.align || 'stretch'};
  flex-wrap: ${props => props.wrap || 'nowrap'};
  height: 100%;
  gap: ${props => props.gap || '0'};
  position: ${props => props.position || 'static'};



  @media ${theme.media.tablet}, ${theme.media.mobile} {
  justify-content: center; // Центрируем элементы по вертикали
  align-items: center; // Центрируем элементы по горизонтали
}

`
