import { Barnav } from "./components/Barnav";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import MyUrl from "./pages/MyUrl";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Analytics from "./pages/Analytics";
import Faqs from "./pages/Faqs";
import Home from "./pages/Home";

function App() {
  // const linkShort = () => {
  //   alert("linkShort");
  //   console.log("linkShort");
  // };

  return (
    <>
      <div className="welcome">
        <Navbar />

        <Barnav name="My Urls" />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/myUrl" element={<MyUrl />} />
          <Route path="/Features" element={<Features />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/Analytics" element={<Analytics />} />
          <Route path="/Faqs" element={<Faqs />} />
        </Routes>

        {/* <h1>URL SHORTNER</h1>

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
        </p> */}
        {/* <p>
          Some text to enable scrolling. Lorem ipsum dolor sit amet, illum
          definitiones no quo, maluisset concludaturque et eum, altera fabulas
          ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum.
          Affert laboramus repudiandae nec et. Inciderint efficiantur his ad.
          Eum no molestiae voluptatibus.
        </p>
        <p>
          Some text to enable scrolling. Lorem ipsum dolor sit amet, illum
          definitiones no quo, maluisset concludaturque et eum, altera fabulas
          ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum.
          Affert laboramus repudiandae nec et. Inciderint efficiantur his ad.
          Eum no molestiae voluptatibus.
        </p>
        <p>
          Some text to enable scrolling. Lorem ipsum dolor sit amet, illum
          definitiones no quo, maluisset concludaturque et eum, altera fabulas
          ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum.
          Affert laboramus repudiandae nec et. Inciderint efficiantur his ad.
          Eum no molestiae voluptatibus.
        </p>
        <p>
          Some text to enable scrolling. Lorem ipsum dolor sit amet, illum
          definitiones no quo, maluisset concludaturque et eum, altera fabulas
          ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum.
          Affert laboramus repudiandae nec et. Inciderint efficiantur his ad.
          Eum no molestiae voluptatibus.
        </p>
        <p>
          Some text to enable scrolling. Lorem ipsum dolor sit amet, illum
          definitiones no quo, maluisset concludaturque et eum, altera fabulas
          ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum.
          Affert laboramus repudiandae nec et. Inciderint efficiantur his ad.
          Eum no molestiae voluptatibus.
        </p>
        <p>
          Some text to enable scrolling. Lorem ipsum dolor sit amet, illum
          definitiones no quo, maluisset concludaturque et eum, altera fabulas
          ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum.
          Affert laboramus repudiandae nec et. Inciderint efficiantur his ad.
          Eum no molestiae voluptatibus.
        </p>
        <p>
          Some text to enable scrolling. Lorem ipsum dolor sit amet, illum
          definitiones no quo, maluisset concludaturque et eum, altera fabulas
          ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum.
          Affert laboramus repudiandae nec et. Inciderint efficiantur his ad.
          Eum no molestiae voluptatibus.
        </p> */}
      </div>
    </>
  );
}

export default App;
