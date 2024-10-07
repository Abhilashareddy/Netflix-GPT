import { useNavigate } from "react-router";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { USER_AVATAR,LOGO, MOBILE_LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGPTSearch } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";



const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGPT = useSelector((store) => store.gpt.showGPTSearch);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        navigate("/error");
        console.log(error);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        navigate("/");
        dispatch(removeUser());
      }
    });

    return () => unsubscribe();
  }, []);

  const handleGPTSearch = () => {
    //Toggle Search Button
    dispatch(toggleGPTSearch());
  };

  const handleLanguage = (e) => {
    dispatch(changeLanguage(e.target?.value));
  };
  return (
    <>
      <div className=' fixed hidden md:flex bg-gradient-to-b w-screen flex-col md:flex-row justify-between from-black px-8 py-2 z-50 '>
        <img
          className='w-44 hidden md:block md:mx-0'
          src={LOGO}
          alt='netflix-logo'
        />

        {user && (
          <div className='flex mt-3 mx-auto justify-between  md:mx-0 md:p-2'>
            <div>
              {showGPT && (
                <>
                <select
                  onChange={handleLanguage}
                  name=''
                  className='bg-gray-900 mr-2  mt-3 text-sm  text-white h-9 px-4  rounded-lg'>
                  {SUPPORTED_LANGUAGES.map((lang) => (
                    <>
                   
                    <option   className="rounded-full py-2 h-9 px-4" key={lang?.identifier} value={lang?.identifier}>
                      {" "}
                      {lang?.name}
                    </option>
                    </>
                    
                  ))}
                </select>
               
                </>
              )}
            </div>

            <div title="GPT Mode">
              <button
                onClick={handleGPTSearch}
                className='py-2 px-4 mx-4 my-3 bg-purple-800 text-white rounded-lg'>
                {showGPT ? "Home":"GPT Search"
                }
              </button>
            </div>
         
          <div onClick={handleSignOut}
          className="hover:rounded-md hover:bg-gray-500 px-1 pb-2 cursor-pointer" >
            <img
            className="hidden md:block my-2 w-11 h-11  rounded-md"
            alt="usericon"
            src={USER_AVATAR}
          />
          <p onClick={handleSignOut} className="text-white -m-2 px-1 text-sm ">
            Sign Out
          </p>
            </div>  
          </div>
        )}
      </div>


      


      {/* MOBILE NAV BAR  */}
      <div className='sticky top-0 flex z-50 '>
        <img
          className=' w-[50px] md:hidden mt-5 ml-2 '
          src={MOBILE_LOGO}
          alt='netflix-logo'
        />
        <div className='flex ml-3 md:hidden mt-5'>
          {/* {!showGPT && <SearchBar buttonText={<Search />} />} */}
        </div>
      </div>
    </>
  );
};

export default Header;
