import NukaCarousel from "nuka-carousel";
import * as React from "react";

import styled, { css } from "src/presentation/theme/styled-components";
import { H2, H3 } from "src/presentation/utility/Heading";
import {
  INavBarProps,
  NavBar,
  NavEntryKind
} from "src/presentation/utility/layout/NavBar";
import { PageBody } from "src/presentation/utility/layout/PageBody";
import {
  PageSectionContentArea,
  PageSectionPadding
} from "src/presentation/utility/mixins/PageSection";
import { PageSection } from "src/presentation/utility/mixins/PageSection";
import { Paragraph } from "src/presentation/utility/Paragraph";

import logo from "public/assets/images/logo/logo.png";

import img4 from "public/assets/images/art/aliveaoi.jpg";
import img1 from "public/assets/images/art/cartoonkid.png";
import img3 from "public/assets/images/art/drrrcelty.jpg";
import img2 from "public/assets/images/art/pokemongreen.jpg";
import { Link } from "react-router-dom";

const pageEntries: INavBarProps["entries"] = [
  {
    displayText: "work",
    to: "#work",
    kind: NavEntryKind.LINK
  },
  {
    displayText: "code",
    to: "#code",
    kind: NavEntryKind.LINK
  },
  {
    displayText: "art",
    to: "#art",
    kind: NavEntryKind.LINK
  },
  {
    displayText: "blog",
    to: "#blog",
    kind: NavEntryKind.LINK
  },
  {
    displayText: "contact",
    to: "#contact",
    kind: NavEntryKind.LINK
  }
];

const PageSectionTitle = styled(H2)`
  color: ${props => props.theme.palette.secondary};
`;
const SectionSubtitle = styled(H3)`
  color: ${props => props.theme.palette.primary};
`;

const BannerSection = styled.section`
  ${PageSectionPadding};

  position: relative;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  /* min-width: 80%; */
  min-height: 200px;

  /* padding: 200px; */

  :before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 0;
  }

  > * {
    ${PageSectionContentArea};
    position: relative;
    z-index: 1;
  }
`;

const PlaceStyles = css`
  display: block;
  width: 550px;
  max-width: 100%;
  margin: 0 auto;
  margin-bottom: 1.2rem;
`;
const Carousel = styled(NukaCarousel)`
  ${PlaceStyles};
`;

const ContactSection = styled.section`
  ${PageSection};
  padding-bottom: 2rem;
  align-self: flex-start;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (min-width: ${props => props.theme.mediaQueries.sizes.small}) {
    align-items: flex-start;
    text-align: left;
  }
`;
const ContactSectionTitle = styled(H2)`
  color: ${props => props.theme.palette.secondary};
`;

const mailtoLink = `mailto:me@tinaroh.com?subject=${encodeURI(
  "Saying hi from the Internet!!"
)}`;
const renderBottomCenterControls = () => <></>;
export class HomePage extends React.Component<{}> {
  public render() {
    return (
      <>
        <NavBar entries={pageEntries} />
        <BannerSection />

        <PageBody>
          <PageSectionTitle id="work">work</PageSectionTitle>
          <SectionSubtitle>work work work</SectionSubtitle>
          <Paragraph>work experience here</Paragraph>

          <PageSectionTitle id="code">code</PageSectionTitle>
          <SectionSubtitle>coding projects</SectionSubtitle>

          <PageSectionTitle id="art">art</PageSectionTitle>
          <SectionSubtitle>drawing and other things</SectionSubtitle>
          <Carousel
            heightMode="first"
            autoplay={true}
            wrapAround={true}
            renderBottomCenterControls={renderBottomCenterControls}
          >
            <img src={img1} alt="Cartoon drawing" />
            <img src={img2} alt="Pokemon Fanart - Green on Pigeot" />
            <img src={img3} alt="Durarara!! Fanart - Celty" />
            <img src={img4} alt="Alive Fanart - Aoi Tezuka" />
          </Carousel>
          <PageSectionTitle id="blog">blog</PageSectionTitle>
          <SectionSubtitle>link out to blog</SectionSubtitle>
        </PageBody>
        <ContactSection id="contact">
          <ContactSectionTitle id="contact">Get in touch</ContactSectionTitle>
          <Paragraph>
            email at <Link to={mailtoLink}>me@tinaroh.com</Link>,
          </Paragraph>
        </ContactSection>
      </>
    );
  }
}
