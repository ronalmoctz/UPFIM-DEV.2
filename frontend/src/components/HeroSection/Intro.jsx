import {intro} from "../../constants"
const Intro = () => {
  return (
    <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-center space-y-8 px-2 py-24 text-center md:px-12">
      <h1 className="mt-20 text-4xl font-bold leading-tight text-white md:text-6xl">{intro.title}</h1>
      <p className="text-lg text-gray-200 md:text-xl">{intro.description}</p>
      <button className="transform rounded-full bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:scale-105 hover:bg-blue-700">Vamos a empezar</button>
    </div>
  )
}

export default Intro
