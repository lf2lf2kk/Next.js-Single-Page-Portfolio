import React from 'react';
import { DiAppstore, DiFirebase, DiGitBranch, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import Link from 'react-dom'
const Technologies = () => (
	<Section id='technologies'>
		{/* <SectionDivider /> */}
		<SectionTitle>Technologies</SectionTitle>
		<SectionText>
			I've been working hard to be a professional full stack developer with a range of technologies
		</SectionText>
		<List>
			<ListItem>
				<DiReact size='3rem' />
				<ListContainer>
					<ListTitle>Front-End</ListTitle>
					<ListParagraph>
						React.Js  <br />
						SCSS  <br />
						HTML / CSS / JQuery <br />
						Next.Js  <br />
						Dart
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<DiGitBranch size='3rem' />
				<ListContainer>
					<ListTitle>Back-End</ListTitle>
					<ListParagraph>
						Node.Js  <br />
						Java  <br />
						C / C++ <br />
						Flutter  <br />
						Python

					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<DiFirebase size='3rem' />
				<ListContainer>
					<ListTitle>Database</ListTitle>
					<ListParagraph>
						MongoDB  <br />
						Firebase  <br />
						AWS  <br />
						Azure <br />
						SQL
					</ListParagraph>
				</ListContainer>
			</ListItem>
		</List>
	</Section>
);

export default Technologies;
