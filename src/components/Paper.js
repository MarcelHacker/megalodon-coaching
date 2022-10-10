import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import coaching from "../../public/all-in-coaching.jpg";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  textAlign: "center",
  //"background-image": coaching,
  height: "100em",
  lineHeight: "100em",
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
            height: "100em",
          }}
        >
          <Item elevation={3} height={"100em"}>
            <img src={coaching} alt={"Coaching"} />
          </Item>
        </Box>
      </Grid>
    </Grid>
  );
};

export default PaperImage;
