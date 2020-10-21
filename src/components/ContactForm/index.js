import React from "react";
import { Button } from "../ButtonElement";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
} from "./ContactFormElements";

const ContactForm = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headLine,
  darkText,
  description,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2,
  services,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headLine}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <form style={{ display: "block" }}>
                  <Subtitle darkText={darkText}>
                    <div style={{ marginBottom: "15px" }}>
                      <input
                        type="text"
                        placeHolder="Name"
                        name="name"
                        style={{
                          border: "transparent",
                          background: "#f2f3f7",
                          height: "54px",
                          fontSize: "16px",
                          fontWeight: "400",
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: "15px" }}>
                      <input
                        type="email"
                        placeHolder="Email"
                        name="email"
                        style={{
                          border: "transparent",
                          background: "#f2f3f7",
                          height: "54px",
                          fontSize: "16px",
                          fontWeight: "400",
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: "15px" }}>
                      <input
                        type="text"
                        placeHolder="Subject"
                        name="subject"
                        style={{
                          border: "transparent",
                          background: "#f2f3f7",
                          height: "54px",
                          fontSize: "16px",
                          fontWeight: "400",
                          width: "100%",
                        }}
                      />
                    </div>
                    <div
                      style={{
                        marginBottom: "15px",
                      }}
                    >
                      <textarea
                        style={{
                          border: "transparent",
                          background: "#f2f3f7",
                          height: "130px",
                          fontSize: "16px",
                          fontWeight: "400",
                          width: "100%",
                        }}
                        type="text"
                        placeholder="Message"
                        name="message"
                        cols="30"
                        rows="7"
                      />
                    </div>
                  </Subtitle>
                  {buttonLabel && (
                    <BtnWrap>
                      <Button
                        to="home"
                        primary={primary ? 1 : 0}
                        dark={dark ? 1 : 0}
                        dark2={dark2 ? 1 : 0}
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-80}
                      >
                        {buttonLabel}
                      </Button>
                    </BtnWrap>
                  )}
                </form>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default ContactForm;
