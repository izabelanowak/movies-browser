import styled from "styled-components";

export const NavigationContainer = styled.div`
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.black};
  margin: 0;
  padding: 24px 16px;
  min-height: 94px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    padding: 18px 12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    padding: 12px 8px;;
  }
`;

export const NavigationWrapper = styled.nav`
  max-width: 1368px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    margin-bottom: 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    margin-bottom: 8px;
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    justify-content: center;
  }
`;
