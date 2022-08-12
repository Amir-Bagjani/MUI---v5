import { Typography } from "@mui/material";

const TypographyComponent = () => {
  return (
    <div>
      <Typography variant="h1">H1 element</Typography>
      <Typography variant="h2">H2 element</Typography>
      <Typography variant="h3">H3 element</Typography>
      <Typography variant="h4">H4 element</Typography>
      <Typography variant="h5">H5 element</Typography>
      <Typography variant="h6">H6 element</Typography>

      <Typography variant="h3" component="div">H3 varient with div component</Typography>
      <Typography variant="h5" gutterBottom>
        H5 element with gutter bottom margin
      </Typography>

      <Typography variant="subtitle1">subtitle1 element</Typography>
      <Typography variant="subtitle2">subtitle2 element</Typography>

      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
        numquam recusandae laudantium similique voluptas harum ab voluptatem
        sint ut obcaecati. Quasi maiores itaque, error nisi cupiditate mollitia
        dolor soluta nostrum?
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        delectus dolorum incidunt eligendi, blanditiis aspernatur dolorem
        placeat porro voluptatum soluta consectetur sed quasi! Vero officia sed
        quasi quod, dolorem incidunt.
      </Typography>
    </div>
  );
};

export default TypographyComponent;
