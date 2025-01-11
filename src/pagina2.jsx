import {useEffect, useState} from "react";
import './fondo.css'
import fondo from './assets/fondo.png'
import imagen from './assets/image.png'
import {Link} from "react-router-dom";
export default function Pagina2() {
    const [visibleText, setVisibleText] = useState(0);
    const [visibleText2, setVisibleText2] = useState(0);
    const [hearts, setHearts] = useState([]);
    const maxHearts = 25;




    useEffect(() => {
        let heartCount = 0;

        const interval = setInterval(() => {
            if (heartCount < maxHearts) {
                setHearts((prevHearts) => [
                    ...prevHearts,
                    {
                        id: Date.now() + heartCount, // ID único para cada corazón
                        left: Math.random() * 100, // Posición aleatoria de izquierda a derecha
                    },
                ]);
                heartCount++;
            } else {
                clearInterval(interval); // Detener el intervalo una vez se generen los 50 corazones
            }
        }, 1000); // Un nuevo corazón cada 300ms

        return () => clearInterval(interval);
    }, []);
    return (
        <>
            <div className=" flex justify-center items-center relative bg-pink-400 h-screen w-screen">
            <div className="flex justify-center items-center  w-full h-full absolute  top-0 z-10">
                {visibleText < 3 && (
                <img src={fondo}
                        alt="fondo"
                        className="w-4/5  flex justify-center items-center object-cover max-w-[600px]"
                />)}
                {visibleText === 3 && (
                  <div className="flex flex-col justify-center items-center absolute">
  <div className="corazon1 left-5" style={{ animationDelay: '0s' }}></div>
  <div className="corazon1" style={{ animationDelay: '0.5s' }}></div>
  <div className="corazon1 left-1" style={{ animationDelay: '1s' }}></div>
  <div className="corazon1 right-11" style={{ animationDelay: '1.5s' }}></div>
</div>
                )}
                {visibleText > 3 && visibleText<7 && (
                    <div className="rain-container">
                        {hearts.map((heart) => (
                            <div
                                key={heart.id}
                                className="heart"
                                style={{left: `${heart.left}%`, animationDuration: `${Math.random() * 2 + 3}s`}}
                            />
                        ))}
                    </div>
                )}
            </div>
            <div className="flex flex-col justify-center items-center top-0 w-4/5 h-full absolute z-20">
                <div className="flex flex-col justify-center items-center w-4/5 h-3/4">
                    {visibleText === 0 && (
                        <h1 className="text-4xl font-bold text-white text-center w-4/5" id="first-h1">Nadith yoana</h1>
                    )}
                    {visibleText === 1 && (
                        <h1 className="text-1xl font-bold text-white text-center w-4/5" id="first-h1">Aun recuerdo ese
                            marzo que llegaste a mi vida, desde entonces mi vida cambió de inmediato, y cuando te empecé
                            a amar,
                            todo en mí cambió. Cada día a tu lado es un regalo,
                            como si Dios hubiera conspirado para que nuestras almas se encontraran. </h1>
                    )}
                    {visibleText === 2 && (
                        <h1 className="text-1xl font-bold text-white text-center" id="second-h1">Como dice en Eclesiastés 3:11, "Todo lo hizo hermoso en su tiempo", y tú llegaste justo en el momento indicado, cuando mi corazón necesitaba el amor que solo tú podías dar. Desde entonces, siento que "el amor es paciente, es bondadoso" (1 Corintios 13:4), y a tu lado he aprendido a vivirlo cada día.</h1>
                    )}
                    {visibleText === 3 && (
                        <div className="flex flex-col justify-center items-center">
                        <img
                            src={imagen}
                            alt="imagen"
                            className="brillo w-full  flex justify-center items-center object-cover max-w-[300px]"
                            onClick={() => setVisibleText(visibleText+1)}
                        />
                        <h3 className="text-1xl font-bold text-white text-center" id="second-h1">tocalo</h3>
                        </div>
                    )}
                    {visibleText ===4 && (
                        <h1 className="text-1xl font-bold text-white text-center" id="second-h1">Desde que llegaste a mi vida, todo ha sido mejor. Eres mi alegría, mi paz, mi amor, y cada día a tu lado es un regalo que agradezco a Dios. Gracias por ser mi compañera, mi amiga, mi amor, mi todo. Te amo más de lo que las palabras pueden expresar, y siempre estaré agradecido por tu amor.</h1>

                    )}
                    {visibleText === 5 && (
                    <h1 className="text-1xl font-bold text-white text-center" id="second-h1">Eres mi razón para soñar y mi lugar seguro en este mundo caótico. Gracias por pintar mis días de colores que no sabía que existían y por enseñarme que el amor verdadero no solo se siente, sino que se vive en cada mirada, en cada abrazo y en cada instante juntos. Contigo, todo tiene sentido, y mi corazón late con la certeza de que tú eres y siempre serás el mejor ragalo que Dios me dio.
                    </h1>
                    )}
                    { visibleText === 6 && (
                        <h1 className="text-1xl font-bold text-white text-center" id="second-h1">Eres mi regalo perfecto, mi reflejo del versículo de Proverbios 18:22: "El que halla esposa halla el bien y alcanza el favor del Señor". Y aunque nuestras almas aún estén en construcción, sé que Dios nos guía para que este amor sea eterno y bendecido.
                        </h1>
                    )}
                    {visibleText === 7 && (
                        <div className="typewriter flex-col">
                            <p className="text">Te amo mucho nadith yoana</p>

                        </div>
                    )}
                </div>
                {visibleText < 3 && (
                    <div className="corazon" onClick={() => setVisibleText(visibleText+1)}></div>
                )}
                {visibleText > 3 && visibleText<7 && (

                        <div className="corazon2" onClick={() => setVisibleText(visibleText+1)}></div>
                )}
            </div>
            </div>
            </>
            )
            }