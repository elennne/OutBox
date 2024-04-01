import React, { useState } from "react";

import RegistrationForm from "../Components/Registration/RegistrationForm";

const Registration = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gradient-to-br from-rose-600 via-fuchsia-950 to-navy-950 bg-yellow-200">
      <RegistrationForm />
    </div>
  );
};

export default Registration;
