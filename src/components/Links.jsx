import {links } from '../constants'

const Links = () => {
  function handleClick(name, url) {
    if (name === "Resume") {
      window.open(url, '_blank');
    }

  }
  return (
    <section id="links">
      <div className="">
        {links.map((link) => {
          return (
          <div className="flex justify-between m-auto px-6 py-3 cursor-pointer" key={link.id} onClick={() => window.open(link.url, '_blank')}>
            <h1>{link.name}</h1>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6"><path d="M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z"/></svg>
          </div>
          )
        })}
      </div>
    </section>
  )
}

export default Links