import { useNavigate, useParams } from "react-router-dom";
import LeftIcon from "../../assets/icons/common/left.svg?react";
import SearchIcon from "../../assets/icons/Chat/search.svg?react";
import CallIcon from "../../assets/icons/Main/call.svg?react";
import VideoIcon from "../../assets/icons/common/video.svg?react";
import RightIcon from "../../assets/icons/common/rightthin.svg?react";
import ProfileIcon from "../../assets/icons/common/profileIcon.svg?react";

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
  const { id } = useParams();

  const handleGoProfile = () => {
    if (!user) return;
    navigate(`/chat/${id}/profile/${user.id}`);
  };

  return (
    <div className="h-[100px] bg-white border-b border-[#EBEBEB] flex items-center justify-between px-4">
      {/* 왼쪽: 뒤로가기 */}
      <div className="h-[37px] mt-[52px] mb-[11px] w-full flex items-center justify-between">
        <button onClick={() => navigate(-1)}>
          <LeftIcon className="text-green-500 cursor-pointer" />
        </button>

        {/* 가운데: 프로필 정보 */}
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center mr-2">
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
              <span className="max-w-32 truncate title-3 mr-1">
                {user?.name || "Loading..."}
              </span>
              <button onClick={handleGoProfile} className="text-gray-800">
                <RightIcon className="cursor-pointer hover:text-main-green transition-colors" />
              </button>
            </div>
            <span className="text-gray-400 text-xs">{user?.phone || ""}</span>
          </div>
        </div>

        {/* 오른쪽: 액션 버튼들 */}
        <div className="flex items-center space-x-3 text-green-500">
          <SearchIcon />
          <CallIcon className="text-main-green" />
          <VideoIcon className="text-main-green" />
        </div>
      </div>
    </div>
  );
};

export default ContactAction;
