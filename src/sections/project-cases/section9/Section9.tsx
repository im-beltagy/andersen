"use client";
import React from "react";
import globals from "@/app/globals.module.css";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  TextField,
  Button,
  MenuItem,
  FormControlLabel,
  Checkbox,
  Grid,
  Typography,
  Box,
  Paper,
} from "@mui/material";

// Validation schema
const schema = yup.object().shape({
  industry: yup.string().required("Industry is required"),
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup.string().required("Phone is required"),
  description: yup.string().required("Project requirements are required"),
  nda: yup.boolean(),
});

const industries = [
  "Technology",
  "Finance",
  "Healthcare",
  "Education",
  "Retail",
  "Other",
];

const Section9 = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      alignItems="center"
      sx={{
        p: 1,
        "@media (min-width: 600px)": {
          p: 4,
        },
      }}
    >
      <Grid item xs={12} md={6}>
        <Box>
          <Typography variant="h4" gutterBottom>
            {` Let's talk about your IT needs`}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            What happens next?
          </Typography>
          <Box display="flex" alignItems="center" mb={2}>
            <Box mr={1}>
              <Typography variant="h5" color="primary">
                1
              </Typography>
            </Box>
            <Typography variant="body1">
              An expert contacts you after having analyzed your requirements;
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" mb={2}>
            <Box mr={1}>
              <Typography variant="h5" color="primary">
                2
              </Typography>
            </Box>
            <Typography variant="body1">
              If needed, we sign an NDA to ensure the highest privacy level;
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" mb={2}>
            <Box mr={1}>
              <Typography variant="h5" color="primary">
                3
              </Typography>
            </Box>
            <Typography variant="body1">
              We submit a comprehensive project proposal with estimates,
              timelines, CVs, etc.
            </Typography>
          </Box>
          <Typography variant="subtitle1" gutterBottom>
            Customers who trust us
          </Typography>
          {/* Add logos here */}
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper elevation={0} sx={{ p: 4, bgcolor: "#fafafa" }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="industry"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  select
                  label="Select your industry"
                  variant="standard"
                  fullWidth
                  margin="normal"
                  error={!!errors.industry}
                  helperText={errors.industry ? errors.industry.message : ""}
                >
                  {industries.map((industry, index) => (
                    <MenuItem key={index} value={industry}>
                      {industry}
                    </MenuItem>
                  ))}
                </TextField>
              )}
            />
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Name"
                  variant="standard"
                  fullWidth
                  margin="normal"
                  error={!!errors.name}
                  helperText={errors.name ? errors.name.message : ""}
                />
              )}
            />
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Corporate E-mail"
                  variant="standard"
                  fullWidth
                  margin="normal"
                  error={!!errors.email}
                  helperText={errors.email ? errors.email.message : ""}
                />
              )}
            />
            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Phone"
                  variant="standard"
                  fullWidth
                  margin="normal"
                  error={!!errors.phone}
                  helperText={errors.phone ? errors.phone.message : ""}
                />
              )}
            />
            <Controller
              name="description"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Please describe your project requirements"
                  variant="standard"
                  fullWidth
                  margin="normal"
                  multiline
                  rows={4}
                  error={!!errors.description}
                  helperText={
                    errors.description ? errors.description.message : ""
                  }
                />
              )}
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <button
                className={`${globals.button} ${globals.button_secondary}`}
                style={{ marginTop: "1rem", width: "fit-content" }}
              >
                Attach file
                <input type="file" hidden />
              </button>
              <FormControlLabel
                control={
                  <Controller
                    name="nda"
                    control={control}
                    render={({ field }) => <Checkbox {...field} />}
                  />
                }
                label="I want to protect my data by signing an NDA."
              />
              <Box mt={2}>
                <button
                  type="submit"
                  className={`${globals.button} ${globals.button_primary}`}
                >
                  Send request
                </button>
                <Typography variant="body2" color="textSecondary" mt={1}>
                  Your privacy is protected
                </Typography>
              </Box>
            </Box>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Section9;
