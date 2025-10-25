const BottomBar = () => {
  return (
    <>
      <nav className="flex h-12.25 justify-around items-center px-4 py-2 border-t border-gray-200 bg-gray-100">
        {/* 업데이트 */}
        <div className="flex flex-col items-center justify-center text-gray-400">
          <div className="w-6 h-6 mb-1 flex items-center justify-center">
            ➕
          </div>
          <p className="body-3">업데이트</p>
        </div>

        {/* 통화 */}
        <div className="flex flex-col items-center justify-center text-gray-400">
          <div className="w-6 h-6 mb-1 flex items-center justify-center">
            📞
          </div>
          <p className="body-3">통화</p>
        </div>

        {/* 커뮤니티 */}
        <div className="flex flex-col items-center justify-center text-gray-400">
          <div className="w-6 h-6 mb-1 flex items-center justify-center">
            👥
          </div>
          <p className="body-3">커뮤니티</p>
        </div>

        {/* 채팅 */}
        <div className="relative flex flex-col items-center justify-center text-gray-800">
          <div className="relative w-6 h-6 mb-1 flex items-center justify-center">
            💬
            <span className="absolute -top-1.5 -right-3 bg-main-green text-white text-[9px] font-semibold px-[5px] py-[1px] rounded-full">
              999+
            </span>
          </div>
          <p className="body-3">채팅</p>
        </div>

        {/* 더보기 */}
        <div className="flex flex-col items-center justify-center text-gray-400">
          <div className="w-6 h-6 mb-1 flex items-center justify-center">⋯</div>
          <p className="body-3">더보기</p>
        </div>
      </nav>
      <div className="h-8.5 bg-gray-100"></div>
    </>
  );
};

export default BottomBar;
