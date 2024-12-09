import React from "react";
import Image from "next/image";
import { BiMessageRounded, BiUpload } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa6";
import { AiOutlineHeart } from "react-icons/ai";

const FeedCard: React.FC = () => {
  return (
    <div className="border border-r-0 border-l-0 border-b-0 border-b-gray-800 p-4 hover:bg-slate-900 transition-all cursor-pointer">
      <div className="grid grid-cols-12 gap-3 ">
        <div className="col-span-1">
          <Image
            src="https://avatars.githubusercontent.com/u/90107985?v=4"
            alt="avatar"
            height={50}
            width={50}
          />
        </div>
        <div className="col-span-11">
          <h5>Shreyas Nayak</h5>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequatur eos accusantium consequuntur nemo, temporibus totam,
            corporis soluta quae molestias porro velit eius praesentium
            laudantium at dolores aperiam. Eaque, in esse.
          </p>
          <div className="flex justify-between text-xl mt-5 items-center p-2 w-[60%]">
            <div>
              <BiMessageRounded />
            </div>
            <div>
              <FaRetweet />
            </div>
            <div>
              <AiOutlineHeart />
            </div>
            <div>
              <BiUpload />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
