import AddIcon from "../../assets/icons/Main/add.svg?react";
import CallIcon from "../../assets/icons/Main/call.svg?react";
import CommunityIcon from "../../assets/icons/Main/community.svg?react";
import MessageIcon from "../../assets/icons/Main/message.svg?react";
import MoreIcon from "../../assets/icons/Main/morebottombar.svg?react";

const BottomBar = () => {
  return (
    <>
      <nav className="flex h-12.25 justify-around items-center px-4 py-2 border-t border-gray-200 bg-gray-100">
        {/* 업데이트 */}
        <div className="flex flex-col items-center justify-center text-gray-400">
          <AddIcon className="text-gray-400" />
          <p className="body-3">업데이트</p>
        </div>

        {/* 통화 */}
        <div className="flex flex-col items-center justify-center text-gray-400">
          <CallIcon className="text-gray-400" />
          <p className="body-3">통화</p>
        </div>

        {/* 커뮤니티 */}
        <div className="flex flex-col items-center justify-center text-gray-400">
          <CommunityIcon />
          <p className="body-3">커뮤니티</p>
        </div>

        {/* 채팅 */}
        <div className="relative flex flex-col items-center justify-center text-gray-800">
          <div className="relative">
            <MessageIcon className="w-6 h-6" />
            <span className="absolute -top-1 -right-2 bg-main-green text-white text-[12px] font-semibold px-[5px] py-px rounded-full">
              3
            </span>
          </div>
          <p className="body-3">채팅</p>
        </div>

        {/* 더보기 */}
        <div className="flex flex-col items-center justify-center text-gray-400">
          <MoreIcon />
          <p className="body-3">더보기</p>
        </div>
      </nav>
      <div className="h-8.5 bg-gray-100"></div>
    </>
  );
};

export default BottomBar;
