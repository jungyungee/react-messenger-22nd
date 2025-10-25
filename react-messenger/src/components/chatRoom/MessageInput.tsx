import { useState } from "react";
import CameraIcon from "../../assets/icons/Main/camera.svg?react";
import PlusIcon from "../../assets/icons/Chat/plus.svg?react";
import StickerIcon from "../../assets/icons/Chat/sticker.svg?react";
import SendIcon from "../../assets/icons/Chat/send.svg?react";

interface MessageInputProps {
  onSend: (text: string) => void; // 입력 받은 내용 상위 컴포넌트로 전달하기
}

const MessageInput = ({ onSend }: MessageInputProps) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) return;
    onSend(message);
    setMessage(""); //입력창 다시 비우기
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.nativeEvent.isComposing) return;
    if (e.key === "Enter") {
      if (e.shiftKey) {
        e.preventDefault();
        setMessage((prev) => prev + "\n");
      } else {
        e.preventDefault();
        handleSend();
      }
    }
  };

  return (
    <div className="w-full aspect-375/84 relative">
      <div className="w-full aspect-375/62 bg-white absolute bottom-0 left-0"></div>
      <div
        className="w-[calc(100%-32px)] mx-4 aspect-343/44
                  bg-[rgba(224,224,224,0.3)] backdrop-blur-[20px] 
                  rounded-[100px] flex items-center px-3"
      >
        <button className="w-6 h-6 flex items-center justify-center mr-3">
          <PlusIcon />
        </button>
        <input
          className="w-[201px] bg-transparent placeholder:text-gray-500 list-2 focus:outline-none focus:text-black"
          placeholder="메세지 입력"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
        ></input>
        <div className="ml-auto flex gap-x-2">
          <StickerIcon />
          {message.trim() ? (
            <button onClick={handleSend}>
              <SendIcon />
            </button>
          ) : (
            <CameraIcon />
          )}
        </div>
      </div>
    </div>
  );
};
export default MessageInput;
