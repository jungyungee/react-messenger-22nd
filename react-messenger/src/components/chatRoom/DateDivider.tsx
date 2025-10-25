interface DateDividerProps {
  date: string;
}

const DateDivider = ({ date }: DateDividerProps) => {
  const d = new Date(date);
  const today = new Date();
  const isSameYear = d.getFullYear() === today.getFullYear();

  const formatted = isSameYear
    ? d.toLocaleDateString("ko-KR", {
        month: "long",
        day: "numeric",
      })
    : d.toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });

  return (
    <div className="text-center text-gray-300 text-xs mb-3 mt-6">
      {formatted}
    </div>
  );
};

export default DateDivider;
