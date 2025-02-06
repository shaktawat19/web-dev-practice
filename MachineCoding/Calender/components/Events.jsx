export default function Events({ events }) {
  return (
    <>
      {events.map((event) => {
        const [startHour, startMinute] = event.start.split(":"); // 10:30
        const [endHour, endMinute] = event.end.split(":"); // 11:30
        const top = startHour * 5 + (startMinute / 60) * 5;
        const height =
          (endHour - startHour) * 5 + ((endMinute - startMinute) / 60) * 5;
        return (
          <div
            className="event"
            style={{ top: `${top}rem`, height: `${height}rem` }}
          >
            {event.title}
          </div>
        );
      })}
    </>
  );
}
