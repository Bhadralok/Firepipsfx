import CustomButton from "./CustomButton";
import arrowRight from "../assets/arrowRight.svg";
import blogRedLine from "../assets/blogRedLine.svg";

export default function BlogCard({
  // id,
  Title,
  Author,
  Cover,
  Date,
  Snippet,
  onClick,
}) {
  const firstName = Author?.split(" ")[0];

  return (
    <>
      {/* desktop blog card */}
      <div className="w-[25rem] h-fit hidden md:flex shadow-2xl flex-col shrink-0 overflow-hidden inputs  text-primary-black">
        <div className="h-[50%] overflow-hidden">
          <img src={Cover} alt="" className="object-contain" />
        </div>
        <div className="px-4 py-5 flex flex-col gap-6 ">
          <div className="flex items-center justify-between">
            <div className="shadow-[0_5px_20px_rgba(0,0,0,0.1)] rounded-full flex items-center gap-1.5 p-1.5 w-fit">
              {" "}
              <span className="size-5 font-black text-[12px] flex items-center justify-center bg-secondary-red text-primary-red rounded-full">
                O
              </span>
              <h2 className="text-[8px] font-black tracking-widest pr-2">
                {firstName?.toUpperCase()}
              </h2>
            </div>
            <div>
              <p className="text-[0.625rem] font-medium">{Date}</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-bold ">{Title}</h1>
            <p className="text-[12px] text-secondary-black font-medium">
              {Snippet}
            </p>
          </div>
          <CustomButton onClick={onClick}>Read More</CustomButton>
        </div>
      </div>

      {/* mobile blog card */}
      <div className="w-full md:hidden h-full flex flex-col gap-5">
        <div className="w-full h-50 inputs overflow-hidden">
          <img src={Cover} alt="" className="object-contain" />
        </div>
        <div className="flex items-center justify-between">
          <p className="text-[10px] text-primary-red tracking-widest font-medium">
            {firstName?.toUpperCase()}
          </p>
          <p className="text-secondary-black text-[12px]">{Date}</p>
        </div>
        <h1 className="text-primary-black font-black">{Title}</h1>
        <p className="text-[12px] text-secondary-black font-medium">
          {Snippet}
        </p>
        <div className="w-fit">
          <CustomButton
            icon1={<img src={arrowRight} className="h-2" />}
            onClick={onClick}
          >
            <span className="text-[10px] font-bold">Read full story</span>
          </CustomButton>
        </div>
        <div>
          <img src={blogRedLine} alt="" className="w-full py-2.5" />
          {}
        </div>
      </div>
    </>
  );
}
