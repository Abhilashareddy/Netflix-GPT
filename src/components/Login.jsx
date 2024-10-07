import { useRef, useState } from "react";
import { validateData, validateName } from "../utils/validate";
import Header from "./Header";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { BG_URL, SIGN_UP_IMG, USER_AVATAR } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { InfinitySpin } from "react-loader-spinner";
const Login = () => {
  const dispatch = useDispatch();

  const [isSignIn, setIsSignIn] = useState(true);
  const [error, setError] = useState(null);
  // const [name, setName] = useState(null);
  // const [email, setEmail] = useState(null);
  // const [password, setPassword] = useState(null);
  const name = useRef(null);
  const email = useRef('test@netflix.com');
  const password = useRef('123456789');
  const [loading, setLoading] = useState(false);

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  const handleValidation = () => {
    setLoading(true);

    if (isSignIn) {
      const errorMessage = validateData(
        email.current.value,
        password.current.value
      );
      setError(errorMessage);
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // ...
          //GOTO BROWSE PAGE
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + " - " + errorMessage);
        });
    } else {
      const nameError = name.current ? validateName(name.current.value) : null;
      const emailError = validateData(
        email.current.value,
        password.current.value
      );
      setError(nameError || emailError);

      //create account -signup code  here
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,

            photoURL: USER_AVATAR,
          })
            .then(() => {
              // Profile updated!
              //Dispatch addUser  again
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,

                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              setError(error.message);
              console.log(error);
            });

          console.log(user);

          // ...
          //GOTO BROWSE PAGE
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + " - " + errorMessage);
          // ..
        });
      setLoading(false);
    }
  };

  return (
    <>
      <div >
      
      <Header />
       
       <div className='absolute'>
     
       <img  className="h-screen w-screen bg-cover bg-no-repeat " fetchpriority="high" src={BG_URL}  alt='header-image' />
        </div>

        <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className='w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80' >
            
            <p className='text-white font-semibold text-3xl mb-6'>
              {isSignIn ? "Sign In" : "Sign Up"}
            </p>

            {isSignIn ? null : (
              <input
                ref={name}
                type='text'
                className='p-4 my-4 w-full bg-gray-700'
                placeholder='Full Name'
              />
            )}
            <input
              ref={email}
              defaultValue={"test@netflix.com"}
              type='text'
              className='p-4 my-4 w-full bg-gray-700'
              placeholder='Email'
            />
            <input
              ref={password}
              type='password'
              defaultValue={'123456789'}
              className='p-4 my-4 w-full bg-gray-700'
              placeholder='Password'
            />

            <p className='text-red-500 font-semibold mt-2 text-lg '>{error}</p>

      

            <button
            className="p-4 my-6 bg-red-700 w-full rounded-lg"
            onClick={handleValidation}
            >
            {isSignIn ? "Sign In" : "Sign Up"}
            </button>

            <p
              className='text-neutral-400 md: mt-7 cursor-pointer'
              onClick={toggleSignIn}>
              {isSignIn ? "New to Netflix?" : "Already registered  "}{" "}
              <span className='text-white'>
                {isSignIn ? "Sign Up now" : "SignIn here"}{""}
              </span>
            </p>
      </form>
        </div>
        
      
     
    </>
  );
};

export default Login;
