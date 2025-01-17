import { Colors } from "@/constants/Colors";
import { CalendarCheck } from "lucide-react-native";
import { useEffect, useRef, useState } from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { Calendar } from "react-native-calendars";
import Popover, { PopoverPlacement } from "react-native-popover-view";
import { styles } from "./styles";
import { DueDatePickerProps } from "./types";
import {
  format,
  isToday,
  isTomorrow,
  addDays,
  endOfWeek,
  parseISO,
  startOfDay,
} from "date-fns";

export const DueDatePicker = ({ setTaskData }: DueDatePickerProps) => {
  const today = startOfDay(new Date());
  today.setHours(0, 0, 0, 0);
  const todayISO = format(today, "yyyy-MM-dd");

  const [calendarDueDate, setCalendarDueDate] = useState<string | undefined>(
    todayISO,
  );

  useEffect(() => {
    const dataObj = calendarDueDate ? parseISO(calendarDueDate) : undefined;

    setTaskData((prev) => ({
      ...prev,
      dueDate: dataObj,
    }));
  }, [calendarDueDate, setTaskData]);

  const popoverRef = useRef<Popover>(null);
  const dateOptions = [
    { label: "No date", value: undefined },
    { label: "Today", value: todayISO },
    {
      label: "Tomorrow",
      value: format(addDays(today, 1), "yyyy-mm-dd"),
    },
    {
      label: "3 Days Later",
      value: format(addDays(today, 3), "yyyy-MM-dd"),
    },
    {
      label: "This Sunday",
      value: format(endOfWeek(today), "yyyy-MM-dd"),
    },
  ];

  return (
    <Popover
      ref={popoverRef}
      popoverStyle={styles.popoverCalendar}
      placement={PopoverPlacement.CENTER}
      arrowSize={{ width: 0, height: 0 }}
      from={
        <TouchableOpacity>
          <CalendarCheck color={Colors.buttonColorPrimary} />
        </TouchableOpacity>
      }
    >
      <Calendar
        onDayPress={(day: { dateString: string }) => {
          setCalendarDueDate(day.dateString);
        }}
        minDate={format(today, "yyyy-MM-dd")}
        markedDates={{
          [calendarDueDate || ""]: {
            selected: true,
            disableTouchEvent: true,
            selectedDotColor: Colors.colorPrimaryBlue,
          },
        }}
        theme={{
          backgroundColor: "#f4f4f4",
          calendarBackground: "#ffffff",
          textSectionTitleColor: Colors.colorPrimaryBlue,
          selectedDayBackgroundColor: Colors.colorPrimaryBlue,
          selectedDayTextColor: "#ffffff",
          todayTextColor: "#00adf5",
          dayTextColor: "#2d4150",
          textDisabledColor: "#B0B0B0",
        }}
      />
      <View style={styles.buttonContainer}>
        {dateOptions.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.buttonItem,
              option.value === calendarDueDate && styles.buttonItemActive,
            ]}
            onPress={() => setCalendarDueDate(option.value)}
          >
            <Text
              style={[
                styles.buttonText,
                option.value === calendarDueDate && styles.buttonTextActive,
              ]}
            >
              {option.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.footerContainer}>
        <TouchableOpacity onPress={() => popoverRef.current?.requestClose()}>
          <Text style={styles.footerButtonCancel}>CANCEL</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => popoverRef.current?.requestClose()}>
          <Text style={styles.footerButtonDone}>DONE</Text>
        </TouchableOpacity>
      </View>
    </Popover>
  );
};
