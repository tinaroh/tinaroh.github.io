import NukaCarousel from "nuka-carousel";
import * as React from "react";

import styled, { css } from "src/presentation/theme/styled-components";
import { H2, H3, H4 } from "src/presentation/utility/Heading";
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

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import img4 from "public/assets/images/art/aliveaoi.jpg";
import img1 from "public/assets/images/art/cartoonkid.png";
import img3 from "public/assets/images/art/drrrcelty.jpg";
import img2 from "public/assets/images/art/pokemongreen.jpg";
import { Link } from "src/presentation/utility/Link";
import { TextBlockStyle } from "src/presentation/utility/mixins/text/TextBlockStyle";

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
    displayText: "contact",
    to: "#contact",
    kind: NavEntryKind.LINK
  }
];

const iconEntries: INavBarProps["icons"] = [
  {
    icon: faLinkedin,
    to: "https://www.linkedin.com/in/tinaroh"
  },
  {
    icon: faGithub,
    to: "https://github.com/tinaroh"
  }
];

const AboutMeOne = styled(H3)`
  margin-top: 2rem;
  ${TextBlockStyle};
`;
const AboutMeTwo = styled(H3)`
  ${TextBlockStyle};
`;
const AboutMeThree = styled(H3)`
  margin-bottom: 3rem;
`;

const PageSectionTitle = styled(H2)`
  color: ${props => props.theme.palette.secondary};
`;
const SectionTitle = styled(H3)`
  color: ${props => props.theme.palette.primary};
  margin-top: 2rem;
`;
const SectionSubtitle = styled(H4)`
  color: ${props => props.theme.palette.secondary};
  margin: 0.5rem 0;
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
  "El Psy Congroo"
)}`;
const renderBottomCenterControls = () => <></>;
export class HomePage extends React.Component<{}> {
  public render() {
    return (
      <>
        <NavBar entries={pageEntries} icons={iconEntries} />
        <BannerSection />

        <PageBody>
          <AboutMeOne>Living in the now.</AboutMeOne>
          <AboutMeTwo>
            Striving to become the best version of me, one day at a time.
          </AboutMeTwo>
          <AboutMeThree>
            Trying to make the world better while I'm at it.
          </AboutMeThree>

          <PageSectionTitle id="work">work</PageSectionTitle>
          <Paragraph>
            These are my broader reflections on my work experiences. Specifics
            on what I worked on can be found on my{" "}
            <Link to="https://www.linkedin.com/in/tinaroh">LinkedIn</Link>.
          </Paragraph>

          <SectionTitle>
            Raha - <Link to="https://raha.app">https://raha.app</Link>
          </SectionTitle>
          <SectionSubtitle>Co-founder</SectionSubtitle>
          <Paragraph>
            I joined a team of <Link to="https://rahulgi.com">very</Link>{" "}
            <Link to="https://osdiab.github.io">cool</Link>{" "}
            <Link to="https://www.linkedin.com/in/markulr">people</Link> to try
            to make an idealistic vision of a digital universal basic income
            real. I learned more about how the world operates and started to
            hone my naive optimism into a more educated one while trying not to
            fall into cynicism. I increased my knowledge about history, economy,
            politics, cryptocurrency, startups, marketplaces, and people. I
            started working in React Native and TypeScript. I also fulfilled a
            dream to live in Japan along the way.
          </Paragraph>

          <SectionTitle>Snapchat</SectionTitle>
          <SectionSubtitle>Software Engineer</SectionSubtitle>
          <Paragraph>
            I joined Snapchat as an intern in 2013 to a three-person Android
            team supporting millions of users. After experiencing the thrill and
            terror of shipping big features to many users, I hopped onto the
            rocket ship full-time. I learned about the joys and pains of
            creating a product for millions of users and hundreds (if not
            thousands) of devices. I learned to dig deep, face bizarre and tough
            problems, and still come out with solutions, even if imperfect. I
            worked with talented people from many departments and backgrounds. I
            saw how design risks paid off. I experienced how a company and all
            its aspects scale, planned or not; sometimes gracefully, sometimes
            not. I worked and adapted to change at each scale from a private
            startup of 35 to a public company of thousands.
          </Paragraph>

          <SectionTitle>Google</SectionTitle>
          <SectionSubtitle>Software Engineering Intern</SectionSubtitle>
          <Paragraph>
            My first software engineering internship came through the
            Engineering Practicum program. I developed my confidence in coding
            through the mentorship of amazing mentors and inspirational peers. I
            learned the importance of testing and code quality, and committed my
            first line of open source code. I thrived in a strong team culture
            by working with an incredibly disciplined but fun team, many of whom
            came to Google from startups. I experienced the world-class tools,
            processes, and culture, though I didn't appreciate them enough at
            the time to seek out how they were built.
          </Paragraph>

          <PageSectionTitle id="code">code</PageSectionTitle>
          <Paragraph>
            Java. Kotlin. Android. TypeScript. React Native. React.
          </Paragraph>

          <PageSectionTitle id="art">art</PageSectionTitle>
          <Paragraph>
            I've loved to draw since forever (primarily anime and cartoons) and
            I'm finally getting back into it.
          </Paragraph>
          <Carousel
            heightMode="first"
            width="500"
            wrapAround={true}
            renderBottomCenterControls={renderBottomCenterControls}
          >
            <img src={img1} alt="Cartoon drawing" />
            <img src={img2} alt="Pokemon Fanart - Green on Pigeot" />
            <img src={img3} alt="Durarara!! Fanart - Celty" />
            <img src={img4} alt="Alive Fanart - Aoi Tezuka" />
          </Carousel>
        </PageBody>
        <ContactSection id="contact">
          <ContactSectionTitle id="contact">contact</ContactSectionTitle>
          <Paragraph>
            email at <Link to={mailtoLink}>me@tinaroh.com</Link>.
          </Paragraph>
        </ContactSection>
      </>
    );
  }
}
