import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";

// Компонент Contact
export const Contact = () => {
  return (
    <StyledContacts>

      <Container>

        {/* Заголовок */}
      <SectionTitle>Contact me</SectionTitle>

      {/* Форма */}
      <StyledForm>
        {/* Лейбл и поле для имени */}
        <StyledLabele>Name</StyledLabele>
        <Field />
        {/* Лейбл и поле для email */}
        <StyledLabele>Email</StyledLabele>
        <Field />
        {/* Лейбл и поле для сообщения */}
        <StyledLabele>Message</StyledLabele>
        <Field as={"textarea"}/>

        {/* кнопка */}
        {/* <Button type={"submit"}>Send</Button> */}

          {/* < ButtonBtn> */}
            <Button type={"submit"}>Send</Button>
          {/* </ ButtonBtn> */}

      </StyledForm>

      </Container>

    </StyledContacts>
  );
};

// секция контакты
const StyledContacts = styled.section`
  /* min-height: 70vh;
  background-color: #c3b2b2; */
`
const StyledForm = styled.form`
  max-width: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 0 auto;

  textarea {
    resize: none;
    height: 160px;
  }

`
const Field = styled.input`
  justify-content: center;
  width: 100%;
  border: 1px solid #e8ecf4;
  border-radius: 8px;
  padding: 5px;
  width: 400px;
  height: 40px;

  &:focus-visible {
    outline: 1px solid #e8ecf4;
  }

  @media ${theme.media.mobile} {
    width: 345px;
  }

`
const StyledLabele = styled.label`
  font-family: "Nunito", sans-serif;
  font-size: 16px;
  gap: 8px;
  color: ${theme.colors.font}
`
