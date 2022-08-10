import "./Publicacoes.css";

function Publicacoes({publicacao}){
    return(
        <div className="publicacoes" key={`"publicacao"--${"index"}`}>
           <p>{publicacao.texto}</p> 
        </div>
    )
}

export default Publicacoes;