import { useNavigate, useParams } from "react-router-dom";
import LeftIcon from "../assets/icons/common/left.svg?react";
import CallIcon from "../assets/icons/Main/call.svg?react";
import VideoIcon from "../assets/icons/common/video.svg?react";
import SearchIcon from "../assets/icons/Profile/profilesearch.svg?react";
import MoreIcon from "../assets/icons/Main/morebottombar.svg?react";
import ProfileIcon from "../assets/icons/common/profileIcon.svg?react";
import MediaIcon from "../assets/icons/Profile/media.svg?react";
import LikeIcon from "../assets/icons/Profile/like.svg?react";
import RightIcon from "../assets/icons/Profile/rightthick.svg?react";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  avatar?: string;
  phone?: string;
  instagram?: string;
}

const Profile = () => {
  const navigate = useNavigate();
  const { chatId, userId } = useParams();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const res = await fetch("/data/users.json");
        const data: User[] = await res.json();
        const found = data.find((u) => u.id === Number(userId));
        setUser(found || null);
      } catch (err) {
        console.error(err);
      }
    };
    loadUser();
  }, [userId]);

  return (
    <div className="h-full aspect-375/812 bg-white relative flex flex-col items-center overflow-y-auto">
      {/* 상단 */}
      <div className="w-full flex items-center justify-between px-4 pt-14">
        <button onClick={() => navigate(-1)}>
          <LeftIcon className="text-main-green cursor-pointer" />
        </button>
        <button className="list-2 text-gray-500 ">편집</button>
      </div>

      {/* 프로필 이미지 */}
      <div className="mt-6.5 relative">
        <div
          className="w-20 h-20 rounded-full overflow-hidden bg-gray-200 cursor-pointer"
          onClick={() => navigate(`/chat/${chatId}/profile/${userId}/photo`)}
        >
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
      </div>
      <div className="flex flex-col items-center mt-4">
        <h1 className="title-2 text-gray-900">{user?.name}</h1>
        {user?.instagram && (
          <a
            href={`https://${user.instagram}`}
            target="_blank"
            rel="noreferrer"
            className="text-main-green mt-1 text-sm flex items-center gap-1"
          >
            <span className="underline">{user.instagram}</span>
          </a>
        )}
        <p className="text-gray-500 text-sm mt-1">{user?.phone}</p>
      </div>

      {/* 메뉴 */}
      <div className="w-full px-4 mt-6 grid grid-cols-4 gap-x-2 sm:gap-x-3 md:gap-x-4 justify-items-center">
        {[
          {
            icon: <CallIcon className="text-main-green w-6 h-6" />,
            label: "오디오",
          },
          {
            icon: <VideoIcon className="text-main-green w-6 h-6" />,
            label: "비디오",
          },
          {
            icon: <SearchIcon className="text-main-green w-6 h-6" />,
            label: "검색",
          },
          {
            icon: <MoreIcon className="text-main-green w-6 h-6" />,
            label: "옵션",
          },
        ].map((item, i) => (
          <button
            key={i}
            className="flex flex-col items-center justify-center w-full max-w-[90px] aspect-[5/4]"
          >
            <div className="flex flex-col w-full h-full bg-white rounded-xl border border-gray-150 items-center justify-center">
              {item.icon}
              <span className="text-xs text-main-green mt-1">{item.label}</span>
            </div>
          </button>
        ))}
      </div>

      {/* 미디어, 즐겨찾기 */}
      <div className="w-full mt-12 pl-8 pr-6 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-gray-700">
            <MediaIcon />
            <span className="body-4">미디어, 링크, 문서</span>
          </div>
          <div className="flex">
            <span className="text-gray-400 body-2">없음</span>
            <RightIcon className="mt-0.5" />
          </div>
        </div>

        <div className="border-t border-gray-250 ml-8 my-3"></div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-gray-700">
            <LikeIcon />
            <span className="body-4">즐겨찾기</span>
          </div>
          <div className="flex">
            <span className="text-gray-400 body-2">없음</span>
            <RightIcon className="mt-0.5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
