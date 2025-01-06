import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

const UserInfo = ({ name, email, socialLinks }) => {
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
      <Avatar
        alt={name}
        src="https://avatars.githubusercontent.com/u/19550456"
        sx={{ width: 56, height: 56, mb: 2 }}
      />
      <Typography variant="h6">{name}</Typography>
      <Typography variant="body1">{email}</Typography>
      <Typography variant="body2" sx={{ mt: 1 }}>
        Social Links:
      </Typography>
      {Object.entries(socialLinks).map(([platform, link]) => (
        <Typography variant="body2" key={platform}>
          {platform}: {link}
        </Typography>
      ))}
    </Box>
  );
};

export default UserInfo;
