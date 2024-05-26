import { PEOPLE_URL } from '@/constants';
import Image from 'next/image';

type campProps = {
  backgroundImage: string;
  title: string;
  subTitle: string;
  peopleJoined: string;
}

const Campimage = ({backgroundImage, title, subTitle, peopleJoined}: campProps) => {
  return (
    <div className={`${backgroundImage} h-full w-full min-w-[1100px] bg-cover bg-no-repeat relative md:rounded-5xl lg:ml-3`}>
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
        <div className="absolute xl:top-[60px] xl:left-[40px] top-7 left-5 flex items-center gap-5">
          <div className="flexCenter p-4 rounded-full bg-green-50">
            <Image src="/folded-map.svg" width={28} height={28} alt="map" />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="text-white bold-18">{title}</h4>
            <p className="text-white regular-14">{subTitle}</p>
          </div>
        </div>

        <div className="absolute xl:bottom-[40px] xl:left-[40px] bottom-7 left-5 flex items-center gap-5">
          <div className="-space-x-4 flexCenter">
            {PEOPLE_URL.map((url) => (
                <Image src={url} key={url} alt="persone" width={52} height={52} className="rounded-full h-10 w-10"/>
            ))}
          </div>
          <h5 className="text-white bold-16 md:bold-20">{peopleJoined}</h5>
        </div>
      </div>
    </div>
  )
}

const Camp = () => {
  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <Campimage
          backgroundImage="bg-img-1"
          title="Putuk Truno Camp"
          subTitle="Prigen, Pasuruan"
          peopleJoined="100+ Joined"
        />
        <Campimage
          backgroundImage="bg-img-2"
          title="Mountain View Camp"
          subTitle="Somewhere in the Wilderness"
          peopleJoined="100+ Joined"
        />
      </div>
      <div className="absolute max-lg:mx-auto max-lg:top-full lg:right-10 lg:-bottom-5 px-6">
        <div className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl rounded-3xl w-full xl:px-16 xl:py-20 overflow-hidden">
          <Image src="/quote.svg" alt="quote" width={186} height={219} className="camp-quote"/>
          <h4 className="regular-24 md:regular-32 text-white capitalized 2xl:regular-64"><strong>Feeling Lost</strong> And Not Knowing The Way?</h4>
          <p className="mt-5 text-white regular-14 xl:regular-16">Starting from the anxiety of the climbers when visiting a new climbing location, the possibility of getting lost is very large. That&apos;s why we are here for those of you who want to start an adventure</p>
        </div>
      </div>
    </section>
  )
}

export default Camp;