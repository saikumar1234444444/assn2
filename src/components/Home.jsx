import React from "react";
import "./Home.css";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import Grid from "@mui/material/Grid";
import one from "../components/assets/one.png";
import two from "../components/assets/two.png";
import three from "../components/assets/three.png";
import four from "../components/assets/four.png";
import five from "../components/assets/five.png";
import six from "../components/assets/six.png";
import seven from "../components/assets/seven.png";
import eight from "../components/assets/eight.png";
import nine from "../components/assets/nine.png";
import ten from "../components/assets/ten.png";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Slider from "@mui/material/Slider";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

const idolsArray = [
  {
    id: 1,
    title: "Scenes from Buddha's Life",
    description:
      "The tradition of the portrayal of Buddha's life continued to flourish in different artistic traditions",
    time: 100,
    image: one,
    region: "banglore",
    material: "stone",
    likes: 1,
  },
  {
    id: 2,
    title: "Naga Muchalinda",
    description:
      "The Vinaya Pitaka, during the forty-nine days of contemplation by Buddha before he attained enlightenment.",
    time: 200,
    image: two,
    region: "hyderabad",
    material: "stone",
    likes: 1,
  },
  {
    id: 3,
    title: "Naga Muchalinda",
    description:
      "The Vinaya Pitaka, during the forty-nine days of contemplation by Buddha before he attained enlightenment. ",
    time: 300,
    image: three,
    region: "hyderabad",
    material: "copper",
    likes: 4,
  },
  {
    id: 4,
    title: "Naga Muchalinda",
    description:
      "The Vinaya Pitaka, during the forty-nine days of contemplation by Buddha before he attained enlightenment. ",
    time: 400,
    image: four,
    region: "mumbai",
    material: "copper",
    likes: 4,
  },
  {
    id: 5,
    title: "Mahisasurmardini",
    description:
      'Mahishasura is a Sanskrit word composed of mahisha meaning buffalo and asura meaning demon, or "buffalo...',
    time: 500,
    image: five,
    region: "banglore",
    material: "stone",
    likes: 1,
  },
  {
    id: 6,
    title: "Maitreya Buddha",
    description:
      "Maitreya, the future Buddha to be, resides in the Tushita heaven as a bodhisattva waiting to redeem humanity.",
    time: 600,
    image: six,
    region: "banglore",
    material: "gold",
    likes: 3,
  },
  {
    id: 7,
    title: "Harihara",
    description:
      "Harihara, in Hinduism, is a deity combining the two major gods Vishnu (Hari) and Shiva (Hara). Images of...",
    time: 700,
    image: seven,
    region: "banglore",
    material: "gold",
    likes: 3,
  },
  {
    id: 8,
    title: "Lakshmi",
    description:
      "Goddess Lakshmi or Mahalakshmi is the consort of Vishnu. She is the resplendent goddess of wealth and prosperity",
    time: 800,
    image: eight,
    region: "hyderabad",
    material: "copper",
    likes: 3,
  },
  {
    id: 9,
    title: "Simhanada Lokeshvara",
    description:
      "Simhanada Lokeshvara, a form of Avalokiteshvara, is identified by the presence of a crouching lion as the...",
    time: 900,
    image: nine,
    region: "hyderabad",
    material: "gold",
    likes: 3,
  },
  {
    id: 10,
    title: "Votive Tablet with Buddha",
    description:
      "During the Pala period, clay tablets were made in a number of square and quadrangular shapes and sizes with...",
    time: 1000,
    image: ten,
    region: "mumbai",
    material: "gold",
    likes: 0,
  },
];

const marks = [
  {
    value: 100,
    label: "100",
  },
  {
    value: 300,
    label: "300",
  },
  {
    value: 600,
    label: "600",
  },
  {
    value: 900,
    label: "900",
  },
  {
    value: 1200,
    label: "1200",
  },
];
let beforeChange = null;
const Home = () => {
  const [search, setSearch] = React.useState("");
  const [items, setItems] = React.useState(idolsArray);
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState([0, 1400]);
  const [region, setRegion] = React.useState("All");
  const [material, setMaterial] = React.useState("All");

  const handleChangeCommitted = () => {
    beforeChange = null;
  };

  const handleChange = (event, newValue) => {
    if (!beforeChange) {
      beforeChange = [...value];
    }

    if (beforeChange[0] !== newValue[0] && beforeChange[1] !== newValue[1]) {
      return;
    }
    setValue(newValue);
  };

  function valuetext(event, value) {
    return value;
  }

  const handleChangeMaterial = (event) => {
    setMaterial(event.target.value);
  };

  const handleSearchItem = (event) => {
    setSearch(event.target.value);
  };

  let searchs = items.filter((each) =>
    each.title.toLowerCase().includes(search.toLocaleLowerCase())
  );

  const toggleDrawewr = () => {
    setOpen(true);
  };

  const closeDrawer = () => {
    setOpen(false);
  };

  const handleChangeRegion = (event) => {
    setRegion(event.target.value);
  };

  const handleApplyFilter = () => {
    let result = searchs;
    if (material === "All" && region !== "All") {
      result = idolsArray.filter(
        (each) =>
          each.time > value[0] &&
          each.time < value[1] &&
          each.region.toLowerCase() === region.toLowerCase()
      );
    } else if (region === "All" && material !== "All") {
      result = idolsArray.filter(
        (each) =>
          each.time > value[0] &&
          each.time < value[1] &&
          each.material.toLowerCase() === material.toLowerCase()
      );
    } else if (material === "All" && region === "All") {
      result = idolsArray.filter(
        (each) => each.time > value[0] && each.time < value[1]
      );
    } else {
      result = idolsArray.filter(
        (each) =>
          each.time > value[0] &&
          each.time < value[1] &&
          each.material.toLowerCase() === material.toLowerCase() &&
          each.region.toLowerCase() === region.toLowerCase()
      );
    }
    setItems(result);
    setOpen(false);
  };

  const clearItems = () => {
    setValue([0, 1400]);
    setRegion("All");
    setMaterial("All");
    setItems(idolsArray);
    setOpen(false);
  };
  return (
    <div className="bgContainer">
      <div className="searchBox">
        <div className="inputFilter">
          <TextField
            onChange={handleSearchItem}
            variant="outlined"
            sx={{
              width: "60%",
              "& .MuiOutlinedInput-root fieldset": {
                borderColor: "#D9D9D9",
              },
              "&:hover fieldset": { borderColor: "#D9D9D9 !important" },
              "& .MuiOutlinedInput-root": {
                "&.MuiInputBase-root fieldset": {
                  borderColor: "#D9D9D9",
                },
              },
              "& ::placeholder": {
                color: "#A8A8A8",
                fontFamily: "sans-serif",
                fontSize: "clamp(12px,2vw,16px)",
              },
              "& .MuiOutlinedInput-root": {
                borderRadius: "10px",
              },
            }}
            placeholder="Search from the worlds antique collection"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              style: {
                height: "50px",
              },
            }}
          />
          <div className="filterBox" onClick={toggleDrawewr}>
            <TuneIcon />
            <p style={{ fontSize: "clamp(12px,2vw,16px" }}>FILTERS</p>
          </div>
        </div>
        <button className="button">SURPRISE ME</button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          width: "90%",
          marginTop: "25px",
          gap: "2px",
        }}
      >
        <Avatar
          style={{
            borderRadius: "2px",
            backgroundColor: "#F3F3F3",
            border: "1px solid #D9D9D9",
            height: "25px",
            width: "25px",
          }}
        >
          <MenuIcon style={{ color: "grey" }} />
        </Avatar>
        <Avatar
          style={{
            borderRadius: "2px",
            backgroundColor: "#F3F3F3",
            border: "1px solid #D9D9D9",
            height: "25px",
            width: "25px",
          }}
        >
          <DashboardIcon style={{ color: "black" }} />
        </Avatar>
      </div>
      {items.length === 0 && <h1>Search result not found</h1>}
      <Grid
        container
        gap={3.4}
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: { xs: "center", sm: "flex-start", md: "flex-start" },
          alignItems: "center",
          width: "90%",
          marginTop: "30px",
        }}
      >
        {searchs.map((each, index) => (
          <Grid
            item
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              flexGrow: 1,
            }}
            xs={9}
            sm={5}
            md={3}
            lg={2.2}
          >
            <div className="div">
              <div className={each.id % 2 === 0 ? "imgDiv" : "imgLight"}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    position: "absolute",
                    alignItems: "center",
                    right: "10px",
                  }}
                >
                  <FavoriteBorderIcon
                    style={{ fontWeight: 200, fontSize: "medium" }}
                  />
                  <p style={{ fontSize: "14px" }}>{each.likes}</p>
                  <VisibilityOutlinedIcon
                    style={{
                      marginLeft: "5px",
                      fontWeight: 200,
                      fontSize: "medium",
                    }}
                  />
                </div>
                <img src={each.image} className="img" />
              </div>
              <div className="textDiv">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <h1 className="heading">{each.title}</h1>
                  <p style={{ fontSize: "clamp(12px,2vw,16px" }}>
                    {each.time} BC
                  </p>
                </div>
                <p className="description">{each.description}</p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <p style={{ fontSize: "clamp(12px,2vw,16px" }}>
                    {each.material}
                  </p>
                  <p style={{ fontSize: "clamp(12px,2vw,16px" }}>
                    {each.region}
                  </p>
                </div>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
      <SwipeableDrawer onClose={closeDrawer} open={open} anchor="right">
        <Box sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
          <Box
            sx={{
              backgroundColor: "white",
              width: { xs: "270px", sm: "400px" },
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <h1 className="filterText">Search by filter</h1>
            <p className="filterLabel">select period</p>
            <Box
              sx={{ width: { xs: "265px", sm: "300px" }, marginTop: "40px" }}
            >
              <Slider
                valueLabelDisplay="on"
                min={0}
                max={1400}
                track="inverted"
                aria-labelledby="track-inverted-range-slider"
                getAriaValueText={valuetext}
                marks={marks}
                value={value}
                onChange={handleChange}
                onChangeCommitted={handleChangeCommitted}
              />
            </Box>
            <p className="filterLabel">select material</p>
            <Select
              sx={{
                border: "none",
                width: "90%",
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
              }}
              id="demo-simple-select-required"
              value={material}
              defaultValue={"All"}
              onChange={handleChangeMaterial}
            >
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="copper">copper</MenuItem>
              <MenuItem value="stone">stone</MenuItem>
              <MenuItem value="gold">gold</MenuItem>
            </Select>
            <p className="filterLabel">select region</p>
            <Select
              sx={{
                border: "none",
                width: "90%",
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
              }}
              id="demo-simple-select-required"
              value={region}
              defaultValue={"All"}
              onChange={handleChangeRegion}
            >
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="hyderabad">hyderabad</MenuItem>
              <MenuItem value="banglore">banglore</MenuItem>
              <MenuItem value="mumbai">mumbai</MenuItem>
            </Select>
          </Box>
          <div className="btnContainer">
            <p
              onClick={clearItems}
              style={{ cursor: "pointer", color: "#A05C38" }}
            >
              Clear All
            </p>
            <button className="applyButton" onClick={handleApplyFilter}>
              apply
            </button>
          </div>
        </Box>
      </SwipeableDrawer>
    </div>
  );
};

export default Home;
