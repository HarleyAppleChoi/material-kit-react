/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import { Card, CardMedia } from '@mui/material';


// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

import profilePic from "assets/images/profile-pic.jpg";
function Information() {
  const aboutMeText = "Experienced full stack software developer with 3 years of expertise. Currently seeking opportunity for full time QA Engineer. Proven track record of delivering exceptional service with meticulous attention to detail. Motivated to contribute quality service in the fast changing technology industry.";

  const attributes = [
    {
      icon: 'school',
      title: 'First Honour Grad',
      description: 'BSc Computer Science with a year in Industry at Swansea University'
    },
    {
      icon: 'music_note',
      title: 'Piano Expert',
      description: 'Trinity College London - Level 4 Diploma in Music • Performance (ATCL) in Piano Recital'
    },
    {
      icon: 'volunteer_activism',
      title: 'Volunteering',
      description: 'Teaching Crochet and helper at various activities at Hong Konger CIC Cardiff'
    },
  ];

  return (
    <MKBox py={6} px={2}>
    <Grid container spacing={4} alignItems="center">
      <Grid item xs={12} md={5}>
        <Card raised
  sx={{
    margin: "0",
    padding: "0",
    borderRadius: 10
  }}>
          <CardMedia
            component="img"
            alt="Profile Image"
            height="auto"
            image={profilePic}
            title="Profile Image"
            sx={{ borderRadius: 10, margin: 0 }} 

          />
        </Card>
      </Grid>
      <Grid item xs={12} md={7}>
        <MKTypography variant="h3" component="h2" fontWeight="bold" gutterBottom>
          About me
        </MKTypography>
        <MKTypography variant="body1" color="textSecondary" paragraph>
          {aboutMeText}
        </MKTypography>
        <Grid container spacing={2} mt={2}>
          {attributes.map((attribute, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <MKBox textAlign="center">
                <MKBox
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  width="50px"
                  height="50px"
                  borderRadius="50%"
                  bgcolor="error.main"
                  color="primary"
                  mx="auto"
                  mb={2}
                >
                  <Icon fontSize="large">{attribute.icon}</Icon>
                </MKBox>
                <MKTypography variant="h6" component="h4" fontWeight="bold">
                  {attribute.title}
                </MKTypography>
                <MKTypography variant="body2" color="textSecondary">
                  {attribute.description}
                </MKTypography>
              </MKBox>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  </MKBox>
  );
}

export default Information;
