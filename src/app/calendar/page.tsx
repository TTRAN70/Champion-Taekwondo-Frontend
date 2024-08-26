import Image from "next/image";

export default function Calendar() {
  return (
    <main className="min-h-screen px-10 bg-[#F3F4F6]">
      <div className="font-bold mx-auto text-3xl py-10 flex justify-center">
        Notice: We also have more than one class each day
      </div>
      <div className="aspect-[3/4] xl:w-[50%] xl:h-[50%] relative mx-auto rounded-lg">
        <Image
          src="/calendar.png"
          fill
          alt="Calendar"
          style={{
            borderRadius: "10px",
            paddingBottom: "60px",
          }}
        />
      </div>
    </main>
  );
}
