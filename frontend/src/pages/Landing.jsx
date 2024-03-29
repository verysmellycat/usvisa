import { countries, countryMap, redashUrls } from "../config.js";
import { Avatar } from "@nextui-org/react";
import { Divider } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { Link } from "@nextui-org/react";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Landing() {
  const ref = useRef(null);
  const scrollToBottom = () => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    (function () {
      var d = document,
        s = d.createElement("script");
      s.src = "https://usvisa.disqus.com/embed.js";
      s.setAttribute("data-timestamp", +new Date());
      (d.head || d.body).appendChild(s);
    })();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto flex min-h-screen flex-col gap-y-6 pb-12">
        <div className="flex h-[600px] flex-col justify-center gap-y-6">
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
        <div className="relative space-y-6 overflow-hidden lg:h-[300px]">
          <div className="w-full space-y-1.5 text-lg lg:w-2/5">
            <p className="text-3xl font-bold">Expedite the Process</p>
            <p className="text-foreground-500">
              The wait time for Visa appointment averages hundreds of calender
              days in Canada and the UK. If you're tired of waiting, we are here
              to help.
            </p>
            <Link
              href="https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/wait-times.html"
              isExternal
              className="text-lg"
            >
              What's my wait time?
            </Link>
          </div>
          <div className="overflow-hidden">
            <img
              src="/waitTime.png"
              className="right-0 top-0 -z-10 mx-auto w-full -translate-y-5 -rotate-12 md:w-5/6 lg:absolute lg:w-[500px]"
            />
          </div>
        </div>
        <div className="flex flex-col gap-y-6">
          <h2 className="text-2xl font-bold">Pricing</h2>
          <div className="grid grid-cols-1 gap-x-6 gap-y-6 md:grid-cols-7">
            <div className="space-y-3 bg-gradient-to-br from-foreground-300 from-0% to-20% px-3 py-3 hover:-translate-y-1 hover:duration-300 md:col-span-4 md:py-6">
              <div className="space-y-1.5">
                <h2 className="text-center text-lg font-semibold lg:text-2xl">
                  Regular
                </h2>
                <p className="text-center text-base text-foreground-500 lg:text-lg">
                  Our standard mode. Best for average use cases and suitable for
                  most users.
                </p>
              </div>
              <div className="grid grid-cols-8 text-base lg:text-xl">
                <div className="col-span-2 space-y-2 font-medium">
                  <p className="invisible text-center">placeholder</p>
                  <p className="text-start">New user</p>
                  <p className="text-start">Returning user</p>
                </div>
                <div className="col-span-3 space-y-2 text-center font-medium">
                  <p>Europe</p>
                  <p className="text-cyan-500"> CA$ 19.99</p>
                  <p className="text-cyan-500"> CA$ 49.99</p>
                </div>
                <div className="col-span-3 space-y-2 text-center font-medium">
                  <p>America</p>
                  <p className="text-cyan-500">CA$ 49.99</p>
                  <p className="text-cyan-500">CA$ 79.99</p>
                </div>
              </div>
              <p>
                <span className="text-red-500">*</span> per person price
              </p>
            </div>
            <div className="flex flex-col gap-y-3 bg-gradient-to-br from-foreground-300 from-0% to-20% px-3 py-3 hover:-translate-y-1 hover:duration-300 md:col-span-3 md:py-6">
              <div className="space-y-1.5">
                <h2 className="text-center text-lg font-semibold lg:text-2xl">
                  Pro
                </h2>
                <p className="text-center text-base text-foreground-500 lg:text-lg">
                  Recommended only for those with emergency situations.
                </p>
              </div>
              <div className="flex grow flex-col justify-center gap-y-2 text-center text-base font-medium lg:text-xl">
                <p className="text-cyan-500">Varied price</p>
                <p className="lg:text-lg">
                  Send an email to support@usvisa.lol for inquires
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-1.5 p-3 text-sm text-foreground lg:text-base">
            <p>You're eligible for a 50% refund if you:</p>
            <p>1. Post on Xiaohongshu when you start using our website.</p>
            <p>
              2. Collect at least price/2 likes and bookmarks (that's 10 each if
              you paid $20).
            </p>
          </div>
          <div className="w-full space-y-1.5 text-sm text-foreground-500 lg:text-base">
            <p>
              Pricing is determined by the operational cost, which varies across
              countries based on the average server running time to grab a slot.
            </p>
            <p>
              We encourage you to value your chance, so that everybody gets a
              fair shot at the slots. Also, fees are on us if you refund a
              request. Therefore, price will be higher for returning users.
            </p>
          </div>
        </div>
        <h2 className="text-2xl font-bold" ref={ref}>
          Select your country/region
        </h2>
        {Object.entries(countries).map((entry) => (
          <div key={entry[0]} className="space-y-3">
            <div className="space-y-1">
              <div className="flex flex-col gap-x-1.5 gap-y-1.5 lg:flex-row lg:items-center">
                <h3 className="text-lg">{entry[0]}</h3>
                {entry[0] !== "Asia" && (
                  <Link
                    href={redashUrls[entry[0]]}
                    isExternal
                    showAnchorIcon
                    className="cursor-pointer text-lg"
                  >
                    View slot-monitoring stats
                  </Link>
                )}
              </div>
              <Divider />
            </div>
            <div className="grid grid-cols-2 gap-y-6 lg:grid-cols-3">
              {Object.keys(entry[1]).map((country) => (
                <Button
                  key={country}
                  as={Link}
                  href={`${countryMap[country][1]}/${country}`}
                  className="flex h-fit items-center justify-start bg-transparent hover:bg-foreground-100 hover:text-blue-600"
                >
                  <Avatar
                    alt="country"
                    className="h-6 w-6 shrink-0"
                    src={`https://flagcdn.com/${country}.svg`}
                  />
                  <span className="text-wrap text-lg">
                    {countryMap[country][2]}
                  </span>
                </Button>
              ))}
            </div>
          </div>
        ))}
        <h2 className="text-2xl font-bold">Leave your comments</h2>
        <div id="disqus_thread"></div>
      </div>
    </motion.div>
  );
}
