import { useNavigate } from "react-router-dom";
import LeftIcon from "../../assets/icons/ContactAction/LeftIcon";
import SearchIcon from "../../assets/icons/ContactAction/SearchIcon";
import CallIcon from "../../assets/icons/Main/call.svg?react";
import VideoIcon from "../../assets/icons/ContactAction/VideoIcon";
import ProfileIcon from "../../assets/icons/ContactAction/ProfileIcon";
import RightIcon from "../../assets/icons/ContactAction/RightIcon";

interface User {
  id: number;
  name: string;
  avatar?: string;
  phone?: string;
}

interface Props {
  user?: User;
}

const ContactAction = ({ user }: Props) => {
  const navigate = useNavigate();

  return (
    <div className="h-[100px] bg-white border-b border-[#EBEBEB] flex items-center justify-between px-4">
      {/* 왼쪽: 뒤로가기 */}
      <div className="h-[37px] mt-[52px] mb-[11px] w-full flex items-center justify-between">
        <button onClick={() => navigate(-1)}>
          <LeftIcon className="text-green-500 cursor-pointer" />
        </button>

        {/* 가운데: 프로필 정보 */}
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center mr-[8px]">
            {user?.avatar ? (
              <img
                src={user.avatar}
                alt={user.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <ProfileIcon />
            )}
          </div>

          <div className="flex flex-col">
            <div className="flex items-center">
              <span className="max-w-[128px] truncate title-3 mr-1">
                {user?.name || "Loading..."}
              </span>
              <button className="text-gray-400">
                <RightIcon />
              </button>
            </div>
            <span className="text-gray-400 text-xs">{user?.phone || ""}</span>
          </div>
        </div>

        {/* 오른쪽: 액션 버튼들 */}
        <div className="flex items-center space-x-3 text-green-500">
          <SearchIcon />
          <CallIcon className="text-main-green" />
          <VideoIcon />
        </div>
      </div>
    </div>
  );
};

export default ContactAction;
