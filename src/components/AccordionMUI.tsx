import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

const AccordionMUI = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleExpand = (isExpanded: boolean, panel: string) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion>
        <AccordionSummary
          id="panel1-header"
          aria-controls="panel1-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            expedita tempore blanditiis, aperiam magnam animi minima natus
            aspernatur provident quisquam, voluptatem placeat quod cumque quam
            similique architecto porro veritatis vero.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          id="panel2-header"
          aria-controls="panel2-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            expedita tempore blanditiis, aperiam magnam animi minima natus
            aspernatur provident quisquam, voluptatem placeat quod cumque quam
            similique architecto porro veritatis vero.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          id="panel3-header"
          aria-controls="panel3-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            expedita tempore blanditiis, aperiam magnam animi minima natus
            aspernatur provident quisquam, voluptatem placeat quod cumque quam
            similique architecto porro veritatis vero.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Typography variant="h5" mt={3}>
        controlled expandable
      </Typography>

      <Box my={2}>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={(_e, isExpanded) => handleExpand(isExpanded, "panel1")}
        >
          <AccordionSummary
            id="panel1-header"
            aria-controls="panel1-content"
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography>Accordion 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae expedita tempore blanditiis, aperiam magnam animi
              minima natus aspernatur provident quisquam, voluptatem placeat
              quod cumque quam similique architecto porro veritatis vero.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={(_e, isExpanded) => handleExpand(isExpanded, "panel2")}
        >
          <AccordionSummary
            id="panel2-header"
            aria-controls="panel2-content"
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography>Accordion 2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae expedita tempore blanditiis, aperiam magnam animi
              minima natus aspernatur provident quisquam, voluptatem placeat
              quod cumque quam similique architecto porro veritatis vero.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={(_e, isExpanded) => handleExpand(isExpanded, "panel3")}
        >
          <AccordionSummary
            id="panel3-header"
            aria-controls="panel3-content"
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography>Accordion 3</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae expedita tempore blanditiis, aperiam magnam animi
              minima natus aspernatur provident quisquam, voluptatem placeat
              quod cumque quam similique architecto porro veritatis vero.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </div>
  );
};

export default AccordionMUI;
