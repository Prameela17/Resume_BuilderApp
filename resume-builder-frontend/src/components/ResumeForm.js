import React from "react";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import {
  Container,
  TextField,
  Button,
  Typography,
  Grid,
  Box,
  IconButton,
} from "@mui/material";
import {
  AddCircleOutline as AddCircleOutlineIcon,
  DeleteOutline as DeleteOutlineIcon,
} from "@mui/icons-material";

const ResumeForm = ({ onSubmit }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    register,
    reset,
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      objective: "",
      experience: "",
      education: [{ institution: "", degree: "", year: "" }],
      skills: "",
    },
  });

  const { fields: educationFields, append, remove } = useFieldArray({
    control,
    name: "education",
  });

  const handleFormSubmit = (data) => {
    onSubmit(data);
    reset(); // Reset form after submission
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom>
        Resume Details
      </Typography>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              {...register("firstName", { required: true })}
              label="First Name"
              fullWidth
              error={!!errors.firstName}
              helperText={errors.firstName && "First name is required"}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              {...register("lastName", { required: true })}
              label="Last Name"
              fullWidth
              error={!!errors.lastName}
              helperText={errors.lastName && "Last name is required"}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              {...register("email", {
                required: true,
                pattern: /^\S+@\S+$/i,
              })}
              label="Email"
              fullWidth
              error={!!errors.email}
              helperText={
                errors.email && "Please enter a valid email address"
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              {...register("phoneNumber")}
              label="Phone Number"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              {...register("objective")}
              label="Objective"
              fullWidth
              multiline
              rows={4}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              {...register("experience")}
              label="Work Experience"
              fullWidth
              multiline
              rows={4}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              Education
            </Typography>
            {educationFields.map((field, index) => (
              <Grid container spacing={2} key={field.id}>
                <Grid item xs={12} sm={4}>
                  <TextField
                    {...register(`education.${index}.institution`, {
                      required: true,
                    })}
                    label="Institution"
                    fullWidth
                    error={!!errors.education?.[index]?.institution}
                    helperText={
                      errors.education?.[index]?.institution &&
                      "Institution is required"
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    {...register(`education.${index}.degree`, {
                      required: true,
                    })}
                    label="Degree"
                    fullWidth
                    error={!!errors.education?.[index]?.degree}
                    helperText={
                      errors.education?.[index]?.degree &&
                      "Degree is required"
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    {...register(`education.${index}.year`, {
                      required: true,
                      pattern: /^\d{4}$/,
                    })}
                    label="Year"
                    fullWidth
                    error={!!errors.education?.[index]?.year}
                    helperText={
                      errors.education?.[index]?.year &&
                      "Please enter a valid year"
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={2}>
                  {index === educationFields.length - 1 && (
                    <IconButton onClick={() => append({})}>
                      <AddCircleOutlineIcon />
                    </IconButton>
                  )}
                  {index !== educationFields.length - 1 && (
                    <IconButton onClick={() => remove(index)}>
                      <DeleteOutlineIcon />
                    </IconButton>
                  )}
                </Grid>
              </Grid>
            ))}
          </Grid>
          <Grid item xs={12}>
            <TextField
              {...register("skills")}
              label="Skills"
              fullWidth
              multiline
              rows={4}
            />
          </Grid>
          <Grid item xs={12}>
            <Box mt={3} display="flex" justifyContent="center">
              <Button type="submit" variant="contained" color="primary">
                Generate Resume
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default ResumeForm;
