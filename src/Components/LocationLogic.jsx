import { useEffect, useState } from "react";
import LineButton from "../UI/LineButton";
import LocationLekki from "../UI/LocationLekki";
import LocationIkeja from "../UI/LocationIkeja";
import LocationAsaba from "../UI/LocationAsaba";
import LocationKano from "../UI/LocationKano";
import { useLocation } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

export default function LocationLogic({
  Lekki = true,
  Ikeja = false,
  Asaba = false,
  Kano = false,
}) {
  const [activeLocation, setActiveLocation] = useState(
    Lekki ? "Lekki" : Ikeja ? "Ikeja" : Asaba ? "Asaba" : "Kano"
  );

  const [active, setActive] = useState("Lekki");
  const location = useLocation();

  const [searchParams] = useSearchParams();
  const locationFromURL = searchParams.get("location");

  useEffect(() => {
    if (locationFromURL) {
      setActiveLocation(locationFromURL);
    }
  }, [locationFromURL]);

  const locations = [
    {
      label: "Lagos Island - Lekki",
      key: "Lekki",
      component: <LocationLekki />,
    },
    {
      label: "Lagos Mainland - Ikeja",
      key: "Ikeja",
      component: <LocationIkeja />,
    },
    { label: "Delta - Asaba", key: "Asaba", component: <LocationAsaba /> },
    { label: "Kano - Maganda Road", key: "Kano", component: <LocationKano /> },
  ];

  useEffect(() => {
    if (location.pathname.includes("ikeja")) setActive("Ikeja");
    else if (location.pathname.includes("asaba")) setActive("Asaba");
    else if (location.pathname.includes("kano")) setActive("Kano");
    else setActive("Lekki");
  }, [location.pathname]);

  return (
    <div className="w-full overflow-hidden">
      <div
        className="w-full overflow-x-auto pb-7.5 md:w-full"
        style={{ scrollbarWidth: "none" }}
      >
        <div className="flex min-w-max">
          {locations.map(({ label, key }) => (
            <LineButton
              key={key}
              isActive={activeLocation === key}
              onClick={() => {
                setActiveLocation(key);
                console.log(key);
              }}
            >
              {label}
            </LineButton>
          ))}
        </div>
      </div>

      {locations.find((loc) => loc.key === activeLocation)?.component}
    </div>
  );
}
// navigate(`/our-locations/${label.key}`);
// console.log(locations);
