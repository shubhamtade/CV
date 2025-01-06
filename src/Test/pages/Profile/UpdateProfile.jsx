import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3],
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  width: "100%",
  maxWidth: "1000px",
  margin: "auto",
  marginTop: theme.spacing(4),
  [theme.breakpoints.up("md")]: {
    width: "50%", // 50% width on medium and larger screens
  },
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(9),
  height: theme.spacing(9),
  marginBottom: theme.spacing(2),
  backgroundColor: theme.palette.primary.main,
}));

const UpdateProfile = ({ initialData, onUpdate }) => {
  const [name, setName] = React.useState(initialData.name);
  const [email, setEmail] = React.useState(initialData.email);
  const [password, setPassword] = React.useState("");
  const [socialLinks, setSocialLinks] = React.useState(initialData.socialLinks);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSocialLinks({
      ...socialLinks,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedData = { name, email, password, socialLinks };
    onUpdate(updatedData);
  };

  return (
    <StyledBox>
      <StyledAvatar>
        <Typography variant="h5">{name[0]}</Typography>
      </StyledAvatar>
      <Typography variant="h5" gutterBottom>
        Edit Profile
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Divider sx={{ my: 2 }}>Social Links</Divider>
        <Stack spacing={2}>
          <TextField
            label="Facebook"
            variant="outlined"
            fullWidth
            margin="normal"
            name="facebook"
            value={socialLinks.facebook}
            onChange={handleInputChange}
          />
          <TextField
            label="Twitter"
            variant="outlined"
            fullWidth
            margin="normal"
            name="twitter"
            value={socialLinks.twitter}
            onChange={handleInputChange}
          />
          <TextField
            label="LinkedIn"
            variant="outlined"
            fullWidth
            margin="normal"
            name="linkedin"
            value={socialLinks.linkedin}
            onChange={handleInputChange}
          />
          <TextField
            label="Instagram"
            variant="outlined"
            fullWidth
            margin="normal"
            name="instagram"
            value={socialLinks.instagram}
            onChange={handleInputChange}
          />
        </Stack>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={{ mt: 3 }}
        >
          Save Changes
        </Button>
      </form>
    </StyledBox>
  );
};

export default UpdateProfile;
