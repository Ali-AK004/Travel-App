import { FEATURES } from '@/constants';
import Image from 'next/image';

const Features = () => {
  return (
    <section className="bg-feature-bg bg-center bg-no-repeat pb-24 mt-24 flexCenter flex-col" id="Features">
      <div className="flex justify-end items-center padding-container max-container relative w-full">
        <div className="flex flex-1 lg:min-h-[900px]">
          <Image src="/phone.png" alt="phone" width={440} height={1000} className="feature-phone" />
        </div>

        <div className="lg:w-[60%] flex flex-col w-full">
          <div className="relative">
            <Image src="/camp.svg" alt="camp" width={50} height={50} className="absolute -top-[25px] left-1 w-10"/>
            <h2 className="bold-40 lg:bold-64 -mt-3">Our Features</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-10 z-5 gap-10">
            {FEATURES.map((feature) => (
              <div key={feature.title} className="flex items-start flex-col mt-5">
                <div className="rounded-full p-4 lg:p-7 bg-green-50">
                  <Image src={feature.icon} width={28} height={28} alt="icon" className="block"/>
                </div>
                <h5 className="bold-20 lg:bold-32 mt-5 capitalize">{feature.title}</h5>
                <p className="text-gray-30 mt-5 lg:mt-[30px] regular-16 bg-white/80">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}

export default Features;