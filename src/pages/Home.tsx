import React, {useState, useEffect} from "react";
import { onAuthStateChanged } from "firebase/auth";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../Firebase";
function Home() {
  const linkShort = () => {
    alert("linkShort");
    console.log("linkShort");
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
         const uid = user.uid;
        // ...
        console.log("uid", uid);
      } else {
        // User is signed out
        // ...
        console.log("user is signed out");
      }
    });
  }, []);

  const navigate = useNavigate();
 
  const handleLogout = () => {               
      signOut(auth).then(() => {
      // Sign-out successful.
          navigate("/");
          console.log("Signed out successfully")
      }).catch((error) => {
      // An error happened.
      });
    }
  return (
    <>

    <section>
      ...
    </section>
      <div>
        <h1>Home components</h1>

        <h1>URL SHORTNER</h1>

        <input type="text" placeholder="Enter URL" className="input" />
        <br />
        <button className="button-28" onClick={linkShort}>
          Shorten URL
        </button>

        <br />
        <h3>Sticky Navigation Bar Example</h3>
        <p>
          The navbar will <strong>stick</strong> to the top when you reach its
          scroll position.
        </p>
        <p>
          <strong>Note:</strong> Internet Explorer do not support sticky
          positioning and Safari requires a -webkit- prefix.
        </p>
        <div>
          
     
        </div>
      </div>
      <nav>
                <p>
                    Welcome Home
                </p>
 
                <div>
        			<button onClick={handleLogout}>
                        Logout
                    </button>
        		</div>
            </nav>

    </>
  );
}

export default Home;
