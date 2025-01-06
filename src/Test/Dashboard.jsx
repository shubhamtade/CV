import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { useDemoRouter } from "@toolpad/core/internal";
import AccountCircleIcon from "@mui/icons-material/AccountCircle"; //User
import AccountTreeIcon from "@mui/icons-material/AccountTree"; // Project
import WorkHistoryIcon from "@mui/icons-material/WorkHistory"; //Job
import AppsIcon from "@mui/icons-material/Apps"; // Skills

import LogoDark from "../assets/CVLogoDark.png";
import LogoLight from "../assets/CVLogoIconN.png";

import UserInfoComponent from "./pages/Profile/UserInfo";
import EditProfileComponent from "./pages/Profile/UpdateProfile";
import SkillComponent from "./pages/Skills/Skills";
import ProjectComponent from "./pages/Project/Project";
import JobsComponent from "./pages/Jobs/Jobs";

// Animation
import GradientText from "../components/Animation/GradientText";

const NAVIGATION = [
  {
    segment: "dashboard",
    title: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    segment: "profile/edit",
    title: "Edit Profile",
    icon: <AccountCircleIcon />,
  },
  {
    segment: "skills",
    title: "Skills",
    icon: <AppsIcon />,
  },
  {
    segment: "projects",
    title: "Project",
    icon: <AccountTreeIcon />,
  },
  {
    segment: "jobs",
    title: "Jobs",
    icon: <WorkHistoryIcon />,
  },
];

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: "data-toolpad-color-scheme",
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function DemoPageContent({ pathname }) {
  const [userData, setUserData] = React.useState({
    name: "Shubham Sunil Tade",
    email: "shubham.tade@gmail.com",
    socialLinks: {
      facebook: "https://facebook.com/shubham",
      github: "https://github.com/shubhamtade",
      linkedin: "https://linkedin.com/in/shubham",
      instagram: "https://instagram.com/shubham",
    },
  });

  const handleUpdate = (updatedData) => {
    setUserData(updatedData);
    console.log("Profile updated:", updatedData);
  };

  switch (pathname) {
    case "/profile/edit":
      return (
        <Box
          sx={{
            py: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <EditProfileComponent
            initialData={userData}
            onUpdate={handleUpdate}
          />
        </Box>
      );
    case "/skills":
      return (
        <Box
          sx={{
            py: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <SkillComponent />
        </Box>
      );
    case "/projects":
      return (
        <Box
          sx={{
            py: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <ProjectComponent />
        </Box>
      );
    case "/jobs":
      return (
        <Box
          sx={{
            py: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <JobsComponent />
        </Box>
      );
    case "/dashboard":
    default:
      return (
        <Box
          sx={{
            py: 4,
            px: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
          className="mb-2"
        >
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
            className="custom-class text-2xl font-semibold my-4"
          >
            Welcome back Shubham Sunil Tade!
          </GradientText>
          <UserInfoComponent />
        </Box>
      );
  }
}

DemoPageContent.propTypes = {
  pathname: PropTypes.string.isRequired,
};

function DashboardLayoutAccount(props) {
  const { window } = props;

  const [session, setSession] = React.useState({
    user: {
      name: "Shubham Sunil Tade",
      email: "shubham.tade@gmail.com",
      image:
        "https://crio-portfolio-data.s3.ap-south-1.amazonaws.com/profile_picture/shubham-tade?Thu%20Jan%2002%202025%2023:51:03%20GMT+0530%20(India%20Standard%20Time)",
    },
  });

  const authentication = React.useMemo(() => {
    return {
      signIn: () => {
        setSession({
          user: {
            name: "Shubham Sunil Tade",
            email: "shubham.tade@gmail.com",
            image:
              "https://crio-portfolio-data.s3.ap-south-1.amazonaws.com/profile_picture/shubham-tade?Thu%20Jan%2002%202025%2023:51:03%20GMT+0530%20(India%20Standard%20Time)",
          },
        });
      },
      signOut: () => {
        setSession(null);
      },
    };
  }, []);

  const router = useDemoRouter("/dashboard");

  // Remove this const when copying and pasting into your project.
  const demoWindow = window !== undefined ? window() : undefined;

  return (
    // preview-start

    <AppProvider
      branding={{
        logo: <img src={LogoDark} alt="MUI logo" />,
        title: "",
        homeUrl: "/toolpad/core/introduction",
      }}
      session={session}
      authentication={authentication}
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout>
        <DemoPageContent pathname={router.pathname} />
      </DashboardLayout>
    </AppProvider>
    // preview-end
  );
}

DashboardLayoutAccount.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default DashboardLayoutAccount;
