import React from "react";
import Icon1 from "../../images/five-star.svg";
import {
  ServicesContainer,
  ServicesWrapper,
  //   ServicesH1,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServiceElements";

function index() {
  return (
    <ServicesContainer>
      {/* <ServicesH1>Services</ServicesH1> */}
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Title of first review</ServicesH2>
          <ServicesP>More info</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Title of second review</ServicesH2>
          <ServicesP>More info</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Title of third review</ServicesH2>
          <ServicesP>More info</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Title of fourth review</ServicesH2>
          <ServicesP>More info</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
}

export default index;
