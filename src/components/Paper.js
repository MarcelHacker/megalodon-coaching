import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import coaching from "../../public/all-in-coaching.jpg";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  textAlign: "center",
  //"background-image": coaching,
  height: 60,
  lineHeight: "60px",
}));

const PaperImage = () => {
  const height = "100em";
  const width = "180em";
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Box
          sx={{
            p: 2,
            bgcolor: "background.default",
            display: "grid",
            gridTemplateColumns: { md: "1fr 1fr" },
            gap: 2,
            width: width,
            height: height,
          }}
        >
          <Item elevation={3}>
            <img
              src={coaching}
              alt={"Coaching"}
              width={width}
              height={height}
            />
          </Item>
        </Box>
      </Grid>
    </Grid>
  );
};

export default PaperImage;
