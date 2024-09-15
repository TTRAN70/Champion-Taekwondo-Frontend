import Image from "next/image";

export default function Schedule() {
  return (
    <main className="h-[50rem] px-10 bg-altgrey relative">
      <Image
        src="/blob.svg"
        fill
        alt="curved background image"
        style={{ objectFit: "cover" }}
        sizes="100vw"
        priority
        placeholder="blur"
        blurDataURL="/blob.svg"
      />
      <Image
        src="/calendar.jpg"
        fill
        alt="Calendar"
        style={{
          borderRadius: "10px",
          objectFit: "contain",
        }}
        sizes="100vw"
        placeholder="blur"
        blurDataURL="/calendar.jpg"
      />
    </main>
  );
}
