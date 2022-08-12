import { Face, Person } from "@mui/icons-material";
import { Stack, Chip, Avatar, Typography } from "@mui/material";
import { useState } from "react";

const f = ["color", "size", "price"];

const ChipMUI = () => {
  const [filter, setFilter] = useState<string[]>(f);

  console.log({ filter });

  const handleDelete = (fchip: string) => {
    setFilter(filter.filter((chip) => chip !== fchip));
  };

  return (
    <Stack spacing={3}>
      <Stack spacing={1} direction="row">
        <Chip label="chip" />
        <Chip label="chip" color="primary" />
        <Chip label="chip" color="error" />
        <Chip label="chip" sx={{ bgcolor: "error.light" }} />
        <Chip label="chip" color="error" size="small" />
        <Chip label="chip" color="primary" avatar={<Avatar>AB</Avatar>} />
        <Chip label="chip" color="secondary" icon={<Face />} />
      </Stack>
      <Stack spacing={1} direction="row">
        <Chip label="chip" variant="outlined" />
        <Chip label="chip" color="primary" variant="outlined" />
        <Chip label="chip" color="error" variant="outlined" />
        <Chip label="chip" color="secondary" variant="outlined" />
        <Chip label="chip" sx={{ bgcolor: "error.light" }} variant="outlined" />
        <Chip label="chip" color="error" size="small" variant="outlined" />
        <Chip
          label="chip"
          color="error"
          variant="outlined"
          avatar={<Avatar>AB</Avatar>}
        />
        <Chip label="chip" color="primary" variant="outlined" icon={<Face />} />
      </Stack>
      <Stack spacing={1} direction="row">
        <Chip
          label=" clickable chip"
          variant="outlined"
          onClick={() => alert("clicked on chip")}
        />
        <Chip
          label=" clickable chip"
          color={"primary"}
          onClick={() => alert("clicked on chip")}
        />
        <Chip
          label=" deletable chip"
          onDelete={() => alert("delete handler called")}
          color={"primary"}
          onClick={() => alert("clicked on chip")}
        />
        <Chip
          label=" deletable chip"
          icon={<Person />}
          onDelete={() => alert("delete handler called")}
          color={"primary"}
          onClick={() => alert("clicked on chip")}
        />
        <Chip
          label=" deletable chip"
          avatar={
            <Avatar
              src="https://randomuser.me/api/portraits/women/79.jpg"
              alt="Jane Doe"
            />
          }
          onDelete={() => alert("delete handler called")}
          color={"error"}
          onClick={() => alert("clicked on chip")}
        />
        <Chip
          label=" deletable chip"
          avatar={
            <Avatar
              src="https://randomuser.me/api/portraits/women/79.jpg"
              alt="Jane Doe"
            />
          }
          onDelete={() => alert("delete handler called")}
          color={"warning"}
          onClick={() => alert("clicked on chip")}
        />
      </Stack>
      <Typography>Filter</Typography>
      <Stack spacing={1} direction="row">
        {filter.map((chip) => (
          <Chip label={chip} key={chip} onDelete={() => handleDelete(chip)} />
        ))}
      </Stack>
    </Stack>
  );
};

export default ChipMUI;
