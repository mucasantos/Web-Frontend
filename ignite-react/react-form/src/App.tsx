/*
Instalar dependencias
-->CSS
npm install -D tailwindcss postcss autoprefixer        
npx tailwindcss init -p  

Storyboard

npx sb init --builder @storybook/builder-vite --use-npm
npm run storybook  

Bibliote para usar com Tails
https://www.npmjs.com/package/clsx

*/


import "./styles/global.css";

export function App() {
  return (
    <>
      <h1 className=" font-bold px-8 pv-8 text-2xl text-violet-500">Hello World!</h1>
      <button className="bg-cyan-500  font-bold px-4 py-2 rounded text-white">Enviar</button>
    </>
  );
}
