import { Favorite, Home, Person } from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction, Typography } from "@mui/material";
import { useState } from "react";

const BottomNavigationMUI = () => {
  const [value, setValue] = useState(0);
  return (
    <>
    {value === 0 && <HomePage />}
    {value === 1 && <FavoritePage />}
    {value === 2 && <UserPage />}
      <BottomNavigation
        sx={{
          width: "100%",
          position: "absolute",
          bottom: 0,
          backgroundColor: "#D7DBFE",
        }}
        value={value}
        onChange={(e, newValue) => setValue(newValue)}
      >
        <BottomNavigationAction onClick={() => setValue(0)} icon={<Home />} label="Home" />
        <BottomNavigationAction onClick={() => setValue(1)} icon={<Favorite />} label="Favorite" />
        <BottomNavigationAction onClick={() => setValue(2)} icon={<Person />} label="User" />
      </BottomNavigation>
      {/* <BottomNavigation
        sx={{
          width: "100%",
          position: "absolute",
          bottom: 50,
          backgroundColor: "whitesmoke",
        }}
        value={value}
        showLabels
        onChange={(e, newValue) => setValue(newValue)}
      >
        <BottomNavigationAction icon={<Home />} label="Home" />
        <BottomNavigationAction icon={<Favorite />} label="Favorite" />
        <BottomNavigationAction icon={<Person />} label="User" />
      </BottomNavigation> */}
    </>
  );
};

export default BottomNavigationMUI;

const HomePage =() => <Typography textAlign={"center"} variant="h4" component={"h1"}>Home Page</Typography>
const UserPage =() => <Typography textAlign={"center"} variant="h4" component={"h1"}>User Page</Typography>
const FavoritePage =() => <Typography textAlign={"center"} variant="h4" component={"h1"}>Favorite Page</Typography>
