import { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import ContactAction from "../components/chatRoom/ContactAction";
import MessageInput from "../components/chatRoom/MessageInput";
import RecievedChat from "../components/chatRoom/ReceivedChat";
import SentChat from "../components/chatRoom/SentChat";
import DateDivider from "../components/chatRoom/DateDivider";
import type { Message } from "../types/chat";

interface User {
  id: number;
  name: string;
  avatar?: string;
  phone?: string;
}

interface Conversation {
  id: number;
  userId: number;
  messages: string;
}

const ChatRoom = () => {
  const { id } = useParams();
  const [messages, setMessages] = useState<Message[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [conversation, setConversation] = useState<Conversation | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // 데이터 불러오기
  useEffect(() => {
    const loadData = async () => {
      try {
        const [userRes, convRes, msgRes] = await Promise.all([
          fetch("/data/users.json"),
          fetch("/data/conversation.json"),
          fetch(`/data/messages/chat_${id}.json`),
        ]);

        if (!userRes.ok || !msgRes.ok || !convRes.ok)
          throw new Error("데이터를 불러올 수 없습니다.");

        const usersData: User[] = await userRes.json();
        const convData: Conversation[] = await convRes.json();
        const msgData: Message[] = await msgRes.json();

        const currentConv = convData.find((c) => c.id === Number(id));
        setConversation(currentConv || null);
        setUsers(usersData);
        setMessages(msgData);
      } catch (error) {
        console.error(error);
      }
    };

    loadData();
  }, [id]);

  // 자동 스크롤
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages]);

  // 전송 로직
  const handleSend = (text: string) => {
    const now = new Date();
    const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(
      2,
      "0"
    )}-${String(now.getDate()).padStart(2, "0")}`;
    const time = now.toLocaleTimeString("ko-KR", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });

    const newMessage: Message = {
      id: Date.now(),
      userId: 0,
      text,
      type: "sent",
      createdAt: today,
      time,
    };

    setMessages((prev) => [...prev, newMessage]);
  };

  // 현재 대화 상대
  const targetUser = users.find((u) => u.id === conversation?.userId);

  return (
    <div className="h-full aspect-[375/812] bg-light-green relative flex flex-col">
      <ContactAction user={targetUser} />
      <div
        ref={containerRef}
        className="flex-1 overflow-y-auto pt-[8px] pb-[25%] px-[16px] scrollbar-hide"
      >
        {messages.map((msg, index) => {
          const prevMsg = messages[index - 1];
          const nextMsg = messages[index + 1];
          const showDivider = !prevMsg || prevMsg.createdAt !== msg.createdAt;
          const showTime =
            !nextMsg || nextMsg.time !== msg.time || nextMsg.type !== msg.type;
          const user = users.find((u) => u.id === msg.userId);

          return (
            <div key={msg.id}>
              {showDivider && <DateDivider date={msg.createdAt} />}
              {msg.type === "sent" ? (
                <SentChat
                  text={msg.text}
                  time={showTime ? msg.time : undefined}
                />
              ) : (
                <RecievedChat
                  text={msg.text}
                  time={showTime ? msg.time : undefined}
                  avatar={user?.avatar}
                />
              )}
            </div>
          );
        })}
      </div>
      <div className="absolute bottom-0 left-0 w-full">
        <MessageInput onSend={handleSend} />
      </div>
    </div>
  );
};

export default ChatRoom;
