import Image from "next/image"

const Guide = () => {
  return (
    <section className="py-10 max-lg:mt-64" id="Guide">
      <div className="flexBetween flex-col lg:flex-row max-container padding-container">
        <div className="flex flex-col gap-5">
          <div className="relative">
            <Image src="/camp.svg" width={50} height={50} className="absolute rounded-full -top-11 -left-5" alt="camp"/>
            <h4 className="text-green-50 regular-18">WE ARE HERE FOR YOU</h4>
          </div>
          <h3 className="bold-40 lg:bold-64">Guide You <br className='max-lg:hidden' /> to Easy Path</h3>
        </div>
          <p className="text-gray-30 regular-16 lg:max-w-[520px] mt-4">Only with the hilink application you will no longer get lost and get lost again, because we already support offline maps when there is no internet connection in the field. Invite your friends, relatives and friends to have fun in the wilderness through the valley and reach the top of the mountain</p>
      </div>

      <div className="relative mt-24 max-container flexCenter w-full">
      <Image src="/boat.png" alt="boat" width={1440} height={580} className="2xl:rounded-5xl w-full object-cover object-center"/>
        <div className="absolute bg-white pl-5 pr-7 py-8 lg:top-20 md:left-[5%] flex gap-3 rounded-2xl border shadow-md">
          <Image src="/meter.svg" width={16} height={158} alt="meter" className="h-full w-auto"/>
          <div className="flex items-start justify-between gap-3 flex-col">
            <div className="flex flex-col">
              <div className="flexBetween gap-3">
                <h3 className="regular-16 text-gray-50">Destination</h3>
                <p className="text-green-50 bold-16">48 min</p>
              </div>
              <p className="bold-18">Aguas Calientes</p>
            </div>
            <div className="flex flex-col gap-3 justify-end items-start">
              <h3 className="text-slate-500">Start track</h3>
              <p className="bold-18">Wonorejo Pasuruan</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Guide