"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaCartPlus } from "react-icons/fa";

interface ProductProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  price: string;
  isBlue?: boolean;
}

export default function FakeProduct({
  imageSrc,
  imageAlt,
  title,
  description,
  price,
  isBlue,
}: ProductProps) {
  const [alreadyClicked, setAlreadyClicked] = useState(false);

  const handleAlreadyClicked = () => {
    setAlreadyClicked(true);
  };

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout> | null;
    if (alreadyClicked) {
      timeout = setTimeout(() => {
        setAlreadyClicked(false);
      }, 2000);
    }
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [alreadyClicked]);
  return (
    <article
      className={`${
        alreadyClicked ? (isBlue ? "bg-blue-700" : "bg-red-900 ") : ""
      } bg-opacity-20 rounded-xl p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 w-max`}
    >
      <button onClick={handleAlreadyClicked}>
        <div className="relative flex items-end overflow-hidden rounded-xl justify-center">
          <Image
            className="w-max h-20 lg:h-44 object-contain"
            src={imageSrc}
            alt={imageAlt}
            height={180}
            width={320}
          />
        </div>

        <div className="mt-1 p-2">
          <h2 className="text-slate-200">{title}</h2>
          <p className="mt-1 mx-auto text-sm text-slate-400 break-words block w-48 lg:w-64 text-center">
            {description}
          </p>

          <div className="mt-3 flex gap-2 items-center justify-center lg:items-end lg:justify-between flex-col lg:flex-row">
            <p
              className={`text-lg font-bold ${
                isBlue ? "text-blue-500" : "text-red-500"
              }`}
            >
              {price}
            </p>
            <div
              className={`flex items-center space-x-1.5 rounded-lg ${
                isBlue
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-red-500 hover:bg-red-600"
              } px-4 py-1.5 text-white duration-100`}
            >
              <FaCartPlus />

              <button className="text-sm" onClick={handleAlreadyClicked}>
                {alreadyClicked
                  ? isBlue
                    ? "Great decision!"
                    : "Why would you buy me?"
                  : "Add to cart"}
              </button>
            </div>
          </div>
        </div>
      </button>
    </article>
  );
}
