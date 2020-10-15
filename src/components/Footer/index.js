import React from "react";

function Footer() {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWraper>
            <FooterLinkItems>
              <FooterLinkTitle>
                <FooterLink to="/">About us</FooterLink>
                <FooterLink to="/">Services </FooterLink>
                <FooterLink to="/">About us</FooterLink>
                <FooterLink to="/">About us</FooterLink>
              </FooterLinkTitle>
            </FooterLinkItems>
          </FooterLinksWraper>
        </FooterLinksContainer>
      </FooterWrap>
    </FooterContainer>
  );
}

export default Footer;
