import {
  Timeline,
  TimelineSeparator,
  TimelineConnector,
  TimelineItem,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import { Stack } from "@mui/material";

const TimlineMUI = () => {
  return (
    <Stack spacing={2}>
      <Timeline>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent> Year 2000 - 2014 </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent> Year 2014 - 2016 </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
          </TimelineSeparator>
          <TimelineContent> Year 2016 - Now </TimelineContent>
        </TimelineItem>
      </Timeline>
      <Timeline>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="secondary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent> Year 2000 - 2014 </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="secondary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent> Year 2014 - 2016 </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="secondary" />
          </TimelineSeparator>
          <TimelineContent> Year 2016 - Now </TimelineContent>
        </TimelineItem>
      </Timeline>
      <Timeline>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="secondary" variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent> Year 2000 - 2014 </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="secondary" variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent> Year 2014 - 2016 </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="secondary" variant="outlined" />
          </TimelineSeparator>
          <TimelineContent> Year 2016 - Now </TimelineContent>
        </TimelineItem>
      </Timeline>
      <Timeline position="left">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="secondary" variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent> Year 2000 - 2014 </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="secondary" variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent> Year 2014 - 2016 </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="secondary" variant="outlined" />
          </TimelineSeparator>
          <TimelineContent> Year 2016 - Now </TimelineContent>
        </TimelineItem>
      </Timeline>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="secondary" variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent> Year 2000 - 2014 </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="secondary" variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent> Year 2014 - 2016 </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="secondary" variant="outlined" />
          </TimelineSeparator>
          <TimelineContent> Year 2016 - Now </TimelineContent>
        </TimelineItem>
      </Timeline>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent color="success.light">
            Freelancer
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="secondary" variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent> Year 2000 - 2014 </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="success.light">
            Amazon
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="secondary" variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent> Year 2014 - 2016 </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="success.light">
            Meta
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="secondary" variant="outlined" />
          </TimelineSeparator>
          <TimelineContent> Year 2016 - Now </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Stack>
  );
};

export default TimlineMUI;
