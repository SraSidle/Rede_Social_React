import "../home/Home.css";
import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import ListUsers from "../../components/ListUsers/ListUsers";
import Publicacoes from "../../components/Publicacoes/Publicacoes";
import { UsersServices } from "../../services/UsersService";
import { Api } from "../../helpers/Api";

function Home() {
  const [publicacoes, setPublicacoes] = useState([]);
  const [newPublic, setnewPublic] = useState();

  const create = async () => {
    const response = await fetch(Api.baseURL + "/publicacoes", {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify({
        texto: newPublic,
        usuarioId: 1,
      }),
    });
    setnewPublic(response); // setUpdateList(response); //((prev) => !prev)
  };

  // useEffect(() => {
  //   UsersServices.getPublicacoes().then(setPublicacoes);
  // });

  return (
    <div>
      <Header />
      <div className="nova-publicacao">
        <img
          className="foto-perfil"
          src="https://th.bing.com/th/id/R.136f218ca666d0f9ef99a9c75e11be04?rik=mSbyqjAlNrFe4w&riu=http%3a%2f%2f3.bp.blogspot.com%2f_vG0fWsry7w0%2fTQIK7sHG6hI%2fAAAAAAAAAGM%2fkFTq_yc-EqY%2fw1200-h630-p-k-no-nu%2f99870_D00680b_display.jpg&ehk=pVqB5XHSDjO0HeGI8PlMsZfujVuNjuIu7Vu089PN1eM%3d&risl=&pid=ImgRaw&r=0"
        />
        <div className="publicacao-direita">
          <h2>Boas vindas, Sra Sidle</h2>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              create();
              // handlerCreateTask();
            }}
          >
            <input
              placeholder="Conte algo a seus amigos."
              id="create__publicacao"
              type="text"
              onChange={(event) => setnewPublic(event.target.value)}
            />
            <button type="submit">Publicar</button>
          </form>
        </div>
      </div>
      <ListUsers updateList={setnewPublic} />
      {publicacoes.map((publicacao, index) => {
        <Publicacoes key={`publicacao--${index}`} publicacao={publicacao} />;
      })}
    </div>
  );
}

export default Home;
