import Head from "next/head";
import Image from "next/image";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Terry Seiple</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="grid grid-rows-[100px_minmax(70px,_1fr)_50px] grid-flow-col gap-5 text-center my-20 justify-center">
          <div className="w-40">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              height="100px"
              width="100px"
            />
          </div>
          <div>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              height="100px"
              width="100px"
            />
          </div>
          <div>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
              height="100px"
              width="100px"
            />
          </div>
          <div className="w-40">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
              height="100px"
              width="100px"
            />
          </div>
          <div>
            {" "}
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              height="100px"
              width="100px"
            />
          </div>
          <div>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
              height="100px"
              width="100px"
            />
          </div>
          <div>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
              height="100px"
              width="100px"
            />
          </div>
          <div>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg"
              height="100px"
              width="100px"
            />
          </div>

          <div>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
              height="100px"
              width="100px"
            />
          </div>
        </div>
        <div className="h-20 w-5/5 -mx-10 bg-zinc-800 my-10 -mx-10">
          <h1 className="center text-center text-4xl my-10 py-4">Projects</h1>
        </div>
        <div className="flex-column space-y-10 ">
          <div className="flex align-center justify-center space-evenly">
            <div className="self-center justify-center flex-column w-2/5 ">
              <h2 className="text-2xl text-center flex-column">
                <a href="https://github.com/seiplet93/Dim-Souls">Dim Souls</a>
              </h2>
              <div className="">
                {/* </div> <div className="flex w-1/3"> */}
                <p className="flex text-center mr-5 ">
                  A top-down, 2-D take on the souls-like game genre. Dim Souls
                  is an ode to the Dark Souls franchise created with HTML Canvas
                  and JavaScript.
                </p>
              </div>
            </div>
            <a href="https://github.com/seiplet93/Dim-Souls">
              <Image
                // '/' assumes you are in the public folder
                className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ..."
                src="/dim-souls.jpg"
                alt="dim souls"
                // width and height are required
                width={500}
                height={400}
              />
            </a>
          </div>

          <div className="flex w-5/5 align-center justify-center space-evenly ">
            <a href="https://github.com/seiplet93/Tune-Town">
              <Image
                className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ..."
                // '/' assumes you are in the public folder

                src="/tunetown.jpg"
                alt="tune town"
                // width and height are required
                width={500}
                height={400}
              />
            </a>

            <div className="self-center justify-center flex-column w-2/5">
              <h2 className="text-2xl text-center flex-column">
                <a href="https://github.com/seiplet93/Tune-Town">Tune Town</a>
              </h2>
              <p className="flex text-center ml-5">
                A social platform aimed at catalogging music first, and
                socializing second. Using the Audio DB API, this Express/EJS app
                allows users to create accounts, search for music, curate lists,
                and interact around others' lists.
              </p>
            </div>
          </div>

          <div className="flex align-center justify-center space-evenly mx-10">
            <div className="self-center justify-center flex-column w-2/5">
              <h2 className="text-2xl text-center flex-column">
                <a href="https://github.com/seiplet93/InCRUDibles-client">
                  Check Mate
                </a>
              </h2>
              <p className="flex text-center mr-5">
                Not your average checklist, Check Mate is a shared to-do list
                tracker. Think Netflix, but for your household's tasks. Create
                an account for your group, make a profile as a user, start and
                complete tasks as a group.
              </p>
            </div>
            <div className="border-2 overflow-hidden">
              <a
                className="p-0 inline-block leading-none overflow-hidden"
                href="https://github.com/seiplet93/InCRUDibles-client"
              >
                <Image
                  // '/' assumes you are in the public folder
                  className="border-2 bg-cover overflow-hidden transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 float-left"
                  src="/checkmate.jpg"
                  alt="Checkmate"
                  // width and height are required
                  width={500}
                  height={400}
                />
              </a>
            </div>
          </div>

          <div className="flex w-5/5 align-center justify-center space-evenly">
            <div className="border-2">
              <a href="https://github.com/seiplet93/speedybois">
                <Image
                  // '/' assumes you are in the public folder
                  className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110  "
                  src="/speedybois.jpg"
                  alt="speedybois"
                  // width and height are required
                  width={500}
                  height={400}
                />
              </a>
            </div>
            <div className="self-center justify-center flex-column w-2/5">
              <h2 className="text-2xl text-center flex-column">
                <a href="https://github.com/seiplet93/speedybois">Speedybois</a>
              </h2>
              <p className="flex text-center ml-5">
                Speed. Fast. Quick. These are all words. Speedybois is a
                platforming game built with C# using the Unity game engine. Gain
                speed throughout the level to reach the end as fast as possible.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
