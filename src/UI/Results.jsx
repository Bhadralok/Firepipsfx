export default function Results({ units, price, description }) {
  return (
    <div>
      <p className="paragraph">{description}</p>
      <p className="text-xl font-black text-primary-black">
        {price && `$`}
        {units}
      </p>
    </div>
  );
}
