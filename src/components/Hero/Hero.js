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
				{/* <br />
        Give Jeremy Supports */}
			</SectionText>
			{/* <Button onClick={() => window.location = 'https://www.buymeacoffee.com/lf2lf2kkG'}>
        Buy Jeremy A Coffee
      </Button> */}
			<Button onClick={() => window.location = 'https://drive.google.com/file/d/1FooLKh5aTh0BRYN7iv6k8u82xuocsuLA/view?usp=sharing'}>
				My Resume
			</Button>
		</LeftSection>
	</Section >
);

export default Hero;