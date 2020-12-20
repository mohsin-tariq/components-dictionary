import styled, { withTheme } from 'styled-components';

export const ProgressSkin =  withTheme(styled.div`
  height: ${({ theme }) => theme.height};
  width: ${({ theme }) => theme.width};
  background-color: ${({ theme }) => theme.backgroundColor};
`);

export const ProgressCovered = withTheme(styled.div`
  height: ${({ theme }) => theme.height};
  background-color: ${({ theme }) => theme.backgroundColor};
  width: ${({ width }) => width}%;
`);

export const Indicator = withTheme(styled.div`
  display: ${({ theme }) => theme.display};
  position: ${({ theme }) => theme.position};
  z-index: ${({ theme }) => theme.zIndex};
  margin-top: ${({ theme }) => theme.marginTop};
  margin-left: ${({ theme }) => theme.marginLeft};
  width: ${({ theme }) => theme.width};
  height: ${({ theme }) => theme.height};
  border: ${({ theme }) => theme.border};
  border-top-color: ${({ theme }) => theme.borderTopColor};
  border-right-color: ${({ theme }) => theme.borderRightColor};
  transform: ${({ theme }) => theme.transform};
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.backgroundColor};
  box-shadow: ${({ theme }) => theme.boxShadow};
  cursor:${({ theme }) => theme.cursor};
`);

export const DraggablePoint = withTheme(styled.div`
  float: left; margin: 0 10px 10px 0;
  position: relative;
  left: ${({ left }) => left}%;
`);


