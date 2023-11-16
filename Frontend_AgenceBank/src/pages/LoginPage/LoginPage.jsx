import style from "./LoginPage.module.css";
import { fetch_Token } from "../../Services/login.service.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { fetch_UserInfos } from "../../Services/login.service.js";
import { set_Login } from "../../Redux/AuthReducer/AuthSlice.js";
import { set_User } from "../../Redux/UserReducer/UserSlice.js";
import { useDispatch } from "react-redux";

/**
 * Component for displaying an error message when credentials are invalid.
 * @param {Object} props - The component's props.
 * @param {boolean} props.show - Indicates whether to show the error message.
 * @returns {JSX.Element} The Forgot component.
 */
function Forgot({ show }) {
  // If 'show' prop is true, display the error message
  if (show) {
    return (
      <div className={style.forgot}>
        <p>Your credentials are invalids!</p>
      </div>
    );
  }
  // If 'show' prop is false, don't render anything
  return null;
}

/**
 * Component for the login page.
 * @returns {JSX.Element} The LoginPage component.
 */
export default function LoginPage() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [remember, setRemember] = useState(false);
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  /**
   * Function to handle the "Remember me" checkbox.
   */
  const handleCheck = () => {
    // Get the 'remember' checkbox element
    const check = document.getElementById("remember");
    // If the checkbox is checked, set 'remember' state to true
    if (check.checked) {
      setRemember(true);
    }
  };

  /**
   * Function to handle the login form submission.
   * @param {Object} e - The form submission event.
   */
  const handle_Form = async (e) => {
    e.preventDefault();

    // Attempt to fetch a token with the provided password and email
    const token = await fetch_Token(password, email);

    // If the password or email is empty, or fetching the token fails, show an error message
    if (password === '' || email === '' || !token) {
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 3000);
    } else {
      // If credentials are valid, dispatch the login action to update the state
      dispatch(set_Login({ token: token, keepLogging: remember, authenticated: true }));

      // Fetch user information using the token
      const infos = await fetch_UserInfos(token);
      const user = {
        "firstName": infos.firstName,
        "lastName": infos.lastName,
        "id": infos.id,
      };

      // Dispatch the set user action to update user information in the state
      dispatch(set_User(user));

      // Navigate to the user's profile page
      navigate("/profile");
    }
    return;
  };

  return (
    <main className={style.bg_dark}>
  <div className={style.signIn_Container}>
    {/* User icon */}
    <FontAwesomeIcon
      className={style.title_Login_Icon}
      icon={faUserCircle}
    />
    <h1 className={style.title}>Sign In</h1>
    <form>
      {/* Username input */}
      <div className={style.input_Container}>
        <label className={style.label} htmlFor="userMail">
          Username
        </label>
        <input
          className={`${style.input} `}
          type="text"
          id="userMail"
          name="username"
          autoComplete="off"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      {/* Password input */}
      <div className={style.input_Container}>
        <label className={style.label} htmlFor="userPassword">
          Password
        </label>
        <input
          className={`${style.input} `}
          type="password"
          autoComplete="off"
          id="userPassword"
          name="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        {/* Display the Forgot component with error message if 'show' is true */}
        <Forgot show={show} />
      </div>
      {/* "Remember me" checkbox */}
      <div className={style.input_Check_Container}>
        <input
          className={style.input_Check}
          type="checkbox"
          id="remember"
          name="Remember me"
          onClick={handleCheck}
        />
        <label className={style.label_Check_} htmlFor="remember">
          Remember me
        </label>
      </div>
      {/* Sign-in button */}
      <div className={style.button_container}>
        <button
          className={style.button}
          type="button"
          onClick={handle_Form}
        >
          Sign in
        </button>
      </div>
    </form>
  </div>
</main>

  );
}
