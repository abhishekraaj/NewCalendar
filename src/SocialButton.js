import React from "react";
import SocialLogin from "react-social-login";

const SocialButton = ({ text, triggerLogin, ...props }) => {
  return (
    <button onClick={triggerLogin} {...props}>
      {text}
    </button>
  );
};

export default SocialButton(SocialLogin) ;
