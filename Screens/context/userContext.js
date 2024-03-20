import React, { createContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const initialUserState = {
    full_name: "",
    email: "",
    phone: "",
    password: "",
    role: "farmer",
    business_name: "",
    informal_name: "",
    address: "",
    city: "",
    state: "",
    zip_code: undefined,
    registration_proof: "",
    business_hours: {},
    device_token: "0imfnc8mVLWwsAawjYr4Rx-Af50DDqtlx",
    type: "email/facebook/google/apple",
    social_id: "0imfnc8mVLWwsAawjYr4Rx-Af50DDqtlx"
  };


  const [user, setUser] = useState(initialUserState);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
