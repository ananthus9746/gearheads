import React from "react";

import Services from "../components/Services/ServicesSection";
import Cta from "../components/Cta/Cta";
import CommonPageHero from "../components/CommonPageHero/CommonPageHero";
import ServicesSectionTwo from "../components/Services/ServicesSectionTwo";

const Service = () => {
  return (
    <>
      <CommonPageHero title={"Services"} />
      <ServicesSectionTwo />
      {/* <Cta /> */}
    </>
  );
};

export default Service;
