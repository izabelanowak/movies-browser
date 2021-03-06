import { Link } from "react-router-dom";
import styled from "styled-components";

export const MiniWrapper = styled(Link)`
  display: flex;
  flex-shrink: 0;
  padding: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.cornsilk};
  font-weight: 500;
  font-size: 22px;
  line-height: 130%;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.woodsmoke};
  align-items: center;
  :hover {
    background-color: ${({ theme }) => theme.colors.whisper};
  }
`;

export const MiniImage = styled.img`
  display: block;
  border-radius: 5px;
  flex-shrink: 0;
  object-fit: cover;
  object-position: top;
  margin-bottom: 16px;
  height: 140px;
  margin-bottom: unset;
  margin-right: 16px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    height: 100px;
  }
`;

export const MiniText = styled.p`
  margin-left: 24px;
  font-size: 20px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 12px;
    margin: 8px;
    line-height: 1.2;
  }
`;
