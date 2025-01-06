import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

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
    // Handle form submission logic here
    const updatedData = { name, email, password, socialLinks };
    onUpdate(updatedData);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        p: 4,
        borderRadius: 1,
        boxShadow: 3,
      }}
    >
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
        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={{ mt: 3 }}
        >
          Save Changes
        </Button>
      </form>
    </Box>
  );
};

export default UpdateProfile;
