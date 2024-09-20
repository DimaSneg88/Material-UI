import * as React from "react";
import Layout from "./Layout";
import Grid from "@mui/material/Grid2";
import { Item } from "./Home";
import photo1 from "../assets/leo.jpeg";
import photo2 from "../assets/photo2.jpg";
import photo3 from "../assets/photo3.jpeg";
import photo4 from "../assets/photo4.jpeg";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";

export default function About() {
  return (
    <Layout title={"О компании"}>
      <h2>Наши сотрудники:</h2>
      <Grid container spacing={2}>
        <Grid size={3}>
          <Item>
            <img className="grid-img" src={photo1} alt="" />
            <p>Ivan Ivanov</p>
          </Item>
        </Grid>
        <Grid size={3}>
          <Item>
            <img className="grid-img" src={photo2} alt="" />
            <p>Alex Pushkin</p>
          </Item>
        </Grid>
        <Grid size={3}>
          <Item>
            <img className="grid-img" src={photo3} alt="" />
            <p>Anna Ivanova</p>
          </Item>
        </Grid>
        <Grid size={3}>
          <Item>
            <img className="grid-img" src={photo4} alt="" />
            <p>Alex Petrov</p>
          </Item>
        </Grid>
      </Grid>

      <ImageList sx={{ width: 1100, height: 1700 }}>
        <ImageListItem className="padding" key="Subheader" cols={3}>
          <ListSubheader component="div">
            <h2>Продукция компании:</h2>
          </ListSubheader>
        </ImageListItem>
        {itemData.map((item) => (
          <ImageListItem
            key={item.img}
            sx={{ width: 350, marginBottom: 6, padding: 8 }}
          >
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.title}
              subtitle={item.price}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${item.title}`}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Layout>
  );
}

const itemData = [
  {
    img: "https://tvoyastihiya.ru/upload/resize_cache/iblock/b77/450_450_140cd750bba9870f18aada2478b24840a/5olexjps6wu56cqsu4fk7f5lox6fhefm.jpeg",
    title: "Ботинки с/б ID (zansetsu) 24",
    price: 22370,
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "https://tvoyastihiya.ru/upload/resize_cache/iblock/0d4/450_450_140cd750bba9870f18aada2478b24840a/r8do0g0ps8ku6hswhucnyqsom6z3fjuu.jpg",
    title: "Крепления с/б DS (multi color) 24",
    price: 38960,
  },
  {
    img: "https://tvoyastihiya.ru/upload/resize_cache/iblock/609/450_450_140cd750bba9870f18aada2478b24840a/qveoa7r6eikle89ym8xd30g66siuht24.jpeg",
    title: "Крепления с/б  PR (black/red) 24",
    price: 20320,
  },
  {
    img: "https://tvoyastihiya.ru/upload/resize_cache/iblock/60c/450_450_140cd750bba9870f18aada2478b24840a/5yoc5xhbf2dxuxrdmwnk2m2i1l07rdq9.jpg",
    title: "Маска Line Miner L (matte white/prizm snow sapphire iridium) 24",
    price: 15160,
    cols: 2,
  },
  {
    img: "https://tvoyastihiya.ru/upload/resize_cache/iblock/ee4/450_450_140cd750bba9870f18aada2478b24840a/q3n66ktzqriohkpzg4z30nake86bgbhu.png",
    title: "Шлем (blackboard) 24",
    price: 5600,
    cols: 2,
  },
  {
    img: "https://tvoyastihiya.ru/upload/resize_cache/iblock/a46/450_450_140cd750bba9870f18aada2478b24840a/tbmc6bnh70akghmud4vjn1xdjl7agl58.png",
    title: "Маска XL (discovery/blue mci+storm) 24",
    price: 18000,
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "https://tvoyastihiya.ru/upload/resize_cache/iblock/5bd/450_450_140cd750bba9870f18aada2478b24840a/cj8gncbtrxoyfnnuv116sag1zlkcjyy9.png",
    title: "Вейкборд Clutch 23",
    price: 27590,
  },
  {
    img: "https://tvoyastihiya.ru/upload/resize_cache/iblock/272/450_450_140cd750bba9870f18aada2478b24840a/m3dhce9u50ejbxkgqt8urq77svmo2mbe.jpg",
    title: "Куртка Damien Jr (tile blue) 24",
    price: 12310,
  },
  {
    img: "https://tvoyastihiya.ru/upload/resize_cache/iblock/3f7/450_450_140cd750bba9870f18aada2478b24840a/g3cbe2tk1gogophgz0wfaixjwe8n2yk4.jpg",
    title: "Шапка Эверест (роял) 25",
    price: 1790,
    rows: 2,
    cols: 2,
  },
  {
    img: "https://tvoyastihiya.ru/upload/resize_cache/iblock/ff2/450_450_140cd750bba9870f18aada2478b24840a/dm3i26u65l82kbtjfw37g5ad8fknwwh3.jpg",
    title: "Ботинки с/б VR Speed (black) 23",
    price: 30150,
  },
  {
    img: "https://tvoyastihiya.ru/upload/resize_cache/iblock/3d3/450_450_140cd750bba9870f18aada2478b24840a/5kusa4bs5cnzpm3cv5xomnggc9r6sr4d.jpg",
    title: "Ботинки с/б HB Boa (black) 23",
    price: 26490,
  },
  {
    img: "https://tvoyastihiya.ru/upload/resize_cache/iblock/815/450_450_140cd750bba9870f18aada2478b24840a/hzwg1d47v56ugdhk470iacyu5v1fjq4s.jpg",
    title: "Винт поворотный для стрепа нижний 24",
    price: 700,
    cols: 2,
  },
];
