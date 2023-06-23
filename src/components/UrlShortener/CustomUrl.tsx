import { useState } from "react";
const URLMaker = () => {
    const [customUrl, setCustomUrl] = useState("");
    const handleInputChange = (e: any) => {
        setCustomUrl(e.target.value);
    };

    const handleButtonClick = () => {
        const generatedUrl= `https://mini.com/${customUrl}`;
        console.log(generatedUrl);
    };
    return (
        <div>
           < input type="text" placeholder={customUrl} className="mt-1 px-2 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" onChange={handleInputChange} />
           <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleButtonClick}>Generate custom link </button>
        </div>
    );
};

export default URLMaker;