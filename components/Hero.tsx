import Image from "next/image"
import Button from "./Buttons";

const Hero = () => {
  const stars = new Array(5).fill(1);
  return (
    <section className="my-10 max-container padding-container flex flex-col gap-20 py-10 lg:py-20 xl:flex-row">
      <div className="hero-map -z-10" />
      <div className="flex flex-col flex-1 xl:w-1/2">
        <div className="relative">
          <Image src="/camp.svg" width={50} height={50} alt="" className="absolute -top-5 -left-3 w-10 md:w-[50px]"/>
          <h1 className="bold-52 md:bold-64 lg:bold-88">Putuk Truno Camp Area</h1>
        </div>

        <p className="mt-6 md:max-w-[520px] text-gray-30">
          We want to be on each of your journeys seeking the satisfaction of seeing the incorruptible beauty of nature. We can help you on an adventure around the world in just one app
        </p>

        <div className="flex items-center justify-start gap-5 my-10">
          <div className="flexCenter gap-2">
            {stars.map((_, index) => (
              <Image key={index} src="/star.svg" width={24} height={24} alt="rate" />
            ))}
          </div>

          <p className="text-blue-70 regular-16 md:regular-20"><span className="bold-16 md:bold-20">198K</span> Great Reviews</p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 md:justify-start w-full">
          <Button type="button" theme="btn_green" content="Download App"/>
          <Button type="button" theme="btn_white_text" content="How Do We Work?" icon="/play.svg"/>
        </div>
      </div>
      <div className="relative flex flex-1 items-start">
        <div className="p-8 bg-green-90 relative w-[268px] rounded-3xl -left-3 -top-7 md:left-0 md:top-0">

          <Image src="/close.svg" alt="close" width={24} height={24} className="absolute top-7 right-6 cursor-pointer"/>
          <p className="text-white bold-20">
          <span className="block regular-16 text-gray-20">Location</span>
            Aguas Calientes
          </p>

          <div className="flexBetween mt-4 gap-3">
            <p className="text-white bold-20">
              <span className="block regular-14 text-gray-20">Distance</span>
              173.28 mi
            </p>
            <p className="text-white bold-20">
              <span className="block regular-14 text-gray-20">Elevation</span>
              2.040 km
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero