import styled from "styled-components";
import searchIcon from "../../assets/searchIcon.svg";

export const SearchWrapper = styled.form`
  position: relative;
  width: 100%;
  max-width: 432px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    max-width: unset;
  }
`;

export const Input = styled.input`
  min-height: 48px;
  width: 100%;
  max-width: 432px;
  padding: 4px 64px;
  border: 1px solid ${({ theme }) => theme.colors.cornsilk};
  border-radius: 24px;
  background: ${({ theme }) => theme.colors.white};

  &:focus {
    outline: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    max-width: unset;
    min-height: unset;
  }

  // @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
  //   min-height: 44px;
  // }
`;

export const StyledButtonSearch = styled.button`
  position: absolute;
  width: 24px;
  height: 24px;
  left: 24px;
  top: 50%;
  background-image: url(${searchIcon});
  background-repeat: no-repeat;
  background-size: 24px;
  background-color: transparent;
  background-position: center;
  border: none;
  transform: translateY(-50%);
  cursor: pointer;
`;
