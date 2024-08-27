import Image from "next/image";

export default function Calendar() {
  return (
    <main className="h-[50rem] px-10 bg-[#F3F4F6] relative">
      <div className="max-w-[100%] max-h-[100vh] mx-auto rounded-lg">
        <Image
          src="/calendar.jpg"
          fill
          alt="Calendar"
          style={{
            borderRadius: "10px",
            objectFit: "contain",
          }}
        />
      </div>
    </main>
  );
}
