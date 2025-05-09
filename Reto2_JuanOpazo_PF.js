function crearPregunta(texto, opciones) {
    const votos = [];
    for (let i = 0; i < opciones.length; i++) {
      votos.push(0);
    }
  
    return {
      texto: texto,
      opciones: opciones,
      votos: votos
    };
  }
  
  function votar(pregunta, indiceOpcion) {
    if (indiceOpcion >= 0 && indiceOpcion < pregunta.opciones.length) {
      pregunta.votos[indiceOpcion]++;
    }
    else{
        console.log(`Estás votando por una opción inválida`)
      }
  }
  
  function mostrarPregunta(pregunta) {
    console.log(pregunta.texto);
    for (let i = 0; i < pregunta.opciones.length; i++) {
      console.log(`   ${pregunta.opciones[i]}: ${pregunta.votos[i]} votos`);
    }
    console.log("----------------------------");
  }
  
  const encuesta = [
    crearPregunta("Pregunta seria, ¿cuál prefieres?", ["Tangananica", "Tangananá"]),
    crearPregunta("Completa la canción. Yo...", [
      "Sigo aquí, esperándote, y que tu dulce boca ruede por mi piel",
      ", yo no me doy por vencido, yo quiero un mundo contigo",
      "no sé mañana, yo no sé mañana, si estaremos juntos, si se acaba el mundo",
      "quería parar el tiempo, con tus ojos viéndome, con las ganas de quedarme así abrazándote"
    ]),
    crearPregunta(
      "Ana tiene el triple de edad de María y en 5 años más tendrá el doble, ¿cuánto suman las edades de Ana y María en la actualidad?",
      ["-7", "20", "Syntax Error"]
    ),
    crearPregunta(
      "Mejor canción motivacional para estudiar",
      ["En... Icel... encontrarás... tu alternativaaa", "Lo mejor ya se está haciendo, Simón Bolívar está creciendo"]
    )
  ];
  
  votar(encuesta[0], 1);
  votar(encuesta[1], 3);
  votar(encuesta[2], 2);
  votar(encuesta[3], 0);
  
  for (let i = 0; i < encuesta.length; i++) {
    mostrarPregunta(encuesta[i]);
  }
  