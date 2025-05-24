import React from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../../../store/useAuth";
import Button from "../globalbutton/Button";

const AuthButton = () => {
  const navigate = useNavigate();

  const { isLoading } = useAuthStore((state) => ({
    isLoading: state.isLoading,
  }));

  return (
    <>
      {/* Тек "Already have an account? Login" дегенді қалдырамыз */}
      {window.location.pathname.includes("signup") && (
        <p className="authpage_mediumchangebtn">
          Already have an account?{" "}
          <span
            onClick={() => {
              navigate("/auth/login");
            }}
          >
            Login
          </span>
        </p>
      )}

      {/* Sign Up батырмасының орнына әрқашан "Sign In" қалдырамыз */}
      <Button type="submit" cypressfield="loginbutton" isLoading={isLoading}>
        Sign In
      </Button>
    </>
  );
};

export default AuthButton;
