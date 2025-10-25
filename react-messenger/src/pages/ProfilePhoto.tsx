import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import LeftIcon from "../assets/icons/ContactAction/LeftIcon";
import CallIcon from "../assets/icons/Main/call.svg?react";
import VideoIcon from "../assets/icons/ContactAction/VideoIcon";
import SearchIcon from "../assets/icons/ContactAction/SearchIcon";
import MoreIcon from "../assets/icons/Main/morebottombar.svg?react";
import ProfileIcon from "../assets/icons/ContactAction/ProfileIcon";
import MediaIcon from "../assets/icons/Profile/media.svg?react";
import LikeIcon from "../assets/icons/Profile/like.svg?react";
import RightIcon from "../assets/icons/Profile/rightthick.svg?react";

interface User {
  id: number;
  name: string;
  avatar?: string;
  phone?: string;
}

const ProfilePhoto = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
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

  if (!user) return null;

  return (
    <div className="h-full aspect-[375/812] bg-white flex flex-col overflow-hidden relative">
      {/* 상단 이미지 영역 */}
      <div className="relative w-full h-[500px] overflow-hidden">
        {user.avatar ? (
          <img
            src={user.avatar}
            alt={user.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <ProfileIcon className="w-20 h-20 text-gray-400" />
          </div>
        )}

        {/* 상단 아이콘 */}
        <div className="absolute top-[52px] left-4 right-4 flex items-center justify-between text-white">
          <button onClick={() => navigate(-1)}>
            <LeftIcon className="text-white w-6 h-6" />
          </button>
        </div>

        {/* 블러 */}
        <div className="absolute bottom-0 w-full h-[200px] overflow-hidden">
          <div
            className="absolute inset-0 backdrop-blur-[20px]"
            style={{
              WebkitMaskImage:
                "linear-gradient(to top, rgba(0,0,0,1) 70%, rgba(0,0,0,0.4) 90%, rgba(0,0,0,0) 100%)",
              maskImage:
                "linear-gradient(to top, rgba(0,0,0,1) 70%, rgba(0,0,0,0.4) 90%, rgba(0,0,0,0) 100%)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

          {/* 이름 / 번호 */}
          <div className="absolute bottom-16 w-full px-5 pb-8 text-white">
            <h1 className="text-lg font-semibold">{user.name}</h1>
            <p className="text-sm opacity-80 mt-0.5">
              {user.phone ? `+82 ${user.phone}` : ""}
            </p>
          </div>
        </div>
      </div>

      {/* 버튼 영역 */}
      <div className="relative z-20 -mt-20 px-4">
        <div className="grid grid-cols-4 gap-1.5">
          {[
            {
              icon: <CallIcon className="text-white w-6 h-6" />,
              label: "오디오",
            },
            {
              icon: <VideoIcon className="text-white w-6 h-6" />,
              label: "비디오",
            },
            {
              icon: <SearchIcon className="text-white w-6 h-6" />,
              label: "검색",
            },
            {
              icon: <MoreIcon className="text-white w-6 h-6" />,
              label: "옵션",
            },
          ].map((item, i) => (
            <button
              key={i}
              className="flex flex-col items-center justify-center"
            >
              <div className="flex flex-col w-18 h-14 rounded-2xl items-center justify-center bg-white/30 backdrop-blur-sm">
                {item.icon}
                <span className="text-xs text-white mt-1">{item.label}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* 미디어 / 즐겨찾기 섹션 */}
      <div className="flex flex-col divide-y divide-gray-150 px-5 py-4 mt-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-2 text-gray-700">
            <MediaIcon />
            <span className="text-sm">미디어, 링크, 문서</span>
          </div>
          <div className="flex">
            <span className="text-gray-400 body-2">없음</span>
            <RightIcon className="mt-0.5" />
          </div>
        </div>

        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-2 text-gray-700">
            <LikeIcon />
            <span className="text-sm">즐겨찾기</span>
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

export default ProfilePhoto;
