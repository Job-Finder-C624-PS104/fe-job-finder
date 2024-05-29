// eslint-disable-next-line no-unused-vars
import React from "react";
import BaseLayout from "@/layouts/BaseLayout";
import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";

const Landing = () => {
  return (
    <>
      <Helmet>
        <title>Job Finder | Situs Lowongan Pekerjaan</title>
      </Helmet>
      <BaseLayout>
        <main className="min-h-screen">
          <Hero />
        </main>
      </BaseLayout>
    </>
  );
};

export default Landing;
