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
                  <div style={{ marginBottom: "15px" }}>
                    <input
                      type="text"
                      placeholder="Name"
                      name="name"
                      style={{
                        padding: "10px",
                        border: "transparent",
                        background: "#f2f3f7",
                        height: "54px",
                        fontSize: "16px",
                        fontWeight: "400",
                        width: "90%",
                      }}
                    />
                  </div>
                  <div style={{ marginBottom: "15px" }}>
                    <input
                      type="email"
                      placeholder="Email"
                      name="email"
                      style={{
                        padding: "10px",
                        border: "transparent",
                        background: "#f2f3f7",
                        height: "54px",
                        fontSize: "16px",
                        fontWeight: "400",
                        width: "90%",
                      }}
                    />
                  </div>
                  <div style={{ marginBottom: "15px" }}>
                    <input
                      type="text"
                      placeholder="Subject"
                      name="subject"
                      style={{
                        padding: "10px",
                        border: "transparent",
                        background: "#f2f3f7",
                        height: "54px",
                        fontSize: "16px",
                        fontWeight: "400",
                        width: "90%",
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
                        padding: "10px",
                        border: "transparent",
                        background: "#f2f3f7",
                        height: "130px",
                        fontSize: "16px",
                        fontWeight: "400",
                        width: "90%",
                      }}
                      type="text"
                      placeholder="Message"
                      name="message"
                      cols="30"
                      rows="7"
                    />
                  </div>

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
