import * as React from "react";
import styled from "src/presentation/theme/styled-components";
import { PageSection } from "src/presentation/utility/mixins/PageSection";

const HeaderElem = styled.header`
  ${PageSection} display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 0;
  border: 0;
`;

const Logo = styled.span`
  max-width: 140px;
  min-width: 100px;
  flex: 1;
  align-self: stretch;

  background-image: url(/assets/images/logo/logo.png);
  background-size: contain;
  background-repeat: no-repeat;

  margin-right: 10px;
  @media (min-width: ${props => props.theme.mediaQueries.sizes.small}) {
    margin-right: 20px;
  }
`;

export const Header: React.StatelessComponent<{}> = () => (
  <HeaderElem>
    <Logo />
  </HeaderElem>
);
