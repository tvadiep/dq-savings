"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import "@fontsource/paytone-one";

const TaskButton = ({ triggerFn, text, hasIcon }: any) => {
  return (
    <button
      className="text-white uppercase bg-[#fe6503] w-full rounded-full text-2xl py-3 hover:bg-[#ffbd59]"
      onClick={triggerFn}
    >
      <p className="mr-5">{text}</p>
      {hasIcon && (
        <Image
          src="/mandarin.png"
          width={55}
          height={55}
          className="absolute ml-44 -mt-16"
          alt={"mandarin image"}
        />
      )}
    </button>
  );
};

export default function Home() {
  const router = useRouter();

  const handleDepositRequest = () => {
    router.push("/task/deposit");
  };

  const handleWithdrawRequest = () => {
    router.push("/task/withdraw");
  };

  const handleStatsRequest = () => {
    router.push("/task/stats");
  };

  return (
    <div className="bg-[#fff9a7] min-h-screen w-screen font-paytone">
      <div className="flex items-center pt-32 h-full flex-col ">
        <div className="relative text-6xl text-black font-thin text-left flex justify-center w-2/3 leading-tight">
          <p>Tiết kiệm Quýt</p>

          <Image
            src="/mandarin.png"
            width={110}
            height={110}
            className="absolute ml-28 mt-8"
            alt={"mandarin image"}
          />
        </div>

        <div className="mt-28 w-7/12 flex gap-16 flex-col">
          <TaskButton
            text="Nạp tiền"
            hasIcon={true}
            triggerFn={() => handleDepositRequest()}
          />
          <TaskButton
            text="Rút Tiền"
            hasIcon={true}
            triggerFn={() => handleWithdrawRequest()}
          />
          <TaskButton
            text="Thống Kê"
            hasIcon={true}
            triggerFn={() => handleStatsRequest()}
          />
        </div>
      </div>
    </div>
  );
}
