class Pregunta {
    constructor(texto, opciones) {
      this.texto = texto;
      this.opciones = opciones;
      this.votos = [];
      for (let i = 0; i < opciones.length; i++) {
        this.votos.push(0);
      }
    }
  
    votar(indiceOpcion) {
      if (indiceOpcion >= 0 && indiceOpcion < this.opciones.length) {
        this.votos[indiceOpcion]++;
      }
      else{
        console.log(`Estás votando por una opción inválida`)
      }
    }

    mostrarResultados() {
      console.log(this.texto);
      for (let i = 0; i < this.opciones.length; i++) {
        console.log(`   ${this.opciones[i]}: ${this.votos[i]} votos`);
      }
      console.log("----------------------------");
    }
  }
  
  class Encuesta {
    constructor() {
      this.preguntas = [];
    }
  
    agregarPregunta(pregunta) {
      this.preguntas.push(pregunta);
    }
  
    mostrarEncuesta() {
      for (let i = 0; i < this.preguntas.length; i++) {
        this.preguntas[i].mostrarResultados();
      }
    }
  }
  
  const encuesta = new Encuesta();
  
  encuesta.agregarPregunta(new Pregunta("Pregunta seria, ¿cuál prefieres?", ["Tangananica", "Tangananá"]));
  encuesta.agregarPregunta(new Pregunta("Completa la canción. Yo...", [
    "Sigo aquí, esperándote, y que tu dulce boca ruede por mi piel",
    ", yo no me doy por vencido, yo quiero un mundo contigo",
    "no sé mañana, yo no sé mañana, si estaremos juntos, si se acaba el mundo",
    "quería parar el tiempo, con tus ojos viéndome, con las ganas de quedarme así abrazándote"
  ]));
  encuesta.agregarPregunta(new Pregunta(
    "Ana tiene el triple de edad de María y en 5 años más tendrá el doble, ¿cuánto suman las edades de Ana y María en la actualidad?",
    ["-7", "20", "Syntax Error"]
  ));
  encuesta.agregarPregunta(new Pregunta(
    "Mejor canción motivacional para estudiar",
    ["En... Icel... encontrarás... tu alternativaaa", "Lo mejor ya se está haciendo, Simón Bolívar está creciendo"]
  ));
  
  encuesta.preguntas[0].votar(0);
  encuesta.preguntas[1].votar(3);
  encuesta.preguntas[2].votar(2);
  encuesta.preguntas[3].votar(0);

  encuesta.mostrarEncuesta();
  