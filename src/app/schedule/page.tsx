import Image from "next/image";

export default function Schedule() {
  return (
    <main className="h-[50rem] px-10 bg-altgrey relative">
      <Image
        src="/blob.svg"
        fill
        alt="curved background image"
        objectFit="cover"
      />
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
