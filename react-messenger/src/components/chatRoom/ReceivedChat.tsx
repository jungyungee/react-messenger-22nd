import { useState, useEffect, useRef } from "react";
import ProfileIcon from "../../assets/icons/common/profileIcon.svg?react";
import ShowAllIcon from "../../assets/icons/common/rightthin.svg?react";

interface RecievedChatProps {
  text: string;
  time?: string;
  avatar?: string;
}

const RecievedChat = ({ text, time, avatar }: RecievedChatProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current) {
      const el = textRef.current;
      // 줄 잘림 감지
      setIsOverflowing(el.scrollHeight > el.clientHeight);
    }
  }, [text]);

  return (
    <div className="flex flex-row items-end w-full mt-2">
      {avatar ? (
        <img
          src={avatar}
          alt="avatar"
          className="w-6 h-6 rounded-full object-cover shrink-0"
        />
      ) : (
        <ProfileIcon className="w-6 h-6 shrink-0" />
      )}

      <div className="body-1 rounded-2xl bg-[#EFEFF3] text-gray-800 w-auto max-w-[251px] min-h-[34px] px-3 py-1.5 ml-3 relative">
        <div
          ref={textRef}
          className={`whitespace-pre-line ${isExpanded ? "" : "line-clamp-17"}`}
        >
          {text}
        </div>

        {/* 전체보기 버튼 */}
        {!isExpanded && isOverflowing && (
          <button
            onClick={() => setIsExpanded(true)}
            className="w-full flex flex-row items-center justify-between body-8 text-gray-600 mt-1 no-underline"
          >
            <span>전체보기</span>
            <ShowAllIcon className="text-gray-600" />
          </button>
        )}
      </div>

      {/* 시간 */}
      {time && <span className="ml-2 body-3 text-gray-300">{time}</span>}
    </div>
  );
};

export default RecievedChat;
