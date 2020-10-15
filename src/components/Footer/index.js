import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWraper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
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
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">FairpriceAppliance</SocialLogo>
            <WebsiteRights>
              FairPriceAppliance © {new Date().getFullYear()} All Rights
              Reserved
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
}

export default Footer;
