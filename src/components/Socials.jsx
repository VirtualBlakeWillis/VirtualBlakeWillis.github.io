import { socials } from '../constants'

const SocialsCard = ({ icon, name, url}) => {
  return (
    <div className="flex justify-start flex-col p-4 border-2 border-solid border-slate-500	rounded-lg"
         onClick={(e) =>  {e.preventDefault(); window.open(url, '_blank')}}>
      <img src={icon} alt=""  className="w-9 h-9 mb-4"/>
      <h2 className="text-[18px] font-bold">{name}</h2>
    </div>
  )

}

const Socials = () => {

  return (
    <section id="socials" className="text-left">
      <h1 className="text-[22px] font-bold m-3">Socials</h1>
      <div className="flex justify-between m-6">
        {socials.map((social) => (
          <SocialsCard
          name = {social.name}
          key = {social.id}
          icon = {social.icon}
          url={social.url}
          />
      ))}
      </div>
    </section>
  )

}

export default Socials