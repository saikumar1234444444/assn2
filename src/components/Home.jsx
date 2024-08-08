import React from "react";
import "./Home.css";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import Grid from "@mui/material/Grid";
import one from "../components/assets/one.jpeg";
import two from "../components/assets/two.jpeg";
import three from "../components/assets/three.jpeg";
import four from "../components/assets/four.jpeg";
import five from "../components/assets/five.jpeg";
import six from "../components/assets/six.jpeg";
import seven from "../components/assets/seven.jpeg";
import eight from "../components/assets/eight.jpeg";
import nine from "../components/assets/nine.jpeg";
import ten from "../components/assets/ten.jpeg";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Slider from "@mui/material/Slider";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Box from '@mui/material/Box';


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
  },
  {
    id: 2,
    title: "Naga Muchalinda",
    description:
      "The Vinaya Pitaka, during the forty-nine days of contemplation by Buddha before he attained enlightenment. In the third...",
    time: 200,
    image: two,
    region: "hyderabad",
    material: "stone",
  },
  {
    id: 3,
    title: "Naga Muchalinda",
    description:
      "The Vinaya Pitaka, during the forty-nine days of contemplation by Buddha before he attained enlightenment. In the third...",
    time: 300,
    image: three,
    region: "hyderabad",
    material: "copper",
  },
  {
    id: 4,
    title: "Naga Muchalinda",
    description:
      "The Vinaya Pitaka, during the forty-nine days of contemplation by Buddha before he attained enlightenment. In the third...",
    time: 400,
    image: four,
    region: "mumbai",
    material: "copper",
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
  },
  {
    id: 8,
    title: "Lakshmi",
    description:
      "Goddess Lakshmi or Mahalakshmi is the consort of Vishnu. She is the resplendent goddess of wealth and prosperity who...",
    time: 800,
    image: eight,
    region: "hyderabad",
    material: "copper",
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
  console.log(items,'res');

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
    if (event.target.value !== "") {
      const result = items.filter((each) =>
        each.title.toLowerCase().includes(search)
      );
      setItems(result);
    } else {
      setItems(idolsArray);
    }
  };

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
    
    let result=items
    if(material==='All' && region!=='All'){
        console.log('one')
         result= idolsArray.filter(
            (each) =>
              each.time > value[0] &&
              each.time < value[1]
               &&
              each.region.toLowerCase() === region.toLowerCase()
          )
          
    }
    else if(region==='All' && material!=='All'){
        console.log('two')
         result= idolsArray.filter(
            (each) =>
              each.time > value[0] &&
              each.time < value[1]
               &&
              each.material.toLowerCase() === material.toLowerCase()
          )
        
    }
    else if(material==='All'&& region==='All'){
        console.log('three')
         result=idolsArray.filter(
            (each) =>
              each.time > value[0] &&
              each.time < value[1])  
                  
    }
    else{
        console.log('four')
        
         result = idolsArray.filter(
            (each) =>
              each.time > value[0] &&
              each.time < value[1]
               &&
              each.material.toLowerCase() === material.toLowerCase()
               &&
              each.region.toLowerCase() === region.toLowerCase()
          );
          

    }
    setItems(result); 
    
  };

 const clearItems=()=>{
    setValue([0,1400])
    setRegion('All')
    setMaterial('All')
    setItems(idolsArray)
  }
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
            <p>FILTERS</p>
          </div>
        </div>
        <button className="button">SURPRISE ME</button>
      </div>
      <Grid
        container
        gap={5}
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          width: "90%",
          marginTop: "30px",
        }}
      >
        {items.map((each) => (
          <Grid
            item
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              flexGrow: 1,
            }}
            xs={8}
            sm={4}
            md={4}
            lg={2}
          >
            <div className="div">
              <img src={each.image} className="img" />
              <h1 className="heading">{each.title}</h1>
              <p xlassName="description">{each.description}</p>
              <p>{each.time}</p>
            </div>
          </Grid>
        ))}
      </Grid>
      <SwipeableDrawer onClose={closeDrawer} open={open} anchor="right">
        <Box
          sx={{
            backgroundColor: "white",
            height: "100vh",
            width:{xs:'300px',sm:'400px'},
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <h1 className="filterText">Search by filter</h1>
          <p className="filterLabel">select period</p>
          <Box sx={{ width:{xs:'280px',sm:'300px'} }}>
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
          <div className="btnContainer">
            <p onClick={clearItems} style={{cursor:'pointer'}}>clear all</p>
            <button onClick={handleApplyFilter}>apply</button>
          </div>
        </Box>
      </SwipeableDrawer>
    </div>
  );
};

export default Home;
