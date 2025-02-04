"use client";
import Image from "next/image";
import "@fontsource/paytone-one";

const CashInput = () => {
  return (
    <div className="">
      <input
        placeholder="số tiền muốn rút"
        className="bg-[#fe6503] rounded-full h-14 text-[#ffffff] placeholder-gray-100 w-full px-5 text-lg"
      />
    </div>
  );
};

const TaskButton = ({ triggerFn, text, hasIcon }: any) => {
  return (
    <button
      className="text-white uppercase bg-[#fe6503] w-2/3 rounded-full text-2xl py-3 hover:bg-[#ffbd59] relative"
      onClick={triggerFn}
    >
      <p className="mr-6">{text}</p>
      {hasIcon && (
        <Image
          src="/mandarin.png"
          width={55}
          height={55}
          className="absolute ml-24 -mt-16"
          alt={"mandarin image"}
        />
      )}
    </button>
  );
};

export default function withdraw() {
  return (
    <div className="bg-[#fff9a7] min-h-screen w-screen font-paytone uppercase">
      <div className="flex items-center pt-32 h-full flex-col ">
        <div className="relative text-6xl text-[#fe6503] font-thin text-left flex justify-center w-2/3 leading-tight">
          <p>rút xiền</p>
        </div>

        <div className="mt-28 w-7/12 flex gap-16 flex-col items-center">
          <CashInput />

          <TaskButton text="lưu" hasIcon={true} />
        </div>
      </div>
    </div>
  );
}
