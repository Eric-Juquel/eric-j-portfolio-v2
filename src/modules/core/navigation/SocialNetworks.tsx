import { NavLink } from "react-router-dom";

export default function SocialNetworks() {
  return (
    <div className="flex items-center justify-center w-full h-16 gap-6">
      <NavLink
        to="https://www.linkedin.com/in/eric-juquel-4397b719a/"
        target="blank"
      >
        <i className="fab fa-linkedin text-4xl hover:text-secondary"></i>
      </NavLink>
      <NavLink
        to="https://github.com/Eric-Juquel?tab=repositories"
        target="blank"
      >
        <i className="fab fa-github text-4xl hover:text-secondary"></i>
      </NavLink>
    </div>
  );
}
