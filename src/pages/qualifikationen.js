import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import urkunde from "../../public/urkunde.jpg";

export default () => {
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia component="img" image={urkunde} alt="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Trainerausbildung Kraftdreikampf
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Powerlifting Academy 2022
        </Typography>
      </CardContent>
    </Card>
  );
};
