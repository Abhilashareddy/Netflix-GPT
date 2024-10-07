export const LOGO ='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'

export const USER_AVATAR=  "https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e";

export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer '+ process.env.REACT_APP_TMDB_KEY,
    }
  };

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const SIGN_UP_IMG="https://res.cloudinary.com/dzbmc0pit/image/upload/f_auto,q_auto/v1/personal%20projects/MOVIES%20GPT/w0gkgrz5ykndcin27dlg"

export const GPT_MODE_IMG="https://res.cloudinary.com/dzbmc0pit/image/upload/f_auto,q_auto/v1/personal%20projects/MOVIES%20GPT/ps1rvj6p6t6n015ofsp0"

export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/8728e059-7686-4d2d-a67a-84872bd71025/e90516bd-6925-4341-a6cf-0b9f3d0c140a/IN-en-20240708-POP_SIGNUP_TWO_WEEKS-perspective_WEB_34324b52-d094-482b-8c2a-708dc64c9065_large.jpg";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "telugu", name: "Telugu" },
  { identifier: "spanish", name: "Spanish" },
];

export const MOBILE_LOGO ='https://i.ibb.co/mJv0SH4/718-7188480-icon-netflix-logo-png-transparent-png-removebg-preview.png'


export const OPENAI_KEY = process.env.REACT_APP_OPENAPI_KEY;

console.log(OPENAI_KEY);
console.log(API_OPTIONS);
