// import { LocalizationProvider } from "@mui/x-date-pickers"
// import { LocalizationProvider } from '@mui/x-date-pickers-pro';
// import AdapterDateFns from "@mui/lab/AdapterDateFns"
// import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns"
// import { AdapterDateFns } from '@mui/x-date-pickers-pro/AdapterDateFns';

import { colors, createTheme, ThemeProvider } from "@mui/material";
// import { deepOrange } from "@mui/material/colors";
import "./App.css";
// import MasonryMUI from "./components/MasonryMUI";
import ResponsiveMUI from "./components/ResponsiveMUI";
// import TimlineMUI from "./components/TimlineMUI";
// import TabMUI from "./components/TabMUI";
// import DatePickerMUI from "./components/DatePickerMUI";
// import DateRangePickerMUI from "./components/DateRangePickerMUI";
// import LoadingButtonMUI from './components/LoadingButtonMUI';
// import DialogMui from './components/DialogMui';
// import ProgressMUI from './components/ProgressMUI';
// import SkeletonMUI from './components/SkeletonMUI';
// import AlertMUI from './components/AlertMUI';
// import SnackbarMUI from './components/SnackbarMUI';
// import TableMUI from './components/TableMUI';
// import TooltipMUI from './components/TooltipMUI';
// import ChipMUI from './components/ChipMUI';
// import BadgeMUI from './components/BadgeMUI';
// import ListMUI from './components/ListMUI';
// import AvatarMUI from './components/AvatarMUI';
// import BottomNavigationMUI from './components/BottomNavigationMUI';
// import BreadcrumbsMUI from './components/BreadcrumbsMUI';
// import DrawerMUI from './components/DrawerMUI';
// import LinkMUI from './components/LinkMUI';
// import AccordionMUI from './components/AccordionMUI';
// import ImageListMUI from './components/ImageListMUI';
// import NavbarMUI from './components/NavbarMUI';
// import SpeedDialMUI from './components/SpeedDialMUI';
// import CardMUI from './components/CardMUI';
// import PaperMUI from './components/PaperMUI';
// import GridMUI from './components/GridMUI';
// import AutocompleteMUI from './components/AutocompleteMUI';
// import BoxMUI from './components/BoxMUI';
// import StackMUI from './components/StackMUI';
// import RatingMUI from './components/RatingMUI';
// import SwitchMUI from './components/SwitchMUI';
// import CheckBoxMUI from './components/CheckBoxMUI';
// import RaidoBtnMUI from './components/RaidoBtnMUI';
// import SelectMUI from './components/SelectMUI';
// import TextFieldMUI from './components/TextFieldMUI';
// import ToggleButonMUI from './components/ToggleButonMUI';
// import ButtonMUI from './components/ButtonMUI';
// import TypographyComponent from './components/TypographyComponent';

const theme = createTheme({
  status: {
    danger: "crimson",
  },
  palette: {
    primary: {
      main: colors.yellow[500],
      // light: colors.deepOrange[300],
      // dark: colors.deepOrange[900],
    },
    projectMainColor: {
      main: colors.cyan[500],
      light: colors.cyan[200],
      veryLight: colors.cyan[50],
      veryDark: colors.cyan[900],
    }
  },
});

function App(): JSX.Element {
  return (
    // <LocalizationProvider dateAdapter={AdapterDateFns}>
    <ThemeProvider theme={theme}>
    <div className="App">
      {/* <TypographyComponent /> */}
      {/* <ButtonMUI /> */}
      {/* <ToggleButonMUI /> */}
      {/* <TextFieldMUI /> */}
      {/* <SelectMUI /> */}
      {/* <RaidoBtnMUI /> */}
      {/* <CheckBoxMUI /> */}
      {/* <SwitchMUI /> */}
      {/* <RatingMUI /> */}
      {/* <AutocompleteMUI /> */}
      {/* <BoxMUI /> */}
      {/* <StackMUI /> */}
      {/* <GridMUI /> */}
      {/* <PaperMUI /> */}
      {/* <CardMUI /> */}
      {/* <AccordionMUI /> */}
      {/* <ImageListMUI /> */}
      {/* <NavbarMUI /> */}
      {/* <LinkMUI /> */}
      {/* <BreadcrumbsMUI />  */}
      {/* <DrawerMUI /> */}
      {/* <SpeedDialMUI /> */}
      {/* <BottomNavigationMUI /> */}
      {/* <AvatarMUI /> */}
      {/* <BadgeMUI /> */}
      {/* <ListMUI /> */}
      {/* <ChipMUI /> */}
      {/* <TooltipMUI /> */}
      {/* <TableMUI /> */}
      {/* <AlertMUI /> */}
      {/* <SnackbarMUI /> */}
      {/* <DialogMui /> */}
      {/* <ProgressMUI /> */}
      {/* <SkeletonMUI /> */}
      {/* <LoadingButtonMUI /> */}
      {/* <DatePickerMUI /> */}
      {/* <DateRangePickerMUI /> */}
      {/* <TabMUI /> */}
      {/* <TimlineMUI /> */}
      {/* <MasonryMUI /> */}
      <ResponsiveMUI />
    </div>
    </ThemeProvider>
  );
}

export default App;
// </LocalizationProvider>
