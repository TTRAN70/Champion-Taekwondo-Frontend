import { privacy } from "@/app/lib/legaldata";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen p-20 lg:px-40 flex justify-center flex-col">
      {privacy.map((elem) => {
        return (
          <div key={elem.title} className="mb-10">
            <div className="font-bold text-2xl mb-5">{elem.title}</div>
            <p className="font-medium text-md text-black/80">{elem.content}</p>
          </div>
        );
      })}
    </main>
  );
}
