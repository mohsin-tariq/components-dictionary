import React from 'react';
import styled, { withTheme } from 'styled-components';

interface HeaderProps {
    children: string,
    theme: any
}

const StyledButton = withTheme(styled.button`
 color: ${({ theme }) => theme.button.color}
`);


const Button =  (props: HeaderProps) => {
    const {children} = props;
    return <StyledButton {...props}>{children}</StyledButton>
}

export default withTheme(Button);