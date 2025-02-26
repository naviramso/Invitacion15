/* eslint-disable @next/next/no-img-element */
"use client";
import { useState, useEffect, useCallback } from "react";


export default function Home() {
    const [isPlaying, setIsPlaying] = useState(false);

    const toggleMusic = () => {
        const audio = document.getElementById(
            "backgroundMusic"
        ) as HTMLAudioElement;
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlaying(!isPlaying);
    };
    return (
        <>
            <audio id="backgroundMusic" loop>
                <source src="/music.mp3" type="audio/mpeg" />
                Tu navegador no soporta audio.
            </audio>

            <section className=" bg-slate-100  flex flex-col justify-center items-center h-[90dvh]">
                <h1 className="text-6xl md:text-9xl text-cyan-950 font-bold font-montserrat">
                    TATIANA
                </h1>
                <p className="font-leagueScript font-extrabold text-6xl">
                    mis 15!
                </p>
                <button
                    className="border-2 rounded-full bg-slate-500 h-32 w-32 flex items-center justify-center animate-pulse"
                    onClick={toggleMusic}
                >
                    {isPlaying ? (
                        <span
                            className="material-symbols-outlined text-7xl text-white"
                            title="Pause"
                        >
                            pause
                        </span>
                    ) : (
                        <div className="flex flex-col items-center">
                            <span
                                className="material-symbols-outlined text-7xl text-white"
                                title="Play"
                            >
                                play_arrow
                            </span>
                            <span className="text-2xl text-white">MUSIC</span>
                        </div>
                    )}
                </button>
                <span className="material-symbols-outlined animate-bounce absolute bottom-32 text-5xl text-cyan-950 font-bold">
                    keyboard_double_arrow_down
                </span>
            </section>

            <section className="flex flex-col p-10 justify-center items-center h-auto bg-cyan-950 text-white gap-4">
                <img
                    src="/2.jpg"
                    alt="Fiesta"
                    width={500}
                    height={500}
                    className="rounded-2xl shadow-2xl border-4 border-white"
                />
                <p className="font-montserrat font-bold text-2xl">
                    1 DE MARZO DE 2025
                </p>
                <p className="font-norican text-3xl">¿Listos para festejar?</p>
                <div className="flex gap-4 flex-col justify-center items-center mt-6">
                    <p className="font-montserrat font-bold text-sm">
                        FALTAN...
                    </p>
                    <CuentaRegresiva fecha="2025-03-01 18:00" />
                </div>
            </section>

            <section className="flex flex-col p-10 justify-center items-center h-auto bg-slate-100 gap-4">
                <img
                    src="/1.jpg"
                    alt="Fiesta"
                    width={500}
                    height={500}
                    className="rounded-2xl shadow-2xl border-4 border-cyan-950"
                />
                <img
                    src="https://yendo.com.ar/wp-content/uploads/2024/03/Fiestaazul15.gif"
                    alt="Fiesta"
                    width={500}
                    height={500}
                    className="w-[80px] h-[80px]"
                />
                <p className="font-sourceSerif4 font-bold text-3xl">¡Fiesta!</p>
                <div className="text-center">
                    <p className="font-montserrat text-2xl">En mi domicilio</p>
                    <p className="font-montserrat text-2xl">
                        C. Vecinal entre C. Lindero, Callajchullpa
                    </p>
                </div>
                <p className="font-montserrat text-2xl">A las 18:00 hrs</p>
                <a
                    href="https://maps.app.goo.gl/g8WZJG6oWXu8BwjE6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-cyan-950 text-white font-montserrat text-2xl border py-2 px-4 rounded-2xl hover:bg-slate-200 hover:text-cyan-950 hover:border-cyan-950 "
                >
                    Como llegar
                </a>
            </section>

            <section className="flex flex-col  justify-center items-center p-10 bg-cyan-950 text-white h-auto gap-6   ">
                <img
                    src="/3.png"
                    alt="Fiesta"
                    width={500}
                    height={500}
                    className="rounded-2xl shadow-2xl border-4 border-white"
                />
                <img
                    src="/5.jpg"
                    alt="Fiesta"
                    width={500}
                    height={500}
                    className="rounded-2xl shadow-2xl border-4 border-white"
                />
            </section>

            <section className="flex flex-col p-10 justify-center items-center h-auto bg-slate-100 gap-4 text-center">
                <img
                    src="https://yendo.com.ar/wp-content/uploads/2024/11/confirmaciondeasistenciaazul2.gif"
                    alt="Fiesta"
                    width={500}
                    height={500}
                    className="w-[80px] h-[80px]"
                />
                <p className="font-montserrat font-bold text-cyan-950">
                    CONFIRMACIÓN DE ASISTENCIA
                </p>
                <div className="text-center font-norican text-3xl">
                    <p>¡No puedes faltar!</p>
                    <p>
                        Espero que puedas acompañarme en este momento tan
                        especial
                    </p>
                </div>
                <p className="font-montserrat">
                    Te pido que confirmes tu asistencia antes del 1 de marzo de
                    2025
                </p>
                <a
                    href="https://wa.me/59172715224?text=Hola%2C%20quiero%20confirmar%20mi%20asistencia%20mi%20nombre%20es%20%3A%20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-cyan-950 text-white font-montserrat text-2xl border py-2 px-4 rounded-2xl"
                >
                    Confirmar asistencia
                </a>
                <a
                    href="https://www.google.com/calendar/render?action=TEMPLATE&text=Fiesta%20Tatiana&dates=20250301T180000/20250301T200000&details=Fiesta%20de%20Tatiana&location=Calle%20vecinal,%20Bolivia%20&sf=true&output=xml"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-cyan-950 text-white font-montserrat text-2xl border py-2 px-4 rounded-2xl text-center"
                >
                
                    Agenda mi fiesta en tu calendario
                </a>
                <img
                    src="/4.jpg"
                    alt="Fiesta"
                    width={500}
                    height={500}
                    className="rounded-2xl shadow-2xl border-4 border-cyan-950"
                />
            </section>

            <section className="flex flex-col p-10 justify-center items-center h-auto bg-cyan-950 text-white gap-4">
                <p className="font-norican font-bold text-6xl">¡Gracias!</p>
            </section>
        </>
    );
}

const CuentaRegresiva = ({ fecha }: { fecha: string }) => {
    const [dias, horas, minutos, segundos] = useCountdown(fecha);
    return (
        <div className="grid grid-cols-4 gap-7">
            <div className="text-center">
                <p className="text-5xl font-norican">{dias}</p>
                <p className="text-sm font-montserrat">días</p>
            </div>
            <div className="text-center">
                <p className="text-5xl font-norican">{horas}</p>
                <p className="text-sm font-montserrat">horas</p>
            </div>
            <div className="text-center">
                <p className="text-5xl font-norican">{minutos}</p>
                <p className="text-sm font-montserrat">minutos</p>
            </div>
            <div className="text-center">
                <p className="text-5xl font-norican">{segundos}</p>
                <p className="text-sm font-montserrat">segundos</p>
            </div>
        </div>
    );
};

function useCountdown(fecha: string): [number, number, number, number] {
    const calculateTimeLeft = useCallback(() => {
        const difference = +new Date(fecha) - +new Date();
        let timeLeft: [number, number, number, number] = [0, 0, 0, 0];

        if (difference > 0) {
            timeLeft = [
                Math.floor(difference / (1000 * 60 * 60 * 24)),
                Math.floor((difference / (1000 * 60 * 60)) % 24),
                Math.floor((difference / 1000 / 60) % 60),
                Math.floor((difference / 1000) % 60),
            ];
        }

        return timeLeft;
    }, [fecha]);

    const [timeLeft, setTimeLeft] = useState<[number, number, number, number]>(
        calculateTimeLeft()
    );

    useEffect(() => {
        const timer = setTimeout(() => {
            return setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    }, [calculateTimeLeft, fecha, timeLeft]);

    return timeLeft;
}
