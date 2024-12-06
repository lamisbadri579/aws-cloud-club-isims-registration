
import Form from "./components/Form"
import whiteCloud from './assets/aws-logo/aws-cloud-white.svg'
function App() {

  return (
   <>
   
     <header className='relative'><p className='min-[320px]:hidden min-[980px]:flex font-jua tracking-widest text-xl text-white absolute top-4 right-4'>ISIMS</p></header>
     
     <Form />
     
     <footer className="relative"><img className=" absolute bottom-0 right-0  min-[480px]:w-32 min-[980px]:w-28  min-[1440px]:w-40" src={whiteCloud} alt="white-cloud"/></footer>
   </>
  )
}

export default App
