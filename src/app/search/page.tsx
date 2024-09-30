import { Search } from "@/components/screens/Search/Search";
import { titleMerge } from "@/config/seo.config";
import { Metadata } from "next";
import { FC } from "react";

export const metadata: Metadata = {
  title: titleMerge("Поисковик"),
  description: "Поисковик Чака",
};

const Page: FC = () => {
  return (
    <>
      <div className="w-[200px] mx-auto mt-5">
        <Search />
      </div>

      <div>Card Container</div>
    </>
  );
};

export default Page;
