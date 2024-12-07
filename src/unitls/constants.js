export const IMGDETAILS =
  "https://assets.nflxext.com/ffe/siteui/vlv3/2bcf01ee-7ef6-4930-b0d5-c6863853c461/web/IN-en-20241125-TRIFECTA-perspective_a47db038-756f-4f26-b1f7-cfc882b98746_medium.jpg";
export const PHOTOURL =
  "https://do6gp1uxl3luu.cloudfront.net/banner+and+logos/name.webp";

export const API_OPTION = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMTB,
  },
};
export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w300/";
export const LANG = [
  { identifier: "en", name: "English" },
  { identifier: "tamil", name: "Tamil" },
  { identifier: "malayalam", name: "Malayalam" },
];

export const REACT_APP_OPENAI_API_KEY = process.env.REACT_APP_OPENAI_KEY;
export const REACT_KEY_G = "AIzaSyDhzxGppoAHedc3JRgXFYfDTFZyV4LlrNA";

export const HUGGINGFACE = "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";
