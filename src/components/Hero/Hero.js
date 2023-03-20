import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
	<Section row nopadding>
		<LeftSection>
			<SectionTitle main center>
				Creativity - My Superpower
			</SectionTitle>
			<SectionText>
				Graduated from Computer Science majoy in the University of Melbourne, I am passionate about programming and web &amp; mobile developing. Check my projects below and have fun.  <br />
			</SectionText>
			{/* <a href='/Resume.pdf' download={"Jeremy's Resume"}>
				<Button>
					My Resume
				</Button>
			</a> */}

		</LeftSection>
	</Section >
);

export default Hero;