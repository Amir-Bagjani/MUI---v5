import { Stack, TextField } from "@mui/material";
import { DatePicker, TimePicker, DateTimePicker } from "@mui/x-date-pickers";
import { useState } from "react";

const DatePickerMUI = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<Date | null>(null);
  const [selectedDateTime, setSelectedDateTime] = useState<Date | null>(null);

  console.log({ selectedDateTime });

  return (
    <Stack spacing={4} width={250}>
      <DatePicker
        label="date picker"
        renderInput={({ ...props }) => <TextField {...props} />}
        value={selectedDate}
        onChange={(newValue: Date | null) => setSelectedDate(newValue)}
      />
      <TimePicker
        label="Time picker"
        renderInput={({ ...props }) => <TextField {...props} />}
        value={selectedTime}
        onChange={(newValue: Date | null) => setSelectedTime(newValue)}
      />
      <DateTimePicker
        label="DateTime picker"
        renderInput={({ ...props }) => <TextField {...props} />}
        value={selectedDateTime}
        onChange={(newValue: Date | null) => setSelectedDateTime(newValue)}
      />
    </Stack>
  );
};

export default DatePickerMUI;
