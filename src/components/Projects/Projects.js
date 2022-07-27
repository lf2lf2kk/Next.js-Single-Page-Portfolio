import React, { useEffect, useState } from 'react';
import Axios from "axios";

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => {

	return (<Section id="projects">
		{/* <SectionDivider /> */}
		<SectionTitle>Projects</SectionTitle>
		<GridContainer>
			{projects.map(({ id, image, title, tags, description, source, visit }) => (
				<BlogCard key={id}>
					<Img src={image} />
					<TitleContent>
						<HeaderThree>{title}</HeaderThree>
						<Hr />
					</TitleContent>
					<CardInfo>{description}</CardInfo>
					<div>
						{/* <TitleContent> Full Stack</TitleContent> */}
						<TagList>
							{tags.map((tag, i) => (
								< Tag key={i}>{tag}</Tag>
							))}
						</TagList>
					</div>
					<UtilityList>
						{source && <ExternalLinks href={source}>Code in GitHub</ExternalLinks>}
						<ExternalLinks href={visit}>Website</ExternalLinks>
					</UtilityList>
				</BlogCard>
			))}
		</GridContainer>
	</Section >)

};

export default Projects;