import Card from "../../../../shared/components/layout/Card";
import Row from "../../../../shared/components/layout/Row";
import Heading from "../../../../shared/components/typography/Heading";
import Bold from "../../../../shared/components/typography/Bold";
import Image from "../../../../shared/components/ui/Image";
import styled from "styled-components";
import React from "../../../../assets/images/content/ReactLogo.png";
import NodeJs from "../../../../assets/images/content/NodeJSLogo.webp";
import Express from "../../../../assets/images/content/ExpressLogo.png";
import MongoDB from "../../../../assets/images/content/MongoDBLogo.webp";
import TainoBullet from "../../../../assets/images/ui/PRSun.png";

const sectionItems = [
  {
    id: "main-tech-stack",
    heading: "Main Technology Stack",
    items: [
      {
        id: 0,
        content: "React",
        logo: React,
      },
      {
        id: 1,
        content: "Node.js",
        logo: NodeJs,
      },
      {
        id: 2,
        content: "Express",
        logo: Express,
      },
      {
        id: 3,
        content: "MongoDB",
        logo: MongoDB,
      },
    ],
  },
  {
    id: "third-party",
    heading: "Libraries, Services, and Tools",
    items: [
      { id: 0, content: "React Router" },
      { id: 1, content: "React Hook Form" },
      { id: 2, content: "React Query" },
      { id: 3, content: "React Icons" },
      { id: 4, content: "Embla Carousel" },
      { id: 5, content: "Mongoose" },
      { id: 6, content: "Bcrypt" },
      { id: 7, content: "Google Maps API" },
      { id: 8, content: "Geocoding API" },
      { id: 9, content: "Cloudinary" },
      { id: 10, content: "Resend" },
    ],
  },
  {
    id: "architecture",
    heading: "Architecture and Engineering Focus",
    items: [
      {
        id: 0,
        content:
          "MVC back-end architecture (models, controllers, routes) paired with a feature-driven file structure on the front-end",
      },
      {
        id: 1,
        content:
          "RESTful Express/Mongoose API with full CRUD operations and a React Router structure mirroring the API's CRUD routes",
      },
      {
        id: 2,
        content:
          "Embedded-document schemas enabling single-query reads for 35+ explorations and their 190+ locations",
      },
      {
        id: 3,
        content:
          "React Hook Form validation on the client and server-side validation to keep malformed data out of MongoDB",
      },
      {
        id: 4,
        content:
          "React Query with user-scoped query keys, refetching exploration data when exploration progress updates to maintain a consistent UI for explorers",
      },
      {
        id: 5,
        content:
          "Geocoding API and Google Maps API Integration to power an interactive map with editable markers that are the source of truth for locations, accounting for Puerto Rico's inconsistent postal address system",
      },
      {
        id: 6,
        content:
          "Server-signed image uploads from the client to Cloudinary to authenticate uploads while keeping image files out of the server's memory for embedded documents",
      },
      {
        id: 7,
        content:
          "JWT authentication with bcrypt password hashing and httpOnly, secure, SameSite cookies, with protected routes on both the API and React Router",
      },
      {
        id: 8,
        content:
          "Role-based UI handled by React Context API that globally exposes user role via auth provider",
      },
      {
        id: 9,
        content:
          "Render cold-start fix: a /health wake-up check upon app load that disables login/signup until the server responds, preventing bad auth requests",
      },
    ],
  },
];

const StyledTechStackSection = styled(Row)`
  @media (max-width: 1000px) {
    h4 {
      font-size: var(--font-size-md);
    }
  }

  @media (max-width: 450px) {
    h4 {
      line-height: var(--line-height-md);
    }
  }
`;
export default function TechStackSection() {
  return (
    <StyledTechStackSection>
      <Row>
        <Heading as="h4" $color="var(--color-red-300)">
          {sectionItems[0].heading}
        </Heading>

        <Row
          $direction="horizontal"
          $wrap="wrap"
          $align="space-evenly"
          $gap="var(--gap-md)"
        >
          {sectionItems[0].items.map((item) => (
            <Card
              key={item.id}
              $cardColor="var(--color-light-0)"
              $cardShadow="outsetSM"
              $gap="var(--gap-sm)"
              $align="center"
            >
              <Image src={item.logo} $width="4.4rem" $height="5rem" />
              <Bold $color="var(--color-dark-200)">{item.content}</Bold>
            </Card>
          ))}
        </Row>

        {sectionItems.slice(1).map((section) => (
          <Row key={section.id}>
            <Heading as="h4" $color="var(--color-red-300)">
              {section.heading}
            </Heading>
            <Card $cardColor="var(--color-light-0)">
              <Row $gap="var(--gap-md)">
                {section.items.map((item) => (
                  <Row
                    key={item.id}
                    $direction="horizontal"
                    $align="flex-start"
                    $gap="var(--gap-md)"
                  >
                    <Image src={TainoBullet} $width="25px" />
                    {item.content}
                  </Row>
                ))}
              </Row>
            </Card>
          </Row>
        ))}
      </Row>
    </StyledTechStackSection>
  );
}
