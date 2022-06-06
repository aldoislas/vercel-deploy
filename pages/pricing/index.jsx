import Link from "next/link";
import React from "react";

import MainLayout from "../../components/layouts/mainLayout";

const Pricing = () => {
  return (
    <MainLayout>
      <h1>Pricing</h1>
      <h1 className="">
        Ir a <Link href="/">Home!</Link>
      </h1>
    </MainLayout>
  );
};

export default Pricing;
