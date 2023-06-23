import QRCode from "react-qr-code";
import { ChangeEvent, useState } from "react";

function Barcode() {
  const [text, setText] = useState("");
  function handleChange(e: ChangeEvent<HTMLInputElement>){
    setText(e.target.value)
  }
  return (
    <div>
      <h1>Barcode</h1>
      <QRCode value={text} />

    <div>
      <p>Enter the copied link to get your Barcode</p>
    
        <input type="text" name="email" onChange={(e) => {handleChange(e)}} className="mt-1 px-2 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder={text} />
      {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Generate</button> */}
    </div>
      </div>
  );
}

export default Barcode
