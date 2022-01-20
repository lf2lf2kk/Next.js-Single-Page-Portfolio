import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';
import { AcomplishmentData } from '../../constants/constants';

const showNumber = (num) => {
  if (num >= 10) return <BoxNum>{num}+</BoxNum>
  return <BoxNum>{num}</BoxNum>
};

const Acomplishments = () => (
  <Section>
    <SectionTitle>Acomplishments</SectionTitle>
    <Boxes>
      {AcomplishmentData.map((card, index) => (
        <Box key={index}>
          {showNumber(card.number)}
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
