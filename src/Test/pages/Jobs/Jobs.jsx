import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addJob, updateJob } from "../../../features/job/jobSlice";
import {
  Box,
  Button,
  TextField,
  Typography,
  Chip,
  Card,
  CardContent,
  CardActions,
  Stack,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SaveIcon from "@mui/icons-material/Save";
import EditIcon from "@mui/icons-material/Edit";
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
  [theme.breakpoints.up("md")]: { width: "50%" },
}));
const StyledCard = styled(Card)(({ theme }) => ({
  width: 300,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
}));
const Jobs = () => {
  const dispatch = useDispatch();
  const jobExperiences = useSelector((state) => state.jobs.jobExperiences);
  const [newJob, setNewJob] = React.useState({
    company: "",
    location: "",
    role: "",
    industry: "",
    responsibilities: [],
    skills: [],
    duration: "",
    type: "",
  });
  const [editIndex, setEditIndex] = React.useState(null);
  const [responsibilityInput, setResponsibilityInput] = React.useState("");
  const [skillInput, setSkillInput] = React.useState("");
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewJob({ ...newJob, [name]: value });
  };
  const handleAddResponsibility = () => {
    if (responsibilityInput) {
      setNewJob({
        ...newJob,
        responsibilities: [...newJob.responsibilities, responsibilityInput],
      });
      setResponsibilityInput("");
    }
  };
  const handleAddSkill = () => {
    if (skillInput) {
      setNewJob({ ...newJob, skills: [...newJob.skills, skillInput] });
      setSkillInput("");
    }
  };
  const handleAddJob = () => {
    if (editIndex !== null) {
      dispatch(updateJob({ index: editIndex, job: newJob }));
      setEditIndex(null);
    } else {
      dispatch(addJob(newJob));
    }
    setNewJob({
      company: "",
      location: "",
      role: "",
      industry: "",
      responsibilities: [],
      skills: [],
      duration: "",
      type: "",
    });
  };
  const handleEditJob = (index) => {
    setNewJob(jobExperiences[index]);
    setEditIndex(index);
  };

  return (
    <StyledBox>
      <Typography variant="h5" gutterBottom>
        {editIndex !== null ? "Edit Job Experience" : "Add New Job Experience"}
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
          label="Company"
          variant="outlined"
          fullWidth
          margin="normal"
          name="company"
          value={newJob.company}
          onChange={handleInputChange}
        />
        <TextField
          label="Location"
          variant="outlined"
          fullWidth
          margin="normal"
          name="location"
          value={newJob.location}
          onChange={handleInputChange}
        />
        <TextField
          label="Role"
          variant="outlined"
          fullWidth
          margin="normal"
          name="role"
          value={newJob.role}
          onChange={handleInputChange}
        />
        <TextField
          label="Industry"
          variant="outlined"
          fullWidth
          margin="normal"
          name="industry"
          value={newJob.industry}
          onChange={handleInputChange}
        />
        <TextField
          label="Duration"
          variant="outlined"
          fullWidth
          margin="normal"
          name="duration"
          value={newJob.duration}
          onChange={handleInputChange}
        />
        <TextField
          label="Type"
          variant="outlined"
          fullWidth
          margin="normal"
          name="type"
          value={newJob.type}
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
            label="Add Responsibility"
            variant="outlined"
            fullWidth
            margin="normal"
            value={responsibilityInput}
            onChange={(e) => setResponsibilityInput(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddResponsibility}
            sx={{ height: "fit-content", mt: 2 }}
          >
            Add Responsibility
          </Button>
        </Box>
        <Stack spacing={2} mt={2} width="100%">
          {newJob.responsibilities.map((responsibility, index) => (
            <Chip key={index} label={responsibility} />
          ))}
        </Stack>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            width: "100%",
            mt: 2,
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
        <Stack spacing={2} mt={2} width="100%">
          {newJob.skills.map((skill, index) => (
            <Chip key={index} label={skill} />
          ))}
        </Stack>
        <Button
          variant="contained"
          startIcon={editIndex !== null ? <SaveIcon /> : <AddIcon />}
          onClick={handleAddJob}
          disabled={
            !newJob.company ||
            !newJob.role ||
            !newJob.industry ||
            !newJob.duration ||
            !newJob.type
          }
          sx={{ mt: 3 }}
        >
          {editIndex !== null ? "Save Changes" : "Add Job"}
        </Button>
      </Box>
      <Typography variant="h6" sx={{ mt: 4 }}>
        Job Experiences List
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
        {jobExperiences.map((job, index) => (
          <StyledCard key={index}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {job.company}
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                {job.location}
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                {job.role}
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                {job.industry}
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                {job.duration}
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                {job.type}
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                Responsibilities:
              </Typography>
              <Stack spacing={1}>
                {job.responsibilities.map((responsibility, idx) => (
                  <Chip key={idx} label={responsibility} />
                ))}
              </Stack>
              <Typography variant="body2" color="text.secondary" paragraph>
                Skills:
              </Typography>
              <Stack spacing={1}>
                {job.skills.map((skill, idx) => (
                  <Chip key={idx} label={skill} />
                ))}
              </Stack>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                color="default"
                onClick={() => handleEditJob(index)}
                startIcon={<EditIcon />}
              >
                Edit
              </Button>
            </CardActions>
          </StyledCard>
        ))}
      </Box>
    </StyledBox>
  );
};

export default Jobs;
