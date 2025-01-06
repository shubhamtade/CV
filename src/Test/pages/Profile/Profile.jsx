import * as React from "react";
import UserInfoComponent from "./UserInfo";
import UpdateProfileComponent from "./UpdateProfile";
import { Box } from "@mui/material";

const Profile = () => {
  const initialData = {
    name: "Shubham Sunil Tade",
    email: "shubham@example.com",
    socialLinks: {
      facebook: "https://facebook.com/shubham",
      twitter: "https://twitter.com/shubham",
      linkedin: "https://linkedin.com/in/shubham",
      instagram: "https://instagram.com/shubham",
    },
  };

  const [userData, setUserData] = React.useState(initialData);

  const handleUpdate = (updatedData) => {
    setUserData(updatedData);
    console.log("Profile updated:", updatedData);
  };

  return (
    <Box>
      <UserInfoComponent
        name={userData.name}
        email={userData.email}
        socialLinks={userData.socialLinks}
      />
      <button
        onClick={() => (
          <UpdateProfileComponent
            initialData={userData}
            onUpdate={handleUpdate}
          />
        )}
      >
        Edit
      </button>
    </Box>
  );
};

export default Profile;
