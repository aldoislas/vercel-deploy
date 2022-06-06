import Link from "next/link";
import React from "react";

import MainLayout from "../../components/layouts/mainLayout";

const Contact = () => {
  return (
    <MainLayout>
      <h1>Contact</h1>
      <h1 className="">
        Ir a <Link href="/">Home!</Link>
      </h1>
    </MainLayout>
  );
};

export default Contact;
