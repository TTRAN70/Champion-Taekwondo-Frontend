import { josefin, inter } from "@/app/fonts";
import Image from "next/image";

const skills = [
  {
    pic: "/dumbell.png",
    title: "PHYSICAL FITNESS",
    subtitle:
      "Try our high-energy workouts that build strength, flexibility, and cardiovascular endurance.",
  },
  {
    pic: "/tenacity.png",
    title: "MENTAL STRENGTH",
    subtitle:
      "Develop focus, discipline, and determination that extend beyond the training mat and into everyday life.",
  },
  {
    pic: "/community.png",
    title: "COMMUNITY",
    subtitle:
      "Join a supportive community of like-minded individuals, creating friendships and a sense of belonging",
  },
  {
    pic: "/kicking.png",
    title: "SELF-DEFENSE",
    subtitle:
      "Learn effective self-defense techniques while boosting confidence and situational awareness.",
  },
];

const imageStyles = {
  borderRadius: "100%",
  padding: "10px",
  backgroundColor: "#4583E1",
};

export default function Skills() {
  return (
    <div className="flex flex-col xl:flex-row items-center mt-20 xl:mt-32 justify-center xl:ml-12">
      <div className="flex flex-col sm:w-[27rem] gap-y-7 mb-20 xl:mb-0">
        <div
          className={`${josefin.className} text-center xl:text-left text-tkdblue text-lg font-bold`}
        >
          LEARN FROM A GRANDMASTER
        </div>
        <div
          className={`${josefin.className} text-center xl:text-left text-black text-4xl sm:text-7xl font-bold self-center sm:self-auto`}
        >
          GAIN VALUABLE SKILLS
        </div>
        <p
          className={`${inter.className} text-[#7B7878] text-center xl:text-left text-md sm:text-lg font-medium w-[90%] sm:w-[100%] self-center sm:self-auto`}
        >
          Unlock the power within you through the ancient art of Taekwondo.
          We&apos;re dedicated to fostering discipline, strength, and resilience
          through our time-honored training methods.
        </p>
      </div>
      <div className="grid justify-center gap-4 sm:grid-cols-2 2xl:grid-cols-4 xl:ml-7">
        {skills.map((skill) => {
          return (
            <div
              className="relative bg-altgrey rounded-[30px] pt-1 pl-1 overflow-hidden"
              key={skill.title}
            >
              <div className="flex h-[260px] sm:h-[300px] flex-col p-5 gap-y-2">
                <Image
                  src={skill.pic}
                  alt="Dumbell icon"
                  width={70}
                  height={70}
                  style={imageStyles}
                ></Image>
                <div className={`${josefin.className} text-2xl font-bold mt-2`}>
                  {skill.title}
                </div>
                <p className={`${inter} text-[#7B7878] text-md font-medium`}>
                  {skill.subtitle}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
