import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/Star";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { yellow } from "@mui/material/colors";

const PriceList = () => {
  const tiers = [
    {
      title: "Trainingsplan",
      price: "60",
      description: [
        "10 users included",
        "2 GB of storage",
        "Help center access",
        "Email support",
      ],
      buttonText: "Anfragen",
      buttonVariant: "outlined",
    },
    {
      title: "Pro",
      subheader: "Most popular",
      price: "125",
      description: [
        "20 users included",
        "10 GB of storage",
        "Help center access",
        "Priority email support",
      ],
      buttonText: "Anfragen",
      buttonVariant: "contained",
    },
    {
      title: "Ernährungsplan",
      price: "100",
      description: [
        "50 users included",
        "30 GB of storage",
        "Help center access",
        "Phone & email support",
      ],
      buttonText: "Anfragen",
      buttonVariant: "outlined",
    },
  ];
  return (
    <Container maxWidth="md" component="main">
      <Grid container spacing={5} alignItems="flex-end">
        {tiers.map((tier) => (
          // Enterprise card is full width at sm breakpoint
          <Grid
            item
            key={tier.title}
            xs={12}
            sm={tier.title === "Enterprise" ? 12 : 6}
            md={4}
          >
            <Card>
              <CardHeader
                title={tier.title}
                subheader={tier.subheader}
                titleTypographyProps={{ align: "center" }}
                action={
                  tier.title === "Pro" && (
                    <StarIcon sx={{ color: yellow[800] }} />
                  )
                }
                subheaderTypographyProps={{
                  align: "center",
                }}
                sx={{
                  backgroundColor: (theme) =>
                    theme.palette.mode === "light"
                      ? theme.palette.grey[200]
                      : theme.palette.grey[700],
                }}
              />
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "baseline",
                    mb: 2,
                  }}
                >
                  <Typography component="h2" variant="h3" color="text.primary">
                    € {tier.price}
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    /monat
                  </Typography>
                </Box>
                <ul>
                  {tier.description.map((line) => (
                    <Typography
                      component="li"
                      variant="subtitle1"
                      align="center"
                      key={line}
                    >
                      {line}
                    </Typography>
                  ))}
                </ul>
              </CardContent>
              <CardActions>
                <Button fullWidth variant={tier.buttonVariant}>
                  {tier.buttonText}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PriceList;
