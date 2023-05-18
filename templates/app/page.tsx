import Link from "next/link";

const page = () => {
  return (
    <div>
      <div className="flex gap-x-6 justify-center items-center bg-black text-white py-4 ">
        <Link href="/singin">Sing In</Link>
        <Link href="/login">Log In</Link>
        <Link href="/landing_page">Landing Page</Link>
      </div>
    </div>
  );
};

export default page;
