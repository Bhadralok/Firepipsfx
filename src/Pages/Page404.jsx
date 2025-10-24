import { useNavigate } from "react-router-dom";
import CustomButton from "../UI/CustomButton";

export default function Page404() {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen gap-5 items-center justify-center flex-col">
      <h1 className=" text-9xl font-bold">404</h1>
      <h2>Looks like the page you're looking for doesn't exist</h2>
      <div className="flex gap-5 md:w-[20%] w-fit">
        <div>
          <CustomButton onClick={() => navigate(-1)}>
            <span className="md:text-base text-[12px]">Go back</span>
          </CustomButton>
        </div>
        <div>
          <CustomButton onClick={() => navigate("/")}>
            <span className="md:text-base text-[12px]">Go Home</span>
          </CustomButton>
        </div>
      </div>
    </div>
  );
}
