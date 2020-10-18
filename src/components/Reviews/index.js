import React from "react";
import Icon1 from "../../images/five-star.svg";
// import Icon2 from "../../images/svg-2.svg";
// import Icon3 from "../../images/svg-3.svg";
import {
  ReviewsContainer,
  ReviewsH1,
  ReviewsWrapper,
  ReviewsCard,
  ReviewsIcon,
  ReviewsH2,
  ReviewsP,
} from "./ReviewsElements";

function Reviews() {
  return (
    <>
      <ReviewsContainer id="reviews">
        <ReviewsH1>Our Reviews</ReviewsH1>
        <ReviewsWrapper>
          <ReviewsCard>
            <ReviewsIcon src={Icon1} />
            <ReviewsH2>Title of Review</ReviewsH2>
            <ReviewsP>This is what happens when you do something bra</ReviewsP>
          </ReviewsCard>
          <ReviewsCard>
            <ReviewsIcon src={Icon1} />
            <ReviewsH2>Title of Review 2</ReviewsH2>
            <ReviewsP>This is what happens when you do something bra</ReviewsP>
          </ReviewsCard>
          <ReviewsCard>
            <ReviewsIcon src={Icon1} />
            <ReviewsH2>Title of Review 3</ReviewsH2>
            <ReviewsP>This is what happens when you do something bra</ReviewsP>
          </ReviewsCard>
        </ReviewsWrapper>
      </ReviewsContainer>
    </>
  );
}

export default Reviews;
