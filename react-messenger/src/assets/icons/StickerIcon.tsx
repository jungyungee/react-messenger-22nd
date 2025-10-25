import React from "react";

const StickerIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width="24"
    height="24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="mr-[12px]"
  >
    <path
      d="M12 22H15C18.866 22 22 18.866 22 15V12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22Z"
      stroke="#58CF04"
      stroke-width="1.8"
    />
    <path
      d="M15 22C15 20.1387 15 19.2081 15.2447 18.4549C15.7393 16.9327 16.9327 15.7393 18.4549 15.2447C19.2081 15 20.1387 15 22 15"
      stroke="#58CF04"
      stroke-width="1.8"
    />
  </svg>
);

export default StickerIcon;
