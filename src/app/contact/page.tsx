import { josefin } from "@/app/fonts";
import { TaekwondoLoader } from "@/app/clientloaders";
import { Suspense } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1
          className={`${josefin.className} text-4xl font-bold text-center mb-2`}
        >
          Contact Us
        </h1>
        <p className="text-center text-black/80 mb-8">
          Let us know what's happening
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-gray-300 pt-10">
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className={`${josefin.className} text-2xl font-semibold`}>
                Get in Touch
              </h2>
              <p className="text-muted-foreground">
                We'd love to hear from you. Here's how you can reach us...
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <svg
                  viewBox="0 0 12 12"
                  enableBackground="new 0 0 12 12"
                  version="1.1"
                  xmlSpace="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  fill="#000000"
                  width={20}
                  height={20}
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M6,0C3.2385864,0,1,2.2385864,1,5s2.5,5,5,7c2.5-2,5-4.2385864,5-7S8.7614136,0,6,0z M6,7 C4.8954468,7,4,6.1045532,4,5s0.8954468-2,2-2s2,0.8954468,2,2S7.1045532,7,6,7z"
                      fill="#1D1D1B"
                    ></path>
                  </g>
                </svg>
                <span>
                  Champion Tae Kwon Do 8771 Park Blvd, Seminole, FL 33777
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M2.00589 4.54166C1.905 3.11236 3.11531 2 4.54522 2H7.60606C8.34006 2 9.00207 2.44226 9.28438 3.1212L10.5643 6.19946C10.8761 6.94932 10.6548 7.81544 10.0218 8.32292L9.22394 8.96254C8.86788 9.24798 8.74683 9.74018 8.95794 10.1448C10.0429 12.2241 11.6464 13.9888 13.5964 15.2667C14.008 15.5364 14.5517 15.4291 14.8588 15.0445L15.6902 14.003C16.1966 13.3687 17.0609 13.147 17.8092 13.4594L20.8811 14.742C21.5587 15.0249 22 15.6883 22 16.4238V19.5C22 20.9329 20.8489 22.0955 19.4226 21.9941C10.3021 21.3452 2.65247 13.7017 2.00589 4.54166Z"
                      fill="#000000"
                    ></path>{" "}
                  </g>
                </svg>
                <span>727-399-2999</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg
                  version="1.1"
                  id="_x32_"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 512 512"
                  xmlSpace="preserve"
                  fill="#000000"
                  width={19}
                  height={19}
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g>
                      {" "}
                      <path
                        className="st0"
                        d="M496.563,68.828H15.438C6.922,68.828,0,75.75,0,84.281v30.391l256,171.547l256-171.563V84.281 C512,75.75,505.078,68.828,496.563,68.828z"
                      ></path>{" "}
                      <path
                        className="st0"
                        d="M0,178.016v203.391c0,34.125,27.641,61.766,61.781,61.766h388.438c34.141,0,61.781-27.641,61.781-61.766V178 L256,349.563L0,178.016z"
                      ></path>{" "}
                    </g>{" "}
                  </g>
                </svg>
                <span>ctkdflorida@gmail.com</span>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className={`${josefin.className} text-xl font-semibold`}>
                Office Hours
              </h3>
              <p>Monday - Friday: 9am - 5pm</p>
              <p>Saturday: 10am - 2pm</p>
              <p>Sunday: Closed</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="aspect-square">
              <Suspense fallback={<TaekwondoLoader />}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7055.992846820747!2d-82.76356432397509!3d27.84064621959866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2fb6c97492793%3A0xb10c6673f8502ef3!2sChampion%20Tae%20Kwon%20Do!5e0!3m2!1sen!2sus!4v1726038009505!5m2!1sen!2sus"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full rounded-md"
                ></iframe>
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
