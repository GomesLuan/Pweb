import { CaoChupandoManga } from "./componentes/novoComponente"

export default function Principal(){
   return (
      <div>
         <h1>Nova Página</h1>
         <MariaPrea/>
         <CaoChupandoManga/>
         <MariaPrea mensagem="Morreu Maria Preá..."/>
      </div>
   )
}

export function MariaPrea({mensagem}){
   return (
      <h2>{mensagem}</h2>
   )
}