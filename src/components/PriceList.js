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
      description: ["Zielorientiert", "Effektiv & Effizient", "Individuell"],
      buttonText: "Anfragen",
      buttonVariant: "outlined",
      subject: "Trainingsplan",
    },
    {
      title: "Online Coaching",
      subheader: "Beliebt",
      price: "125",
      description: [
        //  "20 users included",
        "Individuallisierter Trainingsplan",
        "Technikanalyse deiner Übungsausführung",
        "Wöchentliches Check-In",
        "Textkommunikation via Messenger",
      ],
      buttonText: "Anfragen",
      buttonVariant: "contained",
      subject: "Online Caoching",
    },
    {
      title: "Ernährungsplan",
      price: "100",
      description: [
        "Leistungsoptimierung",
        "Körperfettreduktion",
        "Kommunikation via E-Mail",
      ],
      buttonText: "Anfragen",
      buttonVariant: "outlined",
      subject: "Ernährungsplan",
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
            <Card className="price">
              <CardHeader
                title={tier.title}
                subheader={tier.subheader}
                titleTypographyProps={{ align: "center" }}
                action={
                  tier.title === "Online Coaching" && (
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
                    {tier.title === "Online Coaching" ? "/monat" : "/einmalig"}
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
                <Button
                  fullWidth
                  variant={tier.buttonVariant}
                  href={`mailto:megalodoncoaching@gmail.com?subject=${tier.subject}`}
                >
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
