import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { UserAuth } from "../context/AuthContext";
import { db } from "../Firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
export default function Movie({ item }) {
  const [Like, setLike] = useState(false);
  const [save, setSave] = useState(false);
  const { user } = UserAuth();

  const movieID = doc(db, "users", `${user?.email}`);
  const saveShow = async () => {
    if (user?.email) {
      setLike(!Like);
      setSave(true);
      await updateDoc(movieID, {
        savedShows: arrayUnion({
          id: item.id,
          title: item.title,
          img: item.backdrop_path,
        }),
      });
    } else {
      alert("Please Login to save  movie");
    }
  };

  return (
    <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[288px] inline-block cursor-pointer relative p-2">
      <img
        className="w-full h-auto block"
        src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
        alt={item?.title}
      />
      <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
        <p className="whitespace-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
          {item?.title}
        </p>
        <p onClick={saveShow}>
          {Like ? (
            <FaHeart className="absolute top-4 left-4 text-gray-300 " />
          ) : (
            <FaRegHeart className="absolute top-4 left-4 text-gray-300 " />
          )}
        </p>
      </div>
    </div>
  );
}
