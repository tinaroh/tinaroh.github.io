import * as React from "react";

import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "src/presentation/theme/styled-components";
import { Button, ButtonTargetKind } from "src/presentation/utility/Button";
import { Link } from "src/presentation/utility/Link";
import { PageSection } from "src/presentation/utility/mixins/PageSection";

export enum NavEntryKind {
  BUTTON = "BUTTON",
  LINK = "LINK"
}

export interface INavBarEntry {
  displayText: string;
  to: string;
  kind: NavEntryKind;
}

export interface INavBarIcons {
  icon: IconProp;
  to: string;
}

export interface INavBarProps {
  entries: INavBarEntry[];
  icons: INavBarIcons[];
}

const NavElem = styled.nav`
  ${PageSection};
`;

const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  li {
    margin-bottom: 1.2rem;
  }

  li:not(:last-child) {
    margin-right: 20px;
  }
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const IconList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const NavBar: React.StatelessComponent<INavBarProps> = ({
  entries,
  icons
}) => {
  return (
    <NavElem>
      <NavContainer>
        <NavList>
          {entries.map(({ displayText, to, kind }, index) => (
            <li key={index}>
              {kind === NavEntryKind.LINK ? (
                <Link to={to}>{displayText}</Link>
              ) : (
                <Button onClick={{ kind: ButtonTargetKind.LINK, action: to }}>
                  {displayText}
                </Button>
              )}
            </li>
          ))}
        </NavList>
        <IconList>
          {icons.map(({ icon, to }, index) => (
            <li key={index}>
              <Link to={to}>
                <FontAwesomeIcon icon={icon} />
              </Link>
            </li>
          ))}
        </IconList>
      </NavContainer>
    </NavElem>
  );
};
