import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  max-height: 500px;
  overflow: auto;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.text};
  border-radius: 0 0 10px 10px;
  border: 1px solid ${({ theme }) => theme.colors.cornsilk};
  border-top: none;
  z-index: 1;
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    border-radius: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.cornsilk};
    border-radius: 2px;
  }
`;
