import {useState, useEffect} from 'react'
import{
    SignedIn,
    SignedOut,
    SignInButton,
    SignUpButton,
    UserButton,
} from "@clerk/clerk-react"

const NavBar = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.
        getItem("theme") : "dark"
    );
    const handleToggle = (e) =>{
        if (e.targer.checked) setTheme("dark");
        else setTheme("light");
    };
    useEffect(() =>{
        localStorage.setItem("theme",theme);
        const localTheme = locaStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme);
    }, [theme]);

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
            <SignUpButton/>
          </SignedIn>
        </div>
      </div>
    </div>
  );
}

export default NavBar