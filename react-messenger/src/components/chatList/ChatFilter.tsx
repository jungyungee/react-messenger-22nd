import { useState } from "react";

const ChatFilter = () => {
  const [selected, setSelected] = useState(0);
  const filters = ["모두", "읽지 않음", "즐겨찾기", "그룹"];

  return (
    <div className="flex px-4 space-x-2 mt-2 mb-5">
      {filters.map((label, i) => {
        const isSelected = i === selected;
        return (
          <button
            key={i}
            onClick={() => setSelected(i)}
            className={`relative flex items-center justify-center px-3 py-1.5 rounded-full border text-[13px] transition cursor-pointer
              ${
                isSelected
                  ? "bg-gray-150 border-transparent font-semibold text-gray-800"
                  : "bg-white border-gray-200 text-gray-450"
              }`}
          >
            {isSelected && (
              <span className="w-1.5 h-1.5 rounded-full bg-main-green mr-1.5"></span>
            )}
            {label}
          </button>
        );
      })}
    </div>
  );
};

export default ChatFilter;
