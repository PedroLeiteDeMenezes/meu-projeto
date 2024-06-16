import React from "react";
import './styles/App.css';
import { Navbar } from "./components/Navbar/Navbar";
import { Article } from "./components/Article/Article";

import articl1Img from "./assets/images/article1.png"
import articl2Img from "./assets/images/article2.png"
import articl3Img from "./assets/images/article3.png"
import { Counter } from "./components/counter/Counter";

// Componente em classe é uma classe que herda a classe Component do React,
// e retorna HTML dentro do método render.

//<> </>: Em react mais conhecida como fragment, basicamente é uma tag que é passada apenas para armazenar outras tags pois em react você só pode armazenar uma tag no render.

class App extends React.Component{
  // Método responsável por renderizar o conteúdo HTML do nosso componente
  render(){
    return (
      <>
        <Navbar />

        <section id="articles">
          <Article  
          title="Designing Dashboards" 
          provider="Nasa" 
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae dicta quaerat sint fugit earum. Est possimus minima fuga velit at, similique placeat deserunt perferendis molestiae culpa deleniti doloribus exercitationem accusantium."
          thumbnail={articl1Img}
          />

          <Article 
          title="Vibrant Portraits of 2020" 
          provider="SpaceNews" 
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae dicta quaerat sint fugit earum. Est possimus minima fuga velit at, similique placeat deserunt perferendis molestiae culpa deleniti doloribus exercitationem accusantium."
          thumbnail={articl2Img}/>

          <Article 
          title="36 Days of Malayalam type"
          provider="Spaceflight Now"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae dicta quaerat sint fugit earum. Est possimus minima fuga velit at, similique placeat deserunt perferendis molestiae culpa deleniti doloribus exercitationem accusantium."
          thumbnail={articl3Img}
          />

          <Article 
          title="Designing Dashboards" 
          provider="Nasa" 
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae dicta quaerat sint fugit earum. Est possimus minima fuga velit at, similique placeat deserunt perferendis molestiae culpa deleniti doloribus exercitationem accusantium."
          thumbnail={articl1Img}/>
        </section>
        <Counter />
      </>
    );
  }
}

export default App;
