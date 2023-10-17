export default function Example() {
  return (
    <div className="container h-screen w-screen mx-auto flex items-center justify-center"> 
    <div className="flex flex-col bg-gray-700 shadow-lg shadow-gray-800 py-4 mx-4 px-6 rounded-md">
     <div className="flex flex-row items-center">
      <img className="w-24  rounded-full" alt="User Avatar" src="https://github.com/Romariolima99.png"/>
      <div className="ml-4">
       <h3 className="font-semibold text-xl">Romário Lima</h3>
       <h4 className="text-indigo-300 pt-1">Front-end Developer</h4>
       <h4 className="text-indigo-300 pt-1">Formação: Analise e desenvolvimento de sistemas</h4>
       </div>
       </div>
       <div className="mt-6">
       <h2 className="font-semibold text-2xl mb-2">Bio</h2>
       <p className="text-gray-300 font-light mt-1 max-w-lg text-justify"> 👋 Olá! me chamo Romário Lima, sou estudante de análise e desenvolvimento de sistemas. 
        Atualmente no quarto semestre, sou desenvolvedor front-end com experiência sólida em criar experiências web excepcionais.
       </p>
        </div>
        <div className="mt-6 ">
         <h2 className="font-semibold text-2xl mb-2">Carreira</h2>
        <div className="mt-06">
        <h3 className="text-indigo-500 font-medium text-xl mt-1">TopSapp
        </h3>
         <ul className="list-disc list-inside pl-4"> 
        <li className=" list-item">Analista de Suporte (12-2017 a 02-2021)</li>
        <li className=" list-item">Analista comercial  (02-2021 a 09-2023)</li>
        </ul>
        </div>
        <div className="mt-06">
        <h3 className="text-indigo-500 font-medium text-xl mt-1">Front-end Developer Freelancer
        </h3>
        <ul className="list-disc list-inside pl-4"> 
        <li className=" list-item">Front-end Developer Freelancer  (02-2023 até o momento)</li>
        </ul>
        </div>
        <div className="mt-06">
        <h3 className="text-indigo-500 font-medium text-xl mt-1">Onde me encontrar:
        </h3>
        <ul className="list-disc list-inside pl-4"> 
         <li className=" list-item">Github https://github.com/Romariolima99</li>
        <li className=" list-item">Linkedin https://www.linkedin.com/in/romariolima99/</li>
        </ul>
       </div>
      </div>
      </div>
    </div>
  ) 
}
