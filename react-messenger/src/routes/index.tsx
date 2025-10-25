import { createBrowserRouter } from "react-router-dom";
import ChatList from "../pages/ChatList";
import ChatRoom from "../pages/ChatRoom";
import Profile from "../pages/Profile";
import ProfilePhoto from "../pages/ProfilePhoto";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ChatList />,
  },
  {
    path: "/chat/:id",
    element: <ChatRoom />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/profile/photo",
    element: <ProfilePhoto />,
  },
]);
