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
import { SendEmail } from "@/actions/Form";
import toast, { Toaster } from "react-hot-toast";

const schema = yup.object().shape({
  industry: yup.string().required("Branche ist erforderlich"),
  name: yup.string().required("Name ist erforderlich"),
  email: yup.string().email("Invalid email").required("Email ist erforderlich"),
  phone: yup.string().required("Telefon ist erforderlich"),
  description: yup.string().required("Projekt Anforderung ist erforderlich"),
  nda: yup.boolean(),
});

const industries = [
  "Technologie",
  "Finanzen",
  "Gesundheitswesen",
  "Bildung",
  "Einzelhandel",
  "Sonstiges",
];

const Section9 = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: any) => {

    try {
      const res = await SendEmail(data);
      console.log(res.message);
      if (res.message === "Email sent successfully") {
        toast.success(res.message);
      } else {
        toast.error(res.response.data.error);
      }
    } catch (err) {}
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
            {` Lassen Sie uns über Ihre IT-Bedürfnisse sprechen`}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Was passiert als Nächstes?
          </Typography>
          <Box display="flex" alignItems="center" mb={2}>
            <Box mr={1}>
              <Typography variant="h5" color="primary">
                1
              </Typography>
            </Box>
            <Typography variant="body1">
              Ein Experte wird Sie kontaktieren, nachdem er Ihre Anforderungen
              analysiert hat
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" mb={2}>
            <Box mr={1}>
              <Typography variant="h5" color="primary">
                2
              </Typography>
            </Box>
            <Typography variant="body1">
              Falls erforderlich, unterzeichnen wir eine
              Vertraulichkeitsvereinbarung, um das höchste Maß an Datenschutz zu
              gewährleisten
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" mb={2}>
            <Box mr={1}>
              <Typography variant="h5" color="primary">
                3
              </Typography>
            </Box>
            <Typography variant="body1">
              Wir unterbreiten Ihnen einen umfassenden Projektvorschlag mit
              Kostenschätzungen, Zeitplänen, Lebensläufen usw.
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Toaster />

          <Paper elevation={0} sx={{ p: 4, bgcolor: "#fafafa" }}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Controller
                name="industry"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    select
                    label="Wählen Sie Ihre Branche aus"
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
                    label="E-mail"
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
                    label="Telefon"
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
                    label="Bitte beschreiben Sie Ihre Projektanforderungen"
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
                <FormControlLabel
                  control={
                    <Controller
                      name="nda"
                      control={control}
                      render={({ field }) => <Checkbox {...field} />}
                    />
                  }
                  label="Ich möchte meine Daten durch die Unterzeichnung einer Vertraulichkeitsvereinbarung schützen."
                />
                <Box mt={2}>
                  <button
                    type="submit"
                    className={`${globals.button} ${globals.button_primary}`}
                  >
                    Senden
                  </button>
                  <Typography variant="body2" color="textSecondary" mt={1}>
                    Ihr Datenschutz ist gewährleistet
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
