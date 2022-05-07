import React from 'react';
import styled from 'styled-components';

interface StyledHeadingProps {
  size?: string;
  color?: string;
  weight?: string;
}

const Heading = styled.p<StyledHeadingProps>`
  font-family: 'Roboto';
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  color: ${(props) => props.color};
`;

interface TypographyProps {
  children: React.ReactNode;
  variant: 'h1' | 'h2' | 'h3' | 'p'| 'p_custom';
}

const Typography = (props: TypographyProps) => {
  const { variant = 'h1' } = props;

  let fontsize, color, weight = '';

  if (variant === 'h1') {
    fontsize = '100px';
    color = '#4f4d53'
    weight = '900'
  }

  if (variant === 'h2') {
    fontsize = '64px';
    color = '#e8be02'
    weight = '900'
  }

  if (variant === 'h3') {
    fontsize = '20px';
    color = '#e8be02'
    weight = '900'
  }

  if (variant === 'p') {
    fontsize = '20px';
    color = '#4f4d53'
    weight = '400'
  }
  if (variant === 'p_custom') {
    fontsize = '20px';
    color = '#e8be02'
    weight = '400'
  }

  return <Heading size={fontsize} color={color} weight={weight} >{props.children}</Heading>;
};

export default Typography;
