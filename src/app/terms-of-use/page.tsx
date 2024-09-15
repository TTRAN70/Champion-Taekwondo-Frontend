import { terms } from "@/app/lib/legaldata";

export default function TermsOfUse() {
  return (
    <main className="min-h-screen p-20 lg:px-40 pb-40 flex justify-center flex-col">
      <div className=" text-4xl font-extrabold mb-20 sm:mx-auto">
        Terms of Use
      </div>
      {terms.map((elem) => {
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
