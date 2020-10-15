import React from "react";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWraper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
} from "./FooterElements";

function Footer() {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWraper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/">Services </FooterLink>
              <FooterLink to="/">Atest</FooterLink>
              <FooterLink to="/">test</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/">Services </FooterLink>
              <FooterLink to="/">Atest</FooterLink>
              <FooterLink to="/">test</FooterLink>
            </FooterLinkItems>
          </FooterLinksWraper>
          <FooterLinksWraper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/">Services </FooterLink>
              <FooterLink to="/">Atest</FooterLink>
              <FooterLink to="/">test</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/">Services </FooterLink>
              <FooterLink to="/">Atest</FooterLink>
              <FooterLink to="/">test</FooterLink>
            </FooterLinkItems>
          </FooterLinksWraper>
        </FooterLinksContainer>
      </FooterWrap>
    </FooterContainer>
  );
}

export default Footer;
