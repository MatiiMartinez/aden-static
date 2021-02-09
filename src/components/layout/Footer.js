import React from "react"
import styled from "styled-components"

const Footer = () => {
  return (
    <FooterContainer>
      <FirstColumn>
        <LogoImg src={require("../../images/logo-aden-w-lg.png")} alt="logo" />
        <div>
          <SocialsWrapper>
            <SocialLink
              href="https://www.facebook.com/ADENBusinessSchool"
              target="_blank"
            >
              <SocialImg src={require("../../images/facebook.svg")} />
            </SocialLink>
            <SocialLink href="https://twitter.com/ADENBS" target="_blank">
              <SocialImg src={require("../../images/twitter.svg")} />
            </SocialLink>
            <SocialLink
              href="https://www.instagram.com/adenbs/"
              target="_blank"
            >
              <SocialImg src={require("../../images/instagram.svg")} />
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/school/adenbs/"
              target="_blank"
            >
              <SocialImg src={require("../../images/linkedin.svg")} />
            </SocialLink>
            <SocialLink
              href="https://www.youtube.com/user/ADENBusinessSchool"
              target="_blank"
            >
              <SocialImg src={require("../../images/youtube.svg")} />
            </SocialLink>
          </SocialsWrapper>
        </div>
      </FirstColumn>
      <Hr />
      <CopyrightSpan>
        Copyright © ADEN University Campus Panamá
        <br /> UNIVERSITE DE MANAGEMENT DE SUISSE, S.A.
      </CopyrightSpan>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #3e3f3f;
  color: white;
  padding: 4rem 4rem;
  row-gap: 1rem;
`
const FirstColumn = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 700px) {
    justify-content: center;
    flex-direction: column;
  }
`

const LogoImg = styled.img`
  width: 250px;
  height: auto;
`

const SocialsWrapper = styled.div`
  display: flex;
  column-gap: 2rem;

  @media screen and (max-width: 700px) {
    padding: 2em;
  }
`

const SocialLink = styled.a`
  :hover {
    opacity: 0.8;
  }
`

const SocialImg = styled.img`
  width: 35px;
  height: auto;
`

const Hr = styled.hr`
  background-color: #ffffff;
  width: 100%;
`

const CopyrightSpan = styled.span`
  font-size: 0.75rem;
  text-align: center;
`
