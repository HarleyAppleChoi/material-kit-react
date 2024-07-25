import React from 'react';
import MKBox from "components/MKBox";
import Grid from "@mui/material/Grid";
import SkillCard from 'components/SkillCard';

const skillsData = [
  {
    icon: 'calendar_today', // Replace with Material Icons name
    title: 'Frontend',
    skills: `Design - Figma
Implenment - React /Typescript /Material UI `,
  },
  {
    icon: 'people',
    title: 'Backend',
    skills: `Golang / Javascript/ Typescript / Node.js
Postgresql/ Hasura/ Graphql`,
  },
  {
    icon: 'build',
    title: 'Infra',
    skills: `Linux administration
Grafana
Docker / Kubernates`,
  },
  {
    icon: 'leaderboard',
    title: 'Project Management',
    skills: `Jira / Confluence
Github / Git
Experience in Open source / Blockchain project`,
  },
];

const SkillsGrid = () => {
  return (
    <MKBox py={6} px={11}>
      <Grid container item justifyContent="center" columnSpacing={{ xs: 1, sm: 2, md: 3 }}> 
        {skillsData.map((skill, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <SkillCard icon={skill.icon} title={skill.title} skills={skill.skills} />
          </Grid>
        ))}
      </Grid>
    </MKBox>
  );
};

export default SkillsGrid;