import Image from "next/image";

type propsType = {
  type: 'button' | 'submit';
  theme: string;
  content: string;
  icon?: string;
  full?: boolean;
}
const Button = ({type, theme, content, icon, full}: propsType) => {
  return (
    <button type={type} className={`${theme} ${full && `w-full`} flexCenter gap-3`}>
      {icon && <Image src={icon} alt="icon" width={24} height={24} />}
      <p>{content}</p>
    </button>
  )
}

export default Button;