import React from "react";
import "./pages.css";
import NavBar from "../components/NavBar";
import ProfileIMG from "../images/profile.jpg";

const HomePage = () => {
  return (
    <React.Fragment>
      <NavBar />
      <main>
        <section>
          <img className="profileImg" src={ProfileIMG} alt="" />
          <h1>Vanessa Suazo</h1>
          <br/>
          <h2>Frontend Developer</h2>
        </section>
        <section>
          <h3>Hello World!</h3>
          <p>
            Recientemente egresada de Laboratoria, en donde descubri el gusto
            por la tecnologia y la innovacion. La curiosidad de seguir
            aprendiendo ya es una de mis principales caracteristicas,
            Actualmente, estoy en la búsqueda de un trabajo que me permita
            seguir creciendo y desarrollando mis habilidades, y por qué no crear
            otras nuevas.
          </p>
        </section>
      </main>
    </React.Fragment>
  );
};

export default HomePage;
