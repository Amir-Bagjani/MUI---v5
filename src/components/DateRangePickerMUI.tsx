import { Box, TextField } from "@mui/material";

import { StaticDateRangePicker, DateRange } from "@mui/x-date-pickers-pro";
import { useState } from "react";

const DateRangePickerMUI = () => {
  const [selectedDate, setSelectedDate] = useState<DateRange<Date>>([
    null,
    null,
  ]);

  console.log({selectedDate})

  return (
    <Box >
      <StaticDateRangePicker
        displayStaticWrapperAs="desktop"
        value={selectedDate}
        onChange={(newValue) => {
          setSelectedDate(newValue);
        }}
        renderInput={(startProps, endProps) => (
          <>
            <TextField {...startProps} />
            <Box sx={{ mx: 2 }}> to </Box>
            <TextField {...endProps} />
          </>
        )}
      />
    </Box>
  );
};

export default DateRangePickerMUI;
