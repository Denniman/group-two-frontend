import { Link } from "react-router-dom";

import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Button, Label, TextInput } from "flowbite-react";

import { FooterComp, LogoImg } from "../../components";
import { loginUser } from "../../providers/session/session-slice";

import { useFormValidation } from "../../hooks";

export const Login = () => {
  const dispatch = useDispatch();

  const { isLoading } = useSelector((state) => state.session);
  const { emailValidation, loginPasswordValidation } = useFormValidation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (payload) => {
    dispatch(loginUser({ ...payload }));
  };

  const passwordError = Boolean(errors.password?.message);

  const emailError = Boolean(errors.email?.message);

  return (
    <div>
      <div className="h-screen w-full flex flex-col items-center p-2">
        <div className="w-full px-4 md:px-12 py-4 flex justify-between">
          <LogoImg />
          <Link to="/signup">
            <Button color="dark" outline>
              Create Account
            </Button>
          </Link>
        </div>
        <div className="h-full flex justify-center md:min-w-96">
          <div className="w-full flex flex-col justify-center">
            <div className="flex flex-col">
              <h1 className="text-4xl font-semibold mb-2">Welcome Back!</h1>
              <p className="mb-4 text-lg">Sign in to your account</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
              <div>
                <Label value="Your email" />
                <Controller
                  name="email"
                  control={control}
                  rules={emailValidation}
                  render={({ field }) => (
                    <TextInput
                      {...field}
                      color={emailError ? "failure" : null}
                      helperText={
                        emailError ? (
                          <span className="font-medium">{errors?.password?.message}</span>
                        ) : null
                      }
                      type="email"
                      placeholder="Email address"
                    />
                  )}
                />
              </div>
              <div>
                <Label value="Your password" />

                <Controller
                  name="password"
                  control={control}
                  rules={loginPasswordValidation}
                  render={({ field }) => (
                    <TextInput
                      {...field}
                      color={passwordError ? "failure" : null}
                      type="password"
                      placeholder="Password"
                      helperText={
                        passwordError ? (
                          <span className="font-medium">{errors?.password?.message}</span>
                        ) : null
                      }
                    />
                  )}
                />
              </div>
              <Button
                isProcessing={isLoading}
                disabled={isLoading}
                className="mt-3"
                color="dark"
                type="submit"
              >
                {isLoading ? "Loading" : "Login"}
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
