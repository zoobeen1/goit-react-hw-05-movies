import { ButtonStyled } from './Button.styled';

export function Button({ onClick }) {
  return <ButtonStyled onClick={onClick}>Go Back...</ButtonStyled>;
}
