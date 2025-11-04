export default function BlogTemplate({ icon, letter, Title, desc }) {
  return (
    <div className="flex gap-2 items-center">
      <div className="blog-span flex items-center justify-center font-black text-2xl text-primary-red">
        {icon ? <img src={icon} alt="" /> : <span>{letter}</span>}
      </div>
      <div className="flex flex-col">
        <div className="paragraph">{Title}</div>
        <div className="font-black text-[12px] md:text-sm text-primary-black">{desc}</div>
      </div>
    </div>
  );
}
