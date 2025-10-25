import { useState, useEffect, useRef } from "react";
import ShowAllIcon from "../../assets/icons/common/rightthin.svg?react";

interface SentChatProps {
  text: string;
  time?: string;
}

const SentChat = ({ text, time }: SentChatProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current) {
      const el = textRef.current;
      setIsOverflowing(el.scrollHeight > el.clientHeight);
    }
  }, [text]);

  return (
    <div className="flex justify-end items-end w-full mt-2">
      {time && <span className="mr-2 body-3 text-gray-300">{time}</span>}

      <div
        className="body-1 rounded-2xl bg-chat-green text-gray-850
                    w-auto max-w-[251px] min-h-[34px]
                    px-3 py-1.5 relative"
      >
        <div
          ref={textRef}
          className={`whitespace-pre-line ${isExpanded ? "" : "line-clamp-17"}`}
        >
          {text}
        </div>

        {!isExpanded && isOverflowing && (
          <button
            onClick={() => setIsExpanded(true)}
            className="w-full flex flex-row items-center justify-between body-8 text-gray-850 mt-1 no-underline"
          >
            <span>전체보기</span>
            <ShowAllIcon className="text-gray-300" />
          </button>
        )}
      </div>
    </div>
  );
};

export default SentChat;
