interface ChatItemProps {
  name: string;
  message: string;
  time: string;
  unreadCount?: number;
  avatar?: string;
  onClick?: () => void;
}

const ChatItem = ({
  name,
  message,
  time,
  unreadCount,
  avatar,
  onClick,
}: ChatItemProps) => {
  return (
    <div
      onClick={onClick}
      className="flex items-center px-4 py-3 hover:bg-gray-50 cursor-pointer"
    >
      <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden mr-3 flex items-center justify-center text-gray-500 text-sm">
        {avatar ? (
          <img src={avatar} alt={name} className="w-full h-full object-cover" />
        ) : (
          "IMG"
        )}
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-center">
          <p className="list-1 text-gray-900 truncate">{name}</p>
          <span className="list-3 text-gray-400">{time}</span>
        </div>

        <div className="flex justify-between items-center mt-0.5">
          <p className="list-3 text-gray-400 truncate max-w-[230px]">
            {message}
          </p>
          {unreadCount ? (
            <span className="text-[11px] font-medium bg-main-green text-white px-1.5 py-px rounded-full">
              {unreadCount > 999 ? "999+" : unreadCount}
            </span>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ChatItem;
