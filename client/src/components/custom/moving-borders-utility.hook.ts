import { useNavigate } from "react-router-dom";

export const useHandleNavigation = () => {
  const navigate = useNavigate();

  const handleNavigation = (name: string) => {
    if (name === "Logout") {
      const role = window.localStorage.getItem("role");
      window.localStorage.removeItem("role");
      window.localStorage.removeItem("user");
      window.localStorage.removeItem("userId");
      if (role === "Job Seeker") {
        navigate("/jobseeker-login");
      } else if (role === "Recruiter") {
        navigate("/recruiter-login");
      }
    } else if (name === "Recruiter's Login") {
      navigate("/recruiter-login");
    } else {
      navigate("/jobseeker-login");
    }
  };

  return handleNavigation;
};
