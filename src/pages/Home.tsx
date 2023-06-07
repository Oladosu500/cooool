import React from "react";
function Home() {
  const linkShort = () => {
    alert("linkShort");
    console.log("linkShort");
  };
  return (
    <>
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
          </p>
          <p>
            Some text to enable scrolling. Lorem ipsum dolor sit amet, illum
            definitiones no quo, maluisset concludaturque et eum, altera fabulas
            ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum.
            Affert laboramus repudiandae nec et. Inciderint efficiantur his ad.
            Eum no molestiae voluptatibus.
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
