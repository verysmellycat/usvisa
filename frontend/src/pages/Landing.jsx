import { countries, countryMap } from "../config.js";
import { Avatar } from "@nextui-org/react";
import { Divider } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { Link } from "@nextui-org/react";
import { useRef } from "react";
import { motion } from "framer-motion";

export default function Landing() {
  const bottomRef = useRef(null);
  const scrollToBottom = () => {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto flex min-h-screen flex-col gap-y-3 pb-16">
        <div className="flex h-[600px] flex-col justify-center space-y-6">
          <div className="text-center">
            <p className="text-xl font-semibold text-fuchsia-700 lg:text-3xl xl:text-4xl">
              usvisa.lol
            </p>
            <h1 className="text-6xl font-bold lg:text-7xl xl:text-8xl">
              Visa made easier than ever
            </h1>
          </div>
          <p className="text-center text-lg text-foreground-500">
            Blazing fast, optimized system with multi-country support, featuring
            automatic slot monitoring, rescheduling and real-time notification.
            It does it all for you.
          </p>
          <Button
            onClick={() => scrollToBottom()}
            className="max-w-[150px] self-center bg-foreground text-background"
            size="lg"
          >
            Get started
          </Button>
        </div>
        <h2 className="text-2xl font-bold">Select your country/region</h2>
        {Object.entries(countries).map((entry) => (
          <div key={entry[0]} className="space-y-3">
            <div className="space-y-1">
              <h3 className="text-lg">{entry[0]}</h3>
              <Divider />
            </div>
            <div className="grid grid-cols-2 gap-y-6 lg:grid-cols-4">
              {Object.keys(entry[1]).map((country) => (
                <Link
                  key={country}
                  href={`${countryMap[country][1]}/${country}`}
                  className="flex items-center gap-x-2"
                >
                  <Avatar
                    alt="country"
                    className="h-6 w-6 shrink-0"
                    src={`https://flagcdn.com/${country}.svg`}
                  />
                  <span className="text-lg">{countryMap[country][2]}</span>
                </Link>
              ))}
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>
    </motion.div>
  );
}
