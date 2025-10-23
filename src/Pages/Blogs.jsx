import { blogData } from "../Data/BlogData.js";
import BlogCard from "../UI/BlogCard.jsx";
import blognotfound from "../assets/blognotfound.svg";
import { useNavigate } from "react-router-dom";

export default function Blogs() {
  const data = [];

  try {
    if (!blogData || !Array.isArray(blogData) || blogData.length === 0) {
      throw new Error("blog data is empty or something went wrong");
    }
    data.push(...blogData);
  } catch (error) {
    console.error("Error fetching blog data:", error);
  }

  const navigate = useNavigate();

  const last = blogData[blogData?.length - 1]?.id || 0;
  console.log(last);

  return (
    <div className="pt-36 px-10">
      <div className="flex items-center pb-15 justify-between">
        <h1 className="blog-h1">FirepipsFX Blog</h1>
        <p className="flex items-center gap-2 justify-center font-black">
          All blogs{" "}
          <span className="size-6 flex items-center justify-center text-[10px] bg-primary-red text-white rounded-full">
            {last}
          </span>
        </p>
      </div>
      {!blogData || blogData.length === 0 ? (
        <div className="h-[70vh] w-full flex items-center justify-center">
          <div className="flex flex-col items-center text-center justify-center gap-9">
            <div>
              <img src={blognotfound} alt="" />
            </div>
            <div className="flex flex-col gap-2 leading-normal">
              <h2 className="font-black text-xl text-primary-black">
                No blog posts available
              </h2>
              <p className="paragraph">
                We are cooking up insightful topics for you, come back soon to
                check them out!
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="pb-40 flex gap-10 px-10 flex-wrap items-center justify-left ">
          {blogData.map((blog) => (
            <BlogCard
              key={blog.id}
              Title={blog.title}
              Author={blog.author}
              Cover={blog.image}
              Date={blog.date}
              Snippet={blog.snippet}
              onClick={() => {
                navigate(`/blog/${blog.id}`);
                window.scrollTo({ top: 0 });
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
