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
        Graduated from Computer Science course in the University of Melbourne, I am passionate about programming and web & mobile developing. Check my projects below and see the magics.  <br />
        <br />
        Give Jeremy Supports
      </SectionText>
      <Button onClick={() => window.location = 'https://www.buymeacoffee.com/lf2lf2kkG'}>
        Buy Jeremy A Coffee
      </Button>
    </LeftSection>
  </Section >
);

export default Hero;