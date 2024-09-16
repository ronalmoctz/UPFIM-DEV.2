import AboutImg from '../../../assets/about.webp'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div className='md:px-14 p-4 max-w-s mx-auto '>
      <div className='bg-white flex flex-col md:flex-row justify-between items-center gap-8'>
        <div className='md:w-1/2'>
            <img src={AboutImg} alt="" />
        </div>
        
        <div className='md:w-3/5'>
            <h2 className='md:text-5xl text-3xl font-bold text-slate-900 mb-5 leading-normal text-center'>
              ¿Por que cursar un taller durante tu ciclo escolar <span className='text-red-800'>en la UPFIM?.</span>
            </h2>
           
            <motion.p
              className='text-slate-800 text-lg mb-7 text-justify'
              initial={{ opacity: 0, x: 100 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 1 }} 
            >
              Ofrecer servicios de transporte de carga a través de unidades modernas y equipadas con tecnología de punta, que permitan satisfacer las expectativas de nuestros clientes, logrando ser la mejor opción en la cadena logística de distribución.
            </motion.p>
            <div className="flex justify-center">
              <button className='py-3 px-8 bg-purple-700 font-semibold text-white rounded-lg transform transition-transform duration-300 hover:scale-105'>
                Vamos
              </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About;
