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
    <div className="text-center text-gray-300 text-xs mb-[12px] mt-[24px]">
      {formatted}
    </div>
  );
};

export default DateDivider;
