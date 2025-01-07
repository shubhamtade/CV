import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
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
    width: "50%",
  },
}));

const Setting = () => {
  const [logo, setLogo] = React.useState("");
  const [icon, setIcon] = React.useState("");
  const [notificationsEnabled, setNotificationsEnabled] = React.useState("");
  const [notificationMessage, setNotificationMessage] = React.useState("");

  const handleFileChange = (event, setter) => {
    const file = event.target.files[0];
    setter(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedSettings = {
      logo,
      icon,
      notificationsEnabled,
      notificationMessage,
    };
    onUpdate(updatedSettings);
  };

  return (
    <StyledBox>
      <Typography variant="h5" gutterBottom>
        Settings
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box sx={{ mb: 2 }}>
          <Typography variant="h6">Logo</Typography>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleFileChange(e, setLogo)}
          />
        </Box>
        <Box sx={{ mb: 2 }}>
          <Typography variant="h6">Icon</Typography>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleFileChange(e, setIcon)}
          />
        </Box>
        <Box sx={{ mb: 2 }}>
          <Typography variant="h6">Notifications</Typography>
          <Button
            variant="contained"
            color={notificationsEnabled ? "primary" : "secondary"}
            onClick={() => setNotificationsEnabled(!notificationsEnabled)}
          >
            {notificationsEnabled ? "Enabled" : "Disabled"}
          </Button>
          {notificationsEnabled && (
            <TextField
              label="Notification Message"
              variant="outlined"
              fullWidth
              margin="normal"
              value={notificationMessage}
              onChange={(e) => setNotificationMessage(e.target.value)}
            />
          )}
        </Box>
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

export default Setting;

// Add Notification on Home Page

// import * as React from "react";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import { styled } from "@mui/material/styles";

// const StyledNotification = styled(Box)(({ theme }) => ({
//   backgroundColor: theme.palette.warning.light,
//   padding: theme.spacing(2),
//   borderRadius: theme.shape.borderRadius,
//   textAlign: "center",
//   marginBottom: theme.spacing(2),
// }));

// const HomePage = ({ settings }) => {
//   return (
//     <Box>
//       {settings.notificationsEnabled && settings.notificationMessage && (
//         <StyledNotification>
//           <Typography variant="h6">{settings.notificationMessage}</Typography>
//         </StyledNotification>
//       )}
//       <Typography variant="h4">Welcome to the Home Page</Typography>
//     </Box>
//   );
// };

// export default HomePage;
