import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "@/constants"
import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="flexCenter mb-24" id="Footer">
      <div className="max-container padding-container flex w-full flex-col gap-14">
        <div className="flex flex-col gap-[10%] items-start justify-center md:flex-row">
          <Link href="/" className="max-md:mb-10">
            <Image src="/hilink-logo.svg" alt="Logo" width={74} height={29} />
          </Link>

          <div className="flex flex-wrap gap-10 md:flex-1 sm:justify-between">
              {FOOTER_LINKS.map((col) => (
                <FooterLinks title={col.title} key={col.title}>
                  <ul className="flex gap-4 flex-col text-gray-30 regular-16">
                    {col.links.map((link) => (
                      <Link href='/' key={link} className="flex flex-col gap-2 hover:translate-x-1">{link}</Link>
                    ))}
                  </ul>
                </FooterLinks>
              ))}
            <div className="flex flex-col">
              <FooterLinks title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((contact) => (
                  <div key={contact.label} className="flex gap-3 items-center">
                    <p className="whitespace-nowrap">{contact.label}:</p>
                    <p className="text-blue-70 medium-14">{contact.value}</p>
                  </div>
                ))}
              </FooterLinks>
            </div>
            <div className="flex gap-3 items-start">
              <FooterLinks title={SOCIALS.title}>
                <ul className="flex gap-3 items-center" >
                  {SOCIALS.links.map((social) => (
                      <Link href={social.href} key={social.href} className="hover:scale-110" target="_blank">
                        <Image src={social.src} alt="socials" width={50} height={50} className="w-7"/>
                      </Link>
                  ))}
                </ul>
              </FooterLinks>
            </div>
          </div>
        </div>

        <div className="border bg-gray-30" />

        <p className="text-center w-full regular-16 text-gray-30">&copy; <span className="bold-16 text-black">{year}</span> Hilink | All rights reserved</p>
      </div>

    </footer>
  )
}

interface footerProps { 
  title: string;
  children: React.ReactNode;
}

const FooterLinks = ({title, children}: footerProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  )
}
export default Footer