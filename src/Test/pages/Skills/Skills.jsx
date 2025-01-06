import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import UploadIcon from "@mui/icons-material/Upload";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

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

const Skills = () => {
  const [skills, setSkills] = React.useState([
    {
      name: "HTTP",
      icon: "https://cdn.iconscout.com/icon/premium/png-512-thumb/http-5372110-4489074.png?f=webp&w=256",
    },
    {
      name: "HTML",
      icon: "https://cdn.iconscout.com/icon/free/png-512/html5-10-569380.png",
    },
    // Add more initial skills here...
  ]);
  const [newSkill, setNewSkill] = React.useState({ name: "", icon: "" });
  const [editIndex, setEditIndex] = React.useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewSkill({ ...newSkill, [name]: value });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setNewSkill({ ...newSkill, icon: e.target.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddSkill = () => {
    if (editIndex !== null) {
      const updatedSkills = [...skills];
      updatedSkills[editIndex] = newSkill;
      setSkills(updatedSkills);
      setEditIndex(null);
    } else {
      setSkills([...skills, newSkill]);
    }
    setNewSkill({ name: "", icon: "" });
  };

  const handleEditSkill = (index) => {
    setNewSkill(skills[index]);
    setEditIndex(index);
  };

  return (
    <StyledBox>
      
      <Typography variant="h5" gutterBottom>
        {editIndex !== null ? "Edit Skill" : "Add New Skills"}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <TextField
          label="Skill Name"
          variant="outlined"
          fullWidth
          margin="normal"
          name="name"
          value={newSkill.name}
          onChange={handleInputChange}
        />
        <Button
          variant="contained"
          component="label"
          startIcon={<UploadIcon />}
          sx={{ mt: 2, mb: 2 }}
        >
          Upload Icon
          <input
            type="file"
            accept="image/*"
            hidden
            onChange={handleFileChange}
          />
        </Button>
        {newSkill.icon && (
          <img
            src={newSkill.icon}
            alt="Skill Icon"
            style={{ width: 50, height: 50, marginBottom: 10 }}
          />
        )}
        <Button
          variant="contained"
          startIcon={editIndex !== null ? <SaveIcon /> : <AddIcon />}
          onClick={handleAddSkill}
          disabled={!newSkill.name || !newSkill.icon}
        >
          {editIndex !== null ? "Save Changes" : "Add Skill"}
        </Button>
      </Box>
      <Typography variant="h6" sx={{ mt: 4 }}>
        Skills List
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 2,
          mt: 2,
        }}
      >
        {skills.map((skill, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              p: 2,
              border: "1px solid #ccc",
              borderRadius: 1,
            }}
          >
            <img
              src={skill.icon}
              alt={skill.name}
              style={{ width: 50, height: 50 }}
            />
            <Typography>{skill.name}</Typography>
            <Button
              variant="outlined"
              startIcon={<EditIcon />}
              onClick={() => handleEditSkill(index)}
              sx={{ mt: 1 }}
            >
              Edit
            </Button>
          </Box>
        ))}
      </Box>
    </StyledBox>
  );
};

export default Skills;
