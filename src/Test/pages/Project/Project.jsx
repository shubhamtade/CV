import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import AddIcon from "@mui/icons-material/Add";
import UploadIcon from "@mui/icons-material/Upload";
import SaveIcon from "@mui/icons-material/Save";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";
import Avatar from "@mui/material/Avatar";

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

const Project = () => {
  const [projects, setProjects] = React.useState([]);
  const [newProject, setNewProject] = React.useState({
    name: "",
    date: "",
    description: "",
    skills: [],
    img: "",
    url: "",
    gitUrl: "",
  });
  const [editIndex, setEditIndex] = React.useState(null);
  const [skillInput, setSkillInput] = React.useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewProject({ ...newProject, [name]: value });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setNewProject({ ...newProject, img: e.target.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddSkill = () => {
    if (skillInput) {
      setNewProject({
        ...newProject,
        skills: [...newProject.skills, skillInput],
      });
      setSkillInput("");
    }
  };

  const handleAddProject = () => {
    if (editIndex !== null) {
      const updatedProjects = [...projects];
      updatedProjects[editIndex] = newProject;
      setProjects(updatedProjects);
      setEditIndex(null);
    } else {
      setProjects([...projects, newProject]);
    }
    setNewProject({
      name: "",
      date: "",
      description: "",
      skills: [],
      img: "",
      url: "",
      gitUrl: "",
    });
  };

  const handleEditProject = (index) => {
    setNewProject(projects[index]);
    setEditIndex(index);
  };

  return (
    <StyledBox>
      <Typography variant="h5" gutterBottom>
        {editIndex !== null ? "Edit Project" : "Add New Project"}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <TextField
          label="Project Name"
          variant="outlined"
          fullWidth
          margin="normal"
          name="name"
          value={newProject.name}
          onChange={handleInputChange}
        />
        <TextField
          label="Date"
          variant="outlined"
          fullWidth
          margin="normal"
          name="date"
          value={newProject.date}
          onChange={handleInputChange}
        />
        <TextField
          label="Description"
          variant="outlined"
          fullWidth
          margin="normal"
          multiline
          rows={4}
          name="description"
          value={newProject.description}
          onChange={handleInputChange}
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            width: "100%",
          }}
        >
          <TextField
            label="Add Skill"
            variant="outlined"
            fullWidth
            margin="normal"
            value={skillInput}
            onChange={(e) => setSkillInput(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddSkill}
            sx={{ height: "fit-content", mt: 2 }}
          >
            Add Skill
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1,
            mt: 2,
            width: "100%",
          }}
        >
          {newProject.skills.map((skill, index) => (
            <Chip key={index} label={skill} />
          ))}
        </Box>
        <Button
          variant="contained"
          component="label"
          startIcon={<UploadIcon />}
          sx={{ mt: 2, mb: 2 }}
        >
          Upload Project Image
          <input
            type="file"
            accept="image/*"
            hidden
            onChange={handleFileChange}
          />
        </Button>
        {newProject.img && (
          <img
            src={newProject.img}
            alt="Project"
            style={{ width: 200, height: 200, marginBottom: 10 }}
          />
        )}
        <TextField
          label="Project URL"
          variant="outlined"
          fullWidth
          margin="normal"
          name="url"
          value={newProject.url}
          onChange={handleInputChange}
        />
        <TextField
          label="GitHub URL"
          variant="outlined"
          fullWidth
          margin="normal"
          name="gitUrl"
          value={newProject.gitUrl}
          onChange={handleInputChange}
        />
        <Button
          variant="contained"
          startIcon={editIndex !== null ? <SaveIcon /> : <AddIcon />}
          onClick={handleAddProject}
          disabled={
            !newProject.name ||
            !newProject.date ||
            !newProject.description ||
            !newProject.img
          }
          sx={{ mt: 3 }}
        >
          {editIndex !== null ? "Save Changes" : "Add Project"}
        </Button>
      </Box>
      <Typography variant="h6" sx={{ mt: 4 }}>
        Projects List
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 4,
          mt: 2,
        }}
      >
        {projects.map((project, index) => (
          <Card
            key={index}
            sx={{
              width: 300,
              borderRadius: 2,
              boxShadow: 3,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <CardMedia
              component="img"
              height="140"
              image={project.img}
              alt={project.name}
            />
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {project.name}
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                {project.date}
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                {project.description}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Skills:
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  gap: 1,
                  mt: 1,
                }}
              >
                {project.skills.map((skill, idx) => (
                  <Chip key={idx} label={skill} />
                ))}
              </Box>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                color="primary"
                href={project.url}
                target="_blank"
                startIcon={<OpenInNewIcon />}
              >
                View Project
              </Button>
              <Button
                size="small"
                color="secondary"
                href={project.gitUrl}
                target="_blank"
                startIcon={<GitHubIcon />}
              >
                GitHub
              </Button>
              <Button
                size="small"
                color="default"
                onClick={() => handleEditProject(index)}
                startIcon={<SaveIcon />}
              >
                Edit
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </StyledBox>
  );
};

export default Project;
