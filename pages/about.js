import React from "react";
import Link from "next/link";
import MainLayout from "../components/layouts/mainLayout";
import DarkLayout from "../components/layouts/darkLayout";

const About = () => {
  return (
    <>
      <h1>About</h1>
      <h1 className="">
        Ir a <Link href="/">Home!</Link>
      </h1>
    </>
  );
};

export default About;

About.getLayout = function getLayout(page) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};

// import React from "react";
// import Link from "next/link";
// import MainLayout from "../components/layouts/mainLayout";
// import DarkLayout from "../components/layouts/darkLayout";

// const About = () => {
//   return (
//     <MainLayout>
//       <DarkLayout>
//         <h1>About</h1>
//         <h1 className="">
//           Ir a <Link href="/">Home!</Link>
//         </h1>
//       </DarkLayout>
//     </MainLayout>
//   );
// };

// export default About;
