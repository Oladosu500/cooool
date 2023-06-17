import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";

type Props = {
  // inputValue: (value: string) => void;
  inputValue: string;
};

const LinkResult = ({ inputValue }: Props) => {
  const [shortenLink, setShortenLink] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios(
        `https://api.shrtco.de/v2/shorten?url=${inputValue}`
      );
      setShortenLink(res.data.result.full_short_link);
    } catch (err: any) {
      //bad practice right here
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  //call fetch data function to shorten the input if the input value is valid
  useEffect(() => {
    if (inputValue.length) {
      fetchData();
    }
  }, [inputValue]);

  //timer to return copied to false after 1 second
  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [copied]);

  //   loading message
  if (loading) {
    return <p>loading.....</p>;
  }

  //error message
  if (error) {
    return <p>something isnt right :(</p>;
  }

  return (
    <>
      {shortenLink && (
        <div className="result">
          <p>{shortenLink}</p>

          <CopyToClipboard text={shortenLink} onCopy={() => setCopied(true)}>
            <button
              className={`${
                copied ? "copied" : ""
              } outline outline-cyan-500 py-1 px-2 rounded-md hover:outline-none hover:bg-cyan-500 hover:text-white m-2`}
            >
              copy to clipboard
            </button>
          </CopyToClipboard>
        </div>
      )}
    </>
  );
};

export default LinkResult;
