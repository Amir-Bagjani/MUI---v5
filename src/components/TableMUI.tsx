import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableCell,
  Paper,
  TableRow,
  Box,
  Stack,
} from "@mui/material";

const TableMUI = () => {
  return (
    <Stack spacing={3}>
      <TableContainer component={Paper} sx={{ maxWidth: 900, width: "100%" }}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow sx={{ bgcolor: "common.black", color: "common.white" }}>
              <TableCell sx={{ color: "common.white" }}>ID</TableCell>
              <TableCell sx={{ color: "common.white" }}>First Name</TableCell>
              <TableCell sx={{ color: "common.white" }}>Last Name</TableCell>
              <TableCell sx={{ color: "common.white" }} align="center">
                Email
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow
                key={item.id}
                sx={{ "&: last-child td, &: last-child th": { border: 0 } }}
              >
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.first_name}</TableCell>
                <TableCell>{item.last_name}</TableCell>
                <TableCell align="center">{item.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TableContainer component={Paper} sx={{ maxWidth: 900, width: "100%", maxHeight: 250 }}>
        <Table aria-label="simple table" stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell sx={{fontWeight: "bold"}}>ID</TableCell>
              <TableCell sx={{fontWeight: "bold"}}>First Name</TableCell>
              <TableCell sx={{fontWeight: "bold"}}>Last Name</TableCell>
              <TableCell sx={{fontWeight: "bold"}}>Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow
                key={item.id}
                sx={{ "&: last-child td, &: last-child th": { border: 0 } }}
              >
                <TableCell >{item.id}</TableCell>
                <TableCell >{item.first_name}</TableCell>
                <TableCell >{item.last_name}</TableCell>
                <TableCell >{item.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
};

export default TableMUI;

const data = [
  {
    id: 1,
    first_name: "Herbert",
    last_name: "Guerri",
    email: "hguerri0@amazon.co.jp",
  },
  {
    id: 2,
    first_name: "Kaleena",
    last_name: "McGibbon",
    email: "kmcgibbon1@multiply.com",
  },
  {
    id: 3,
    first_name: "Barclay",
    last_name: "Elvy",
    email: "belvy2@de.vu",
  },
  {
    id: 4,
    first_name: "Padriac",
    last_name: "Tutill",
    email: "ptutill3@taobao.com",
  },
  {
    id: 5,
    first_name: "Ephraim",
    last_name: "Gaylard",
    email: "egaylard4@bing.com",
  },
  {
    id: 6,
    first_name: "Corilla",
    last_name: "Utley",
    email: "cutley5@slideshare.net",
  },
  {
    id: 7,
    first_name: "Osgood",
    last_name: "Habard",
    email: "ohabard6@tiny.cc",
  },
  {
    id: 8,
    first_name: "Anselm",
    last_name: "Hodgen",
    email: "ahodgen7@gnu.org",
  },
  {
    id: 9,
    first_name: "Kariotta",
    last_name: "Filipowicz",
    email: "kfilipowicz8@zimbio.com",
  },
  {
    id: 10,
    first_name: "Catina",
    last_name: "Baroch",
    email: "cbaroch9@diigo.com",
  },
];
