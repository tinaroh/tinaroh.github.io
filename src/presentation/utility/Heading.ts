import styled, { css } from "src/presentation/theme/styled-components";
import { TextBlockStyle } from "src/presentation/utility/mixins/text/TextBlockStyle";
import { Paragraph } from "src/presentation/utility/Paragraph";

const HeaderMixin = css`
  font-weight: 400;
`;

export const H1 = styled.h1`
  font-size: 3.5rem;
  ${HeaderMixin};
  ${TextBlockStyle};
`;
export const H2 = styled.h2`
  font-family: ${props => props.theme.headerText.fontFamily},
    ${props => props.theme.headerText.fontFallback};
  font-size: 1.5rem;
  ${HeaderMixin};
  ${TextBlockStyle};
`;
export const H3 = styled.h3`
  font-family: ${props => props.theme.headerText.fontFamily},
    ${props => props.theme.headerText.fontFallback};
  font-size: 1.2rem;
  ${HeaderMixin};
`;

export const H4 = styled(Paragraph)`
  font-size: 1.1rem;
  color: ${props => props.theme.palette.secondary};
  ${HeaderMixin};
`;
export const H5 = styled(Paragraph)`
  font-size: 1.4rem;
  ${HeaderMixin};
`;
