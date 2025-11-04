export default function Results({ units, price, description }) {
  return (
    <div className="flex flex-col gap-3">
      <p className="paragraph">{description}</p>
      <p className="md:text-xl font-black text-primary-black">
        {price && `$`}
        {units}
      </p>
    </div>
  );
}
