import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  textAlign: "center",
  height: 60,
  lineHeight: "60px",
}));

const PaperImage = () => {
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
            width: "1500px",
            height: "1000px",
          }}
        >
          <Item elevation={3}>
            <img src={"../../public/all-in-coaching.jpg"} />
          </Item>
        </Box>
      </Grid>
    </Grid>
  );
};

export default PaperImage;
