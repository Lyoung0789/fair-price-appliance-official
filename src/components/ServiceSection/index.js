import React from "react";
import WashingMachine from "../../images/washing-machine.svg";
import Microwave from "../../images/microwave.svg";
import Stove from "../../images/stove.svg";
import DishWasher from "../../images/dishwasher.svg";
import Icon1 from "../../images/svg-1.svg";
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
          <ServicesIcon src={WashingMachine} />
          <ServicesH2>Washing Machine and Dryer Repair</ServicesH2>
          <ServicesP>More info</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Microwave} />
          <ServicesH2>Microwave Repair</ServicesH2>
          <ServicesP>More info</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Stove} />
          <ServicesH2>Stove and Oven Repair</ServicesH2>
          <ServicesP>More info</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={DishWasher} />
          <ServicesH2>Dishwasher Repair</ServicesH2>
          <ServicesP>More info</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
}

export default index;
