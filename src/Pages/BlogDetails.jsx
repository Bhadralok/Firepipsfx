import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { blogData } from "../Data/BlogData.js";
import blognotfound from "../assets/blognotfound.svg";
import CustomButton from "../UI/CustomButton.jsx";
import blogtemplateline from "../assets/blogtemplateline.svg";
import BlogTemplate from "../UI/BlogTemplate.jsx";
import time from "../assets/time.svg";
import calendar from "../assets/calendar.svg";
import { FiArrowUpLeft } from "react-icons/fi";
import upRightArrowRed from "../assets/upRightArrowRed.svg";
import blogline from "../assets/blogline.svg";

export default function BlogDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    try {
      const found = blogData.find((item) => item.id === parseInt(id));
      if (!found) throw new Error("Blog not found");
      setBlog(found);
    } catch (err) {
      setError(err.message);
    }
  }, [id]);

  const firstName = blog?.author?.split(" ")[0];

  if (error)
    return (
      <div className="flex flex-col items-center gap-5 justify-center min-h-screen">
        <div>
          <img src={blognotfound} alt="" />
        </div>
        <div className="text-center">
          <p className="text-primary-black font-black text-xl">{error}</p>
          <p className="paragraph">We're puzzled on how you got here!</p>
        </div>
        <div>
          <CustomButton onClick={() => navigate("/blog")}>
            Back to Blogs
          </CustomButton>
        </div>
      </div>
    );

  if (!blog)
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Loading...
      </div>
    );

  return (
    <div className="px-10 py-40">
      <div className="flex items-center gap-5 w-full">
        <div className="flex flex-col gap-11 w-full">
          <div className="w-fit ">
            <h1 className="blog-h1">{blog.title}</h1>
          </div>
          <div className="flex gap-5">
            <BlogTemplate letter="O" Title="Author" desc={firstName} />
            <img src={blogtemplateline} alt="" />
            <BlogTemplate
              icon={time}
              Title="Estimated read time"
              desc={blog.readTime}
            />
            <img src={blogtemplateline} alt="" />
            <BlogTemplate icon={calendar} Title="Posted on" desc={blog.date} />
          </div>
        </div>
        <div className="w-[40%] h-fit inputs overflow-hidden bg-red-500">
          <img src={blog.image} alt="" />
        </div>
      </div>
      <p className="pt-15 font-medium text-primary-black leading-normal">
        {blog.content}
      </p>
      <div className="pt-15 gap-5 flex flex-col">
        <p>
          Enjoy this piece by{" "}
          <span className="font-black">{firstName.toUpperCase()}</span>?
        </p>
        <div className="w-129 gap-4 flex">
            <CustomButton
              icon2={<FiArrowUpLeft size={18} />}
              onClick={() => navigate("/blog")}
            >
              <span className="text-sm">Read more blogposts</span>
            </CustomButton>
          <CustomButton
            icon1={<img src={upRightArrowRed} />}
            variant="outlined"
          >
            <span className="text-sm">Enroll to FirepipsFx academy</span>
          </CustomButton>
        </div>
      </div>
      <div className="py-7.5 w-full">
        <img src={blogline} alt="" className="w-full" />
      </div>
      {/* <p>something</p>
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <img src={blog.image} alt={blog.title} className="rounded-lg mb-6" />
      <p className="text-gray-600">{blog.date}</p>
      <p className="mt-6 text-lg leading-relaxed">{blog.content}</p> */}
    </div>
  );
}
