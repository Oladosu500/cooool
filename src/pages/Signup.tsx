import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";

const Signup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e: any) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        //Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/login");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        //..
      });
  };
  return (
    <>
      <div>
        <h1 className="!bg-red-500">Signup Page</h1>
      </div>

      <main>
        <section>
          <div>
            <div>
              <h1>Signup</h1>
              <form>
                <div>
                  <label htmlFor="email-address">Email address</label>
                  <input
                    type="email"
                    aria-label="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Email address"
                  />
                </div>
                <div>
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    aria-label="Create password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="Password"
                  />
                </div>

                <button type="submit" onClick={onSubmit}>
                  Sign up
                </button>
              </form>
              <p>
                Already have an account?{" "}
                <NavLink to="/Login"> Sign in </NavLink>
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Signup;
