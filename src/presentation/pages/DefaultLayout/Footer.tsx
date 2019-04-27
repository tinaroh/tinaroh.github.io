import * as color from "color";
import * as React from "react";

import styled from "src/presentation/theme/styled-components";
import { Link } from "src/presentation/utility/Link";
import { Paragraph } from "src/presentation/utility/Paragraph";

const InfoSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem;
  color: white;
  background-color: ${props =>
    color(props.theme.palette.primary)
      .darken(0.4)
      .desaturate(0.4)
      .string()};
`;

export const Footer: React.StatelessComponent<{}> = () => (
  <footer>
    <InfoSection>
      <Paragraph>
        Like this site? Feel free to{" "}
        <Link to="https://github.com/tinaroh/tinaroh.github.io/">
          fork it on Github
        </Link>{" "}
        and make it your own.
      </Paragraph>
    </InfoSection>
  </footer>
);
