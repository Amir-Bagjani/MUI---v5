import { NavigateNext } from "@mui/icons-material";
import { Box, Breadcrumbs, Typography, Link } from "@mui/material";

const BreadcrumbsMUI = () => {
  return (
    <Box m={2}>
      <Breadcrumbs aria-label="breadcrumbs">
        <Link href="#">Home</Link>
        <Link href="#">Catalog</Link>
        <Link href="#">Accessories</Link>
        <Typography color="text.primary">Shoes</Typography>
      </Breadcrumbs>
      <Breadcrumbs aria-label="breadcrumbs" separator="-">
        <Link href="#">Home</Link>
        <Link href="#">Catalog</Link>
        <Link href="#">Accessories</Link>
        <Typography color="text.primary">Shoes</Typography>
      </Breadcrumbs>
      <Breadcrumbs
        aria-label="breadcrumbs"
        separator={<NavigateNext color="warning" fontSize="small" />}
      >
        <Link href="#">Home</Link>
        <Link href="#">Catalog</Link>
        <Link href="#">Accessories</Link>
        <Typography color="text.primary">Shoes</Typography>
      </Breadcrumbs>
      <Breadcrumbs
        aria-label="breadcrumbs"
        separator={<NavigateNext color="warning" fontSize="small" />}
        maxItems={2}
      >
        <Link href="#">Home</Link>
        <Link href="#">Catalog</Link>
        <Link href="#">Accessories</Link>
        <Typography color="text.primary">Shoes</Typography>
      </Breadcrumbs>
      <Breadcrumbs
        aria-label="breadcrumbs"
        separator={<NavigateNext color="warning" fontSize="small" />}
        maxItems={2}
        itemsAfterCollapse={2}
      >
        <Link href="#">Home</Link>
        <Link href="#">Catalog</Link>
        <Link href="#">Accessories</Link>
        <Typography color="text.primary">Shoes</Typography>
      </Breadcrumbs>
      <Breadcrumbs
        aria-label="breadcrumbs"
        separator={<NavigateNext color="warning" fontSize="small" />}
        maxItems={2}
        itemsBeforeCollapse={2}
      >
        <Link href="#">Home</Link>
        <Link href="#">Catalog</Link>
        <Link href="#">Accessories</Link>
        <Typography color="text.primary">Shoes</Typography>
      </Breadcrumbs>
    </Box>
  );
};

export default BreadcrumbsMUI;
