import React from "react";
import { FaEnvelope, FaUser, FaXTwitter } from "react-icons/fa6";
import { IoMdHome } from "react-icons/io";
import { FaHashtag } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { MdOutlineBookmarks } from "react-icons/md";
import { CiCircleMore } from "react-icons/ci";
import FeedCard from "@/components/FeedCard";



interface TwitterSideButton {
  title: string;
  icon: React.ReactNode;
}

const sideBarMenuItems: TwitterSideButton[] = [
  {
    title: "Home",
    icon: <IoMdHome />,
  },
  {
    title: "Explore",
    icon: <FaHashtag />,
  },
  {
    title: "Notifications",
    icon: <IoNotifications />,
  },
  {
    title: "Messages",
    icon: <FaEnvelope />,
  },
  {
    title: "Bookmarks",
    icon: <MdOutlineBookmarks />,
  },
  {
    title: "Profile",
    icon: <FaUser />,
  },
  {
    title: "More",
    icon: <CiCircleMore />,
  },
];

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen px-60">
        <div className="col-span-3 pt-8 px-4">
          <div className="text-4xl h-fit hover:bg-gray-800 rounded-full p-4 cursor-pointer transition-all w-fit">
            <FaXTwitter />
          </div>
          <div className="mt-4 text-2xl pr-4">
            <ul>
              {sideBarMenuItems.map((item) => (
                <li
                  className="flex justify-start items-center gap-4 hover:bg-gray-800 rounded-full px-5 py-2 w-fit cursor-pointer mt-2"
                  key={item.title}
                >
                  <span>{item.icon}</span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
            <button className="bg-sky-600 p-3 mt-4 rounded-full w-full font-semibold">
              Tweet
            </button>
          </div>
        </div>
        <div className="col-span-6 border-r-[1px] border-l-[1px] border-b-gray-700 h-screen overflow-scroll">
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
        </div>
        <div className="col-span-3"></div>
      </div>
    </div>
  );
}
