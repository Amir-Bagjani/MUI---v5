import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
  Stack,
  CardHeader,
  Avatar,
  IconButton,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { red, pink, grey } from '@mui/material/colors';

const CardMUI = () => {
  return (
    <Stack spacing={2} direction="row">
      <Box width="300px">
        <Card>
          <CardMedia
            component="img"
            height={"180px"}
            image="https://source.unsplash.com/random"
            alt="unsplash image"
          />
          <CardContent>
            <Typography variant="h5" component="p" gutterBottom>
              React
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
              expedita laborum incidunt ullam! Perferendis, cupiditate.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" variant="text">
              Share
            </Button>
            <Button size="small" variant="text">
              Leran more
            </Button>
          </CardActions>
        </Card>
      </Box>
      <Box width="300px">
        <Card>
          <CardHeader
          sx={{color: grey[700]}}
            title="Everything about React"
            subheader={new Date().toLocaleString()}
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            avatar={
              <Avatar sx={{ bgcolor: "primary.light" }} aria-label="recipe">
                AB
              </Avatar>
            }
          />
          <CardMedia
            component="img"
            height={"180px"}
            image="https://source.unsplash.com/random"
            alt="unsplash image"
          />
          <CardContent>
            <Typography variant="h5" component="p" gutterBottom>
              React
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
              expedita laborum incidunt ullam! Perferendis, cupiditate.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" variant="text">
              Share
            </Button>
            <Button size="small" variant="text">
              Leran more
            </Button>
          </CardActions>
        </Card>
      </Box>
    </Stack>
  );
};

export default CardMUI;
