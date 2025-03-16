import styled from "styled-components";
import { theme } from "../styles/Theme";

export const Container = styled.div`
  max-width: 1440px;
  padding: 0px 120px;
  width: 100%;
  margin: 0 auto;
  outline: 1px solid blue;
  background-color: #F9FAFF;

  @media ${theme.media.mobile} {
    /* для мобилок */
  padding: 0 15px;

  }

`
