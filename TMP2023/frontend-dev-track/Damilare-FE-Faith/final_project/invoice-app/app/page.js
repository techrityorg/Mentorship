import { ContentSection } from "@/components/ContentSection";

import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  return (
    <main className=" min-h-screen   flex items-start md:w-[60%] justify-center mx-auto    ">
      <div className=" md:mt-[4rem] flex flex-col justify-center items-center w-full relative">
        <ContentSection />
      </div>
    </main>
  );
}
