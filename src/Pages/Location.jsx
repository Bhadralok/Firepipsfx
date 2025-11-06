import LocationLogic from "../Components/LocationLogic";

export default function Location() {
  return (
    <div className="md:pt-24 pt-15 text-primary-black px-10">
      <div className="flex flex-col gap-4">
        <h1 className="md:text-5xl text-2xl font-black pt-10">
          Our physical locations
        </h1>
        <p className="paragraph">
          We offer online and physical mentorship classes in our branches at
          Lagos and Delta state Nigeria. Select a location to get precise
          information about activities etc.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="font-bold text-sm">
          Select a location for more information
        </h3>
        <div className="">
          <LocationLogic />
        </div>
      </div>
    </div>
  );
}
