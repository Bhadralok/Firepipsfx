import CustomButton from "./CustomButton";
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
    <div className="w-[25rem] h-fit shadow-2xl flex flex-col shrink-0 overflow-hidden inputs  text-primary-black">
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
  );
}
