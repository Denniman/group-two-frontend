import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { Button, Label, TextInput } from "flowbite-react";

import { useFormValidation } from "../../hooks";
import { FooterComp, LogoImg } from "../../components";
import { registerUser } from "../../providers/session/session-slice";

export const Signup = () => {
  const dispatch = useDispatch();
  const { isLoading, data } = useSelector((state) => state.session);
  const { emailValidation, loginPasswordValidation, firstNameValidation, lastNameValidation } =
    useFormValidation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (payload) => {
    console.log(payload);

    dispatch(registerUser({ ...payload }));
  };

  console.log("data!", data);
  const passwordError = Boolean(errors.password?.message);

  const emailError = Boolean(errors.email?.message);

  return (
    <div>
      <div className="h-screen w-full flex flex-col items-center p-2">
        <div className="w-full px-4 md:px-12 py-4 flex justify-between">
          <LogoImg />
          <Link to="/login">
            <Button color="dark" outline>
              Login
            </Button>
          </Link>
        </div>
        <div className="h-full flex justify-center md:min-w-96">
          <div className="w-full flex flex-col justify-center">
            <div className="flex flex-col">
              <h1 className="text-4xl font-semibold mb-2"> Create a free account</h1>
              <p className="mb-4 text-lg">Let&apos;s get to know you</p>
            </div>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <Label value="First name" />

                <Controller
                  name="firstName"
                  control={control}
                  rules={firstNameValidation}
                  render={({ field }) => (
                    <TextInput
                      type="text"
                      placeholder="Jane"
                      {...field}
                      color={emailError ? "failure" : null}
                      helperText={
                        emailError ? (
                          <span className="font-medium">{errors?.password?.message}</span>
                        ) : null
                      }
                    />
                  )}
                />
              </div>
              <div>
                <Label value="Last name" />

                <Controller
                  name="lastName"
                  control={control}
                  rules={lastNameValidation}
                  render={({ field }) => (
                    <TextInput
                      type="text"
                      placeholder="Doe"
                      {...field}
                      color={emailError ? "failure" : null}
                      helperText={
                        emailError ? (
                          <span className="font-medium">{errors?.password?.message}</span>
                        ) : null
                      }
                    />
                  )}
                />
              </div>
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
              <Button disabled={isLoading} className="mt-3" color="dark" type="submit">
                {isLoading ? "Loading" : " Create Account"}
              </Button>
            </form>
            <div className="flex gap-2 text-sm mt-5">
              <span>Have an account?</span>
              <Link to="/login" className="text-blue-500">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
      <FooterComp />
    </div>
  );
};
