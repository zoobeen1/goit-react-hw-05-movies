import { ButtonStyled } from './Button.styled';

export function Button({ onClick }) {
  return (
    <ButtonStyled type="button" onClick={onClick}>
      Go Back...
    </ButtonStyled>
  );
}
