"use client";

import React from "react";
import {
  Tabs,
  Tab,
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Container,
} from "@mui/material";

const events = [

];
const events2 = [
  {
    title: "KSA Digital Disruption and Innovation Exchange",
    date: "May 13, 2024",
    location: "Riyadh, Saudi Arabia",
    img: "https://via.placeholder.com/500x300", // replace with actual image
    description:
      "KSA Digital Disruption discusses innovations in regional financial services.",
  },
  {
    title: "Digital Mastery Summit – London",
    date: "Mar 26, 2024",
    location: "London, UK",
    img: "https://via.placeholder.com/300x200", // replace with actual image
    description:
      "Digital Mastery Summit is dedicated to exploring the AI-driven future of technology.",
  },
  {
    title: "Fintech Week London",
    date: "Jun 19 – 23, 2024",
    location: "London, UK",
    img: "https://via.placeholder.com/300x200", // replace with actual image
    description:
      "Fintech Week London is a premier annual showcase of transformative FinTech solutions.",
  },
];
function EventsTabs() {
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleChange = (event: any, newValue: React.SetStateAction<number>) => {
    setSelectedTab(newValue);
  };

  return (
    <Box
      sx={{
        py: "var(--section-py)",
        bgcolor: "var(--primary-light)",
      }}
    >
      <Container
        sx={{ display: "flex", alignItems: "start", flexDirection: "column" }}
      >
        <Tabs value={selectedTab} onChange={handleChange} centered>
          <Tab label="Upcoming" />
          <Tab label="Previous" />
        </Tabs>

        {selectedTab === 1 && (
          <Grid container spacing={2} sx={{ marginTop: 2 }}>
            {events.map((event, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card sx={{ minHeight: "100%" }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={event.img}
                    alt={event.title}
                  />
                  <CardContent>
                    <Typography variant="h6">{event.title}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {event.description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <strong>{event.date}</strong>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {event.location}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
        {selectedTab === 0 && (
          <Grid container spacing={2} sx={{ marginTop: 2 }}>
            <Grid item xs={12} >
              <Card >
                <CardMedia
                  component="img"
                  height="400"
                  image={events[0].img}
                  alt={events[0].title}
                />
                <CardContent>
                  <Typography variant="h6">{events[0].title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {events[0].description}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <strong>{events[0].date}</strong>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {events[0].location}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card sx={{ minHeight: "100%" }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={events[1].img}
                  alt={events[1].title}
                />
                <CardContent>
                  <Typography variant="h6">{events[1].title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {events[1].description}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <strong>{events[1].date}</strong>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {events[1].location}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card sx={{ minHeight: "100%" }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={events[2].img}
                  alt={events[2].title}
                />
                <CardContent>
                  <Typography variant="h6">{events[2].title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {events[2].description}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <strong>{events[2].date}</strong>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {events[2].location}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        )}
      </Container>
    </Box>
  );
}

export default EventsTabs;
