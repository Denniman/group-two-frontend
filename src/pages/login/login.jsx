import { Button, Label, TextInput } from "flowbite-react";
import { FooterComp, LogoImg } from "../../components";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div>
    <div className="h-screen w-full flex flex-col items-center p-2">
      <div className="w-full px-4 md:px-12 py-4 flex justify-between"> 
      <LogoImg />
      <Link to="/signup">
      <Button color="dark" outline >Create Account</Button>
      </Link>
      </div>
    <div className="h-full flex justify-center md:min-w-96">
      <div className="w-full flex flex-col justify-center">
        <div className="flex flex-col">
          <h1 className="text-4xl font-semibold mb-2">Welcome Back!</h1>
          <p className="mb-4 text-lg">Sign in to your account</p>
        </div>
        <form className="flex flex-col gap-4">
          <div>
            <Label value="Your email" />
            <TextInput type="email" placeholder="name@company.com" id="email" />
          </div>
          <div>
            <Label value="Your password" />
            <TextInput type="password" placeholder="password" id="password" />
          </div>
          <Button className="mt-3" color="dark" type="submit">
            Login
          </Button>
        </form>
        <div className="flex gap-2 text-sm mt-5">
            <span>Don&apos;t an account?</span>
            <Link to="/signup" className="text-blue-500">
              Create a free account
            </Link>
          </div>
      </div>
    </div>
    </div>
    <FooterComp />
    </div>
  );
};
