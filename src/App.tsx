import { Header, Navbar } from "./components";
import Grid from '@mui/material/Grid';
import { Route, Routes } from "react-router-dom";
import { Authentication, Database, Functions, Hosting, MachineLearning, Storage } from "./pages";
import { Box } from "@mui/material";

function App() {
  return (
    <Grid container>
      <Navbar />
      <Box ml="250px" width="100%">
        <Header />
        <Routes>
          <Route path='/authentication' element={<Authentication />} />
          <Route path='/database' element={<Database />} />
          <Route path='/functions' element={<Functions />} />
          <Route path='/hosting' element={<Hosting />} />
          <Route path='/machine-learning' element={<MachineLearning />} />
          <Route path='/storage' element={<Storage />} />
        </Routes>
      </Box>
    </Grid>
  );
}

export default App;
