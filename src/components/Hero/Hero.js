import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Jeremy's Portfolio
      </SectionTitle>
      <SectionText>
        Graduated from Computer Science course, I am passionate about programming and developing. You can know me more and check my projects just by clicking on the links.  <br />
        <br />
        Watch Jeremy Doing Magic.
      </SectionText>
      <Button onClick={() => window.location = 'https://youtu.be/xMooUMG5q_g'}>
        Do Some Magic
      </Button>
    </LeftSection>
  </Section >
);

export default Hero;