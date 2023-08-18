import footerBg from "../assets/images/pattern-hills.svg";

export const Footer = () => {
  return (
    <footer className="relative group">
      <div className="w-full  flex items-center justify-center">
        <img
          className="w-full absolute bottom-0 object-cover"
          src={footerBg}
          alt="footer"
        />
      </div>
    </footer>
  );
};
