import React from 'react';
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Discord</LinkTitle>
          <LinkItem href='https://discord.com/'>Jeremy#5806</LinkItem>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:lf2lf2kk@gmail.com'>lf2lf2kk@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Imagination is power</Slogan>
        </CompanyContainer>
        <SocialIconsContainer>
          <SocialIcons href='https://github.com/FuShengK'>
            <AiFillGithub size='3rem' />
          </SocialIcons>
          <SocialIcons href='https://www.linkedin.com/in/fu-sheng-huang-212827171/'>
            <AiFillLinkedin size='3rem' />
          </SocialIcons>
          {/* <SocialIcons href='https://www.facebook.com/fusheng902/'>
            <AiFillFacebook size='3rem' />
          </SocialIcons> */}
        </SocialIconsContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
