import { Alert, Button, Label, TextInput } from "flowbite-react";
import { FooterComp, LogoImg, } from "../../components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";



export const Signup = () => {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.password || !formData.email) {
      return setErrorMessage("Please fill out all fields");
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch("http://localhost:8080/api/v1/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        setLoading(false);
        return setErrorMessage("This Email has been used before");
      }
      setLoading(false);
      if(res.ok){
        navigate('/sign-in')
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  }
  return (
    <div>
    <div className="h-screen w-full flex flex-col items-center p-2" style={{background: "linear-gradient(35deg, rgba(105,183,255,1) 0%, rgba(255,255,255,1) 100%)"}}>
      <div className="w-full px-4 md:px-12 py-4 flex justify-between"> 
      <LogoImg />
      <Link to="/login">
      <Button color="blue" outline >Login</Button>
      </Link>
      </div>
    <div className="h-full flex justify-center md:min-w-96">
      <div className="w-full flex flex-col justify-center">
        <div className="flex flex-col">
          <h1 className="text-4xl font-semibold mb-2"> Create a free account</h1>
          <p className="mb-4 text-lg">Let&apos;s get to know you</p>
        </div>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <Label value="First name" />
            <TextInput type="text" placeholder="Jane" id="firstName" onChange={handleChange}/>
          </div>
          <div>
            <Label value="Last name" />
            <TextInput type="text" placeholder="Doe" id="lastName" onChange={handleChange}/>
          </div>
          <div>
            <Label value="Your email" />
            <TextInput type="email" placeholder="name@company.com" id="email" onChange={handleChange}/>
          </div>
          <div>
            <Label value="Your password" />
            <TextInput type="password" placeholder="password" id="password" onChange={handleChange}/>
          </div>
          <Button className="mt-3" color="blue" type="submit" disabled={loading}> 
            Create Account
          </Button>
        </form>
        <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to="/login" className="text-blue-500">
              Sign In
            </Link>
          </div>
          {errorMessage && (
            <Alert className="mt-5" color="failure">
              {errorMessage}
            </Alert>
          )}
      </div>
    </div>
    </div>
    <FooterComp />
    </div>
  );
};
