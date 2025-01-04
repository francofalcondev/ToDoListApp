import { Colors } from "@/constants/Colors";
import { useState } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { Calendar } from "react-native-calendars";
import Popover from "react-native-popover-view";

export const DueDatePicker = () => {
  const [calendarDueDate, setCalendarDueDate] = useState<string | undefined>(
    undefined,
  );

  return (
    <Popover
      arrowSize={{ width: 0, height: 0 }}
      from={
        <TouchableOpacity>
          <Text>Calendar</Text>
        </TouchableOpacity>
      }
    >
      <Calendar
        onDayPress={(day: { dateString: string }) => {
          setCalendarDueDate(day.dateString);
        }}
        markedDates={{
          [calendarDueDate || ""]: {
            selected: true,
            disableTouchEvent: true,
            selectedDotColor: Colors.buttonColorPrimary,
          },
        }}
      />
      <Text>{calendarDueDate}</Text>
    </Popover>
  );
};
