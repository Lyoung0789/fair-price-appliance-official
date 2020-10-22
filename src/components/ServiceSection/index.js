import React from "react";
// Icons from svgrepo.com/vectors
import WashingMachine from "../../images/washing-machine.svg";
import Microwave from "../../images/microwave.svg";
import Stove from "../../images/stove.svg";
import DishWasher from "../../images/dishwasher.svg";
import Fridge from "../../images/fridge.svg";
import Dryer from "../../images/dryer.svg";

import {
  ServicesContainer,
  ServicesWrapper,
  ServicesH1,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServiceElements";

function index() {
  return (
    <ServicesContainer>
      <ServicesH1>Services</ServicesH1>

      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={WashingMachine} />
          <ServicesH2>Washing Machine Repair</ServicesH2>
          <ServicesP>More info</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Dryer} />
          <ServicesH2>Dryer Repair</ServicesH2>
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
        <ServicesCard>
          <ServicesIcon src={Fridge} />
          <ServicesH2>Refrigerator Repair</ServicesH2>
          <ServicesP>More info</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
}

export default index;
