import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function SmallCalendar() {
  const [value, onChange] = useState(new Date());

  return <Calendar onChange={onChange} value={value} />;
}
