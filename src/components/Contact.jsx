import React from "react";
import Layout from "./Layout";
import { Grid, TextField } from "@mui/material";

export default function Contact() {
  return (
    <Layout title={"Контакты"}>
      <Grid container spacing={4}>
        <Grid size={6}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
          />
        </Grid>
        <Grid size={6}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
          />
        </Grid>
      </Grid>
    </Layout>
  );
}

/* <form noValidate autoComplete="off">
        <TextField id="standard-basic" label="Standard" />
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </form> */
