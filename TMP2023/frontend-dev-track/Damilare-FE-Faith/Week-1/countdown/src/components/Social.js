import facebook from "../assets/images/icon-facebook.svg";
import instagram from "../assets/images/icon-instagram.svg";
import pinterest from "../assets/images/icon-pinterest.svg";
export const Social = () => {
  return (
    <div className="absolute bottom-[8%] left-[50%] z-50 ">
      <ul className="  flex justify-start items-start gap-6">
        <li>
          <div className="h-34 w-full hover:bg-custom_soft_red cursor-pointer rounded-md ">
            <img src={facebook} alt="facebook" />
          </div>
        </li>

        <li className="hover:text-custom_soft_red">
          <div className="h-34 w-full hover:bg-custom_soft_red cursor-pointer rounded-md ">
            <img src={instagram} alt="instagram" />
          </div>
        </li>
        <li className="hover:text-custom_soft_red ">
          <div className="h-34 w-full hover:bg-custom_soft_red cursor-pointer rounded-md ">
            <img src={pinterest} alt="pinterest" />
          </div>
        </li>
      </ul>
    </div>
  );
};
