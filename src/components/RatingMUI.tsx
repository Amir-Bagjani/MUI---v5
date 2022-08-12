import { Stack, Rating, Typography } from "@mui/material";
import { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";


const RatingMUI = () => {
  const [rating, setRating] = useState<number | null>(3.5);
  console.log({ rating });

  const handleChange = (_e: React.ChangeEvent<{}>, newValue: number | null) => {
    setRating(newValue);
  };
  return (
    <Stack spacing={2}>
      <Rating value={rating} onChange={handleChange} />
      <Rating
        value={rating}
        onChange={handleChange}
        precision={0.5}
        size="large"
      />
      <Typography>Readonly one</Typography>
      <Rating
        value={rating}
        readOnly
        precision={0.5}
        size="large"
      />
      <Rating
        value={rating}
        onChange={handleChange}
        precision={0.5}
        icon={<FavoriteIcon color="error" />}
        emptyIcon={<FavoriteBorderIcon />}
      />
      <Rating
        value={rating}
        onChange={handleChange}
        icon={<FavoriteIcon color="error" />}
        emptyIcon={<FavoriteBorderIcon />}
        highlightSelectedOnly
      />
    </Stack>
  );
};

export default RatingMUI;
