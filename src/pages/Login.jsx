// src/pages/Login.jsx
import {
  Form,
  Link,
  redirect,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import { Logo, FormRow, SubmitBtn } from "../components";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useState } from "react";

const loaderUrl = "/lottie/jobfix-loader.lottie";

/* --------- ACTION (no component state here!) --------- */
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    // no setLoading here; actions can't touch component state
    // no artificial delay either
    await customFetch.post("/auth/login", data);
    toast.success("Successfully logged in");
    return redirect("/dashboard");
  } catch (error) {
    toast.error(error?.response?.data?.message || "Login failed");
    // return null keeps you on the same page so the overlay goes away
    return null;
  }
};

/* ---------------- COMPONENT ---------------- */
const Login = () => {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  // for the Demo button only
  const [loadingDemo, setLoadingDemo] = useState(false);
  const showOverlay = isSubmitting || loadingDemo;

  const demoLogin = async () => {
    try {
      setLoadingDemo(true);
      await customFetch.post("/auth/login", {
        email: "test@test.com",
        password: "secret123",
      });
      toast.success("Take a test drive");
      navigate("/dashboard");
    } catch (error) {
      toast.error(error?.response?.data?.message || "Demo login failed");
    } finally {
      setLoadingDemo(false);
    }
  };

  return (
    <>
      {/* Overlay (shows during form submit or demo login) */}
      {showOverlay && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-slate-950/70 backdrop-blur-sm">
          <div className="flex flex-col items-center">
            <DotLottieReact
              src={loaderUrl}
              autoplay
              loop
              style={{ width: 160, height: 160 }}
            />
            <p className="mt-3 text-slate-100">Let’s fix some jobs today…</p>
          </div>
        </div>
      )}

      <Wrapper>
        <Form method="post" className="form">
          <Logo />
          <h4>Login</h4>
          <FormRow type="text" name="email" />
          <FormRow type="password" name="password" />
          {/* If your SubmitBtn can take a loading prop, pass isSubmitting; otherwise it still works */}
          <SubmitBtn disabled={isSubmitting || loadingDemo} />
          <button
            type="button"
            className="btn btn-block"
            onClick={demoLogin}
            disabled={isSubmitting || loadingDemo}
          >
            Explore the App
          </button>
          <p>
            Not a member yet?
            <Link to="/register" className="member-btn">
              Register
            </Link>
          </p>
        </Form>
      </Wrapper>
    </>
  );
};

export default Login;
