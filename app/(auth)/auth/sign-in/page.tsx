import React from "react";
import SignInFormClient from "@/modules/auth/components/sign-in-form-client";
import Image from "next/image";
const Page = () => {
  return (
    <>
      <Image
        src="/login.svg"
        alt="Login_Image"
        height={300}
        width={400}
        className="m-6 object-cover"
      />
      <SignInFormClient />
    </>
  );
};
export default Page;
