// eslint-disable-next-line no-unused-vars
import React from "react";
import BaseLayout from "@/layouts/BaseLayout";
import { Helmet } from "react-helmet-async";
import ListLoker from "../components/ListLoker";
import DetailLoker from "../components/DetailLoker";
import SearchLoker from "../components/SearchLoker";

const SearchLokerPage = () => {
  return (
    <>
      <Helmet>
        <title>Cari Lowongan Pekerjaan | Job Finder</title>
      </Helmet>
      <BaseLayout>
        <main className="flex flex-col min-h-screen gap-8 px-10 py-10 2xl:px-72">
          <SearchLoker />
          <section className="flex flex-col sm:flex-row">
            <div className="flex flex-col p-2 max-h-[500px] md:max-h-[1050px] overflow-y-auto max-w-[400px] sm:min-w-[400px] scroll-smooth">
              <ListLoker />
            </div>
            <DetailLoker />
          </section>
        </main>
      </BaseLayout>
    </>
  );
};

export default SearchLokerPage;
