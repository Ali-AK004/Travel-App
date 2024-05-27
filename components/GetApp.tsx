import Image from 'next/image';
import Button from './Buttons';

const GetApp = () => {
  return (
    <section className="flexCenter w-full flex-col py-[100px] 2xl:rounded-5x" id="GetApp">
      <div className="get-app">
        <div className="flex justifiy-center items-start flex-col w-full flex-1 gap-12">
          <h2 className="bold-40 lg:bold-64 text-white">Get for <br className="max-xl:hidden" /> free now!</h2>
          <p className="regular-16 text-gray-10">Available on iOS and Android</p>
          <div className="flex flex-col w-full xl:flex-row gap-3 whitespace-nowrap">
            <Button
              type="button"
              theme="btn_white"
              content="App Store"
              icon="/apple.svg"
              full
            />
            <Button type="button" theme="btn_dark_green_outline" content="Play Store" icon="/android.svg" full/>
          </div>
        </div>
        <div className="flex items-center justify-end flex-1">
          <Image src="/phones.png" alt="phones" width={550} height={870} className="" />
        </div>
      </div>
    </section>
  )
}

export default GetApp;