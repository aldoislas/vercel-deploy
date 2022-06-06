import MainLayout from "../components/layouts/mainLayout";
import Link from "next/link";

export default function HomePage() {
  return (
    <MainLayout>
      <h1>HOME</h1>
      <h1 className={""}>
        Ir a <Link href="/about">About!</Link>
      </h1>

      <p className="">
        Get started by editing{" "}
        <code className={""}>pages/index.js</code>
      </p>
    </MainLayout>
  );
}
