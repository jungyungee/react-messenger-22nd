import { useState, useEffect, useRef } from "react";
import ProfileIcon from "../../assets/icons/ContactAction/ProfileIcon";
import ShowAllIcon from "../../assets/icons/ShowAllIcon";

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
    <div className="flex flex-row items-end w-full mt-[8px]">
      {avatar ? (
        <img
          src={avatar}
          alt="avatar"
          className="w-[24px] h-[24px] rounded-full object-cover flex-shrink-0"
        />
      ) : (
        <ProfileIcon className="w-[24px] h-[24px] flex-shrink-0" />
      )}

      <div className="body-1 rounded-[16px] bg-[#EFEFF3] text-gray-800 w-auto max-w-[251px] min-h-[34px] pr-[12px] pl-[12px] pb-[6px] pt-[6px] ml-[12px] relative">
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
            <ShowAllIcon />
          </button>
        )}
      </div>

      {/* 시간 */}
      {time && <span className="ml-[8px] body-3 text-gray-300">{time}</span>}
    </div>
  );
};

export default RecievedChat;
