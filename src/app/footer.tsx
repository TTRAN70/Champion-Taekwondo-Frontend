import Image from "next/image";
import { staat, inter, josefin } from "@/app/fonts";
import Link from "next/link";

const data = [
  {
    title: "Navigate",
    content: [
      {
        title: "Home",
        src: "/",
      },
      {
        title: "Schedule",
        src: "/schedule",
      },
      {
        title: "About",
        src: "/about",
      },
      {
        title: "Gallery",
        src: "/gallery",
      },
    ],
  },
  {
    title: "Programs",
    content: [
      {
        title: "Kids",
        src: "/kidsctkd",
      },
      {
        title: "Teens",
        src: "/teensadultsctkd",
      },
      {
        title: "Adults",
        src: "/teensadultsctkd",
      },
      {
        title: "After School",
        src: "/afterschoolctkd",
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-black p-10">
      <div className="flex justify-evenly gap-y-5 flex-wrap">
        <div className="flex gap-x-10 gap-y-5 flex-wrap">
          <div className="relative w-20 h-20 xl:w-24 xl:h-24">
            <Image
              src="/ctkdlogo.png"
              fill
              style={{ objectFit: "contain" }}
              alt="CTKD Logo"
              sizes="10vw"
            />
          </div>
          <div>
            <h4 className={`${staat.className} text-sm text-white`}>
              CHAMPION TAEKWONDO
            </h4>
            <ul className="list-none text-white/[.8] text-xs">
              <li className="leading-relaxed">8771 Park Blvd,</li>
              <li className="leading-relaxed">Seminole FL, 33777</li>
              <li className="leading-relaxed">727-399-2999</li>
              <li className="leading-relaxed">ctkdflorida@gmail.com</li>
            </ul>
          </div>
          {data.map((elem) => {
            return (
              <div key={elem.title}>
                <h4
                  className={`${inter.className} text-sm text-white font-bold`}
                >
                  {elem.title}
                </h4>
                <ul className="list-none text-white/[.8] text-xs ">
                  {elem.content.map((content) => {
                    return (
                      <li
                        key={content.title}
                        className="leading-relaxed hover:text-white/[.9]"
                      >
                        <Link href={content.src}>{content.title}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
          <div>
            <h4 className={`${inter.className} text-sm text-white font-bold`}>
              Legal
            </h4>
            <ul className="list-none text-white/[.8] text-xs">
              <li className="leading-relaxed hover:text-white/[.9]">
                <Link href="/terms-of-use">Terms of use</Link>
              </li>

              <li className="leading-relaxed hover:text-white/[.9]">
                <Link href="/privacy-policy">Privacy policy</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center border-l-4 pl-10">
          <Link
            target="_blank"
            href="https://www.facebook.com/ChampionTaeKwonDoFlorida"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="50"
              height="50"
              viewBox="0,0,300,150"
              style={{ fill: "#FFFFFF", position: "relative", bottom: "8px" }}
            >
              <g
                fill="#ffffff"
                fillRule="nonzero"
                stroke="none"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit="10"
                strokeDasharray=""
                strokeDashoffset="0"
                fontFamily="none"
                fontWeight="none"
                fontSize="none"
                textAnchor="none"
              >
                <g transform="scale(5.12,5.12)">
                  <path d="M25,3c-12.15,0 -22,9.85 -22,22c0,11.03 8.125,20.137 18.712,21.728v-15.897h-5.443v-5.783h5.443v-3.848c0,-6.371 3.104,-9.168 8.399,-9.168c2.536,0 3.877,0.188 4.512,0.274v5.048h-3.612c-2.248,0 -3.033,2.131 -3.033,4.533v3.161h6.588l-0.894,5.783h-5.694v15.944c10.738,-1.457 19.022,-10.638 19.022,-21.775c0,-12.15 -9.85,-22 -22,-22z"></path>
                </g>
              </g>
            </svg>
          </Link>
          <div className={`${josefin.className} text-white`}>
            Any Questions?{" "}
            <Link href="/contact">
              <span className="underline">Contact us</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
