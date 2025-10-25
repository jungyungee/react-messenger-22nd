import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ChatFilter from "../components/chatList/ChatFilter";
import ChatItem from "../components/chatList/ChatItem";
import BottomBar from "../components/chatList/BottomBar";
import MoreIcon from "../assets/icons/Main/more.svg?react";
import CameraIcon from "../assets/icons/Main/camera.svg?react";
import AddIcon from "../assets/icons/Main/add.svg?react";
import SearchIcon from "../assets/icons/Main/search.svg?react";

interface Conversation {
  id: number;
  userId: number;
  messages: string;
  unreadCount?: number;
}

interface User {
  id: number;
  name: string;
  avatar?: string;
}

interface ChatPreview {
  id: number;
  name: string;
  avatar?: string;
  lastMessage: string;
  lastTime: string;
  unreadCount?: number;
}

const ChatList = () => {
  const [chatList, setChatList] = useState<ChatPreview[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loadChats = async () => {
      try {
        const [convRes, userRes] = await Promise.all([
          fetch("/data/conversation.json"),
          fetch("/data/users.json"),
        ]);

        const conversations: Conversation[] = await convRes.json();
        const users: User[] = await userRes.json();

        const results: ChatPreview[] = [];

        for (const conv of conversations) {
          const user = users.find((u) => u.id === conv.userId);

          // ✅ 1️⃣ 로컬스토리지 확인
          const storedMessages = localStorage.getItem(
            `chat_${conv.id}_messages`
          );
          let messages;

          if (storedMessages) {
            // 로컬스토리지 메시지 사용
            messages = JSON.parse(storedMessages);
          } else {
            // 없으면 JSON 더미에서 불러오기
            const res = await fetch(conv.messages);
            if (!res.ok) continue;
            messages = await res.json();
          }

          const lastMsg = messages[messages.length - 1];
          results.push({
            id: conv.id,
            name: user?.name || "Unknown",
            avatar: user?.avatar || "",
            lastMessage: lastMsg?.text || "",
            lastTime: lastMsg?.time || "",
            unreadCount: conv.unreadCount ?? 0,
          });
        }

        setChatList(results);
      } catch (err) {
        console.error("대화 데이터를 불러오지 못했습니다:", err);
      }
    };

    loadChats();
  }, []);

  return (
    <div className="h-full w-full bg-white relative flex flex-col">
      {/* 헤더 */}
      <header className="flex justify-between items-center pt-2 pb-3 px-4 mt-11">
        <h1 className="title-1 text-gray-800">Chats</h1>
        <div className="flex items-center space-x-4 text-gray-700">
          <MoreIcon className="w-6 h-6" />
          <CameraIcon className="w-6 h-6" />
          <AddIcon className="w-6 h-6 text-main-green" />
        </div>
      </header>

      {/* 검색창 */}
      <div className="relative px-4 py-2.5">
        <SearchIcon className="absolute left-7 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-450" />
        <input
          type="text"
          placeholder="검색"
          className="w-full h-[37px] rounded-xl bg-gray-100 pl-9 pr-3 text-[14px] text-gray-700 placeholder:text-gray-400 focus:outline-none"
        />
      </div>

      {/* 필터 버튼 */}
      <ChatFilter />

      {/* 대화 목록 */}
      <div className="flex flex-col overflow-y-auto">
        {chatList.map((chat) => (
          <ChatItem
            key={chat.id}
            name={chat.name}
            message={chat.lastMessage}
            time={chat.lastTime}
            avatar={chat.avatar}
            unreadCount={chat.unreadCount}
            onClick={() => navigate(`/chat/${chat.id}`)}
          />
        ))}
      </div>

      {/* 하단 바 */}
      <div className="mt-auto">
        <BottomBar />
      </div>
    </div>
  );
};

export default ChatList;
