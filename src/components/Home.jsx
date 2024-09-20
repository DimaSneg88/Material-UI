import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";

import Layout from "./Layout";

export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export default function Home() {
  return (
    //передаем в layout в main - children
    <Layout title={"Главная"}>
      <Grid container spacing={4}>
        <Grid size={6}>
          <Item>size=8</Item>
        </Grid>
        <Grid size={6}>
          <Item>size=4</Item>
        </Grid>
        <Grid size={2}>
          <Item>size=4</Item>
        </Grid>
        <Grid size={10}>
          <Item>size=8</Item>
        </Grid>
      </Grid>
    </Layout>
  );
}
