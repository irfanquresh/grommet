import styled, { css } from 'styled-components';

const primaryStyles = css`
  color: ${props => props.theme.brand.link.color};
  text-decoration: ${props => props.theme.brand.link.textDecoration};
  cursor: pointer;
  &.plain
  &.grommet-ux-button {
    text-decoration: none;

    &:hover {
      text-decoration: none;
    }
  }

  &:visited {
    color: ${props => props.theme.brand.link.color};
  }

  &.active {
    color: ${props => props.theme.colors.text};
  }

  // While it's tempting to use :not(.anchor--disabled) here, that makes it
  // messier for things like Menu to adjust styling in its context.
  &:hover {
    color: $link-hover-color;
    text-decoration: underline;
  }
`;

const primaryStyles = css`

`;

export default styled.a`
  ${primaryStyles}
  ${props.primary && `${primaryStyles}`}
`;