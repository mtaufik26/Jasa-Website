import React from "react";
import SectionWrapper from "../../components/layout/SectionWrapper";
import Container from "../../components/layout/Container";
import KorporatShowcase from "./KorporatShowcase";
import AgencyShowcase from "./AgencyShowcase";

const Showcase = ({ index = 0, initialIndex = 0 }) => {
  return (
    <SectionWrapper>
      <Container className="py-20 sm:py-24 lg:py-32">
        {index === 0 && <KorporatShowcase initialIndex={initialIndex} />}
        {index === 1 && <AgencyShowcase />}
      </Container>
    </SectionWrapper>
  );
};

export default Showcase;