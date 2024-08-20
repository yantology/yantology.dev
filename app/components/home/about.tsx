import { faClock, faCloudSunRain } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export default function About() {
  const [time, setTime] = useState("00:00:00");

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-20 mb-10">
      <div className="p-5 md:flex items-center">
        <div className="flex justify-center md:mr-8 md:shrink-0">
          <div className="relative">
            <img
              className="rounded-full ring-[3px] ring-indigo w-44 h-44"
              alt="avatar"
              src="https://avatars.githubusercontent.com/u/59044581?v=4"
            />
            <span className="w-6 h-6 bg-[#181b24] rounded-full absolute bottom-2 right-2"></span>
          </div>
        </div>
        <div className="mt-3 w-full">
          <h1 className="text-4xl font-bold dark:text-white">
            Hey, I&apos;m <span className="text-indigo">wijaynto</span>
          </h1>
          <p className="text-md mt-1 dark:text-white/50">
            I&apos;m an 18 years old developer from Turkey. I&apos;m currently
            working on my own projects and learning new things.
          </p>
          <div className="mt-4">
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faClock}
                className=" text-indigo text-lg mr-2"
              />
              <i className="fas fa-clock text-indigo text-lg mr-2" />
              <span className="text-md font-light dark:text-white/50">
                Indonesia / {time}
              </span>
            </div>
            <div className="flex items-center mt-1">
              <FontAwesomeIcon
                icon={faCloudSunRain}
                className=" text-indigo text-lg mr-2"
              />
              <span className="text-md font-light dark:text-white/50">
                Clouds / 25.68°C / 69%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
