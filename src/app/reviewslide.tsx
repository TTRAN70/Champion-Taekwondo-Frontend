import Image from "next/image";
import { inter } from "@/app/fonts";
import { TReviews } from "@/app/lib/definitions";

export default function ReviewSlide({ previews }: { previews: TReviews }) {
  return (
    <div className="p-3">
      <div className="flex justify-evenly gap-2 flex-col help:flex-nowrap help:flex-row">
        {previews.map((elem) => {
          return (
            <div
              key={elem.person}
              className="basis-[30vw] p-8 bg-white rounded-lg flex flex-col justify-start relative"
            >
              <p className={`${inter.className} self-start font-semibold`}>
                <q>{elem.review}</q>
              </p>
              <div className="text-sm text-slate-700 mb-3">{elem.via}</div>
              <div className="mt-auto">
                <Image
                  alt={elem.person}
                  width={40}
                  height={40}
                  src={elem.imageurl}
                  style={{
                    float: "left",
                    marginRight: "10px",
                    borderRadius: "50px",
                  }}
                />
                <div className="font-bold">{elem.person}</div>
                <div className="text-sm text-slate-700">{elem.title}</div>
                <div className="right-5 bottom-8 absolute p-1 text-white bg-[#3C84FF] rounded-lg">
                  <Image alt="stars" width={90} height={90} src="/stars.png" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
