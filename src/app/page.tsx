/* eslint-disable @next/next/no-img-element */
"use client";
import { useState, useEffect, useCallback } from "react";

//import Image from "next/image";

export default function Home() {
    const [isPlaying, setIsPlaying] = useState(true);

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
        // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        //   <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        //     <Image
        //       className="dark:invert"
        //       src="/next.svg"
        //       alt="Next.js logo"
        //       width={180}
        //       height={38}
        //       priority
        //     />
        //     <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
        //       <li className="mb-2">
        //         Get started by editing{" "}
        //         <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
        //           src/app/page.tsx
        //         </code>
        //         .
        //       </li>
        //       <li>Save and see your changes instantly.</li>
        //     </ol>

        //     <div className="flex gap-4 items-center flex-col sm:flex-row">
        //       <a
        //         className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
        //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        //         target="_blank"
        //         rel="noopener noreferrer"
        //       >
        //         <Image
        //           className="dark:invert"
        //           src="/vercel.svg"
        //           alt="Vercel logomark"
        //           width={20}
        //           height={20}
        //         />
        //         Deploy now
        //       </a>
        //       <a
        //         className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
        //         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        //         target="_blank"
        //         rel="noopener noreferrer"
        //       >
        //         Read our docs
        //       </a>
        //     </div>
        //   </main>
        //   <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        //     <a
        //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        //       target="_blank"
        //       rel="noopener noreferrer"
        //     >
        //       <Image
        //         aria-hidden
        //         src="/file.svg"
        //         alt="File icon"
        //         width={16}
        //         height={16}
        //       />
        //       Learn
        //     </a>
        //     <a
        //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        //       target="_blank"
        //       rel="noopener noreferrer"
        //     >
        //       <Image
        //         aria-hidden
        //         src="/window.svg"
        //         alt="Window icon"
        //         width={16}
        //         height={16}
        //       />
        //       Examples
        //     </a>
        //     <a
        //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        //       href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        //       target="_blank"
        //       rel="noopener noreferrer"
        //     >
        //       <Image
        //         aria-hidden
        //         src="/globe.svg"
        //         alt="Globe icon"
        //         width={16}
        //         height={16}
        //       />
        //       Go to nextjs.org →
        //     </a>
        //   </footer>
        // </div>
        <>
            <button
                className="fixed top-5 right-5 z-50 border-2 rounded-full bg-slate-400 h-10 w-10 flex items-center justify-center animate-pulse"
                onClick={toggleMusic}
            >
                {isPlaying ? (
                    <span className="material-symbols-outlined" title="Pause">
                        play_disabled
                    </span>
                ) : (
                    <span
                        className="material-symbols-outlined text-3xl"
                        title="Play"
                    >
                        play_arrow
                    </span>
                )}
            </button>
            <audio id="backgroundMusic" autoPlay loop>
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
                    src="/1.png"
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

            <section className="flex flex-col  justify-center items-center p-10 bg-cyan-950 text-white h-auto    ">
                <img
                    src="/3.png"
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
