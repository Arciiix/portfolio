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
      className={`glass-panel w-max rounded-2xl p-3 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
        alreadyClicked ? (isBlue ? "bg-blue-700" : "bg-red-900") : ""
      }`}
    >
      <button onClick={handleAlreadyClicked}>
        <div className="relative flex items-end justify-center overflow-hidden rounded-xl">
          <Image
            className="h-20 w-max object-contain lg:h-44"
            src={imageSrc}
            alt={imageAlt}
            height={180}
            width={320}
          />
        </div>

        <div className="mt-1 p-2">
          <h2 className="text-slate-200">{title}</h2>
          <p className="mx-auto mt-1 block w-48 break-words text-center text-sm text-slate-400 lg:w-64">
            {description}
          </p>

          <div className="mt-3 flex flex-col items-center justify-center gap-2 lg:flex-row lg:items-end lg:justify-between">
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
