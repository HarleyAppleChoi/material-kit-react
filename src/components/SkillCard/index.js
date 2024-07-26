  import PropTypes from "prop-types";

// react-router-dom components
import MKTypography from "components/MKTypography";
import MKBox from "components/MKBox";

import Icon from "@mui/material/Icon"; // Use appropriate icon component from Material Kit 2
import Grid from "@mui/material/Grid";

function SkillCard({ icon,title,skills }) {
  return (
    <Grid container spacing={4}
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ backgroundColor: "white" }}
    >
      <MKBox
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="30px"
        height="30px"
        borderRadius="50%"
        bgColor="primary"
        color="white"
        mx="auto"
        mb={1}
      >        <Icon fontSize="small">{icon}</Icon>
  </MKBox>

      <MKTypography variant="h6" component="h3" fontWeight="bold" gutterBottom>
        {title}
      </MKTypography>
      <MKTypography variant="body2" color="textSecondary" textAlign="center" sx={{ whiteSpace: "pre-wrap" }}
      >
        {skills}
      </MKTypography>
    </Grid>
  );
};

SkillCard.propTypes = {
  icon: PropTypes.string.isRequired, // Should match a Material Icon name
  title: PropTypes.string.isRequired,
  skills: PropTypes.string.isRequired,
};

export default SkillCard;
  