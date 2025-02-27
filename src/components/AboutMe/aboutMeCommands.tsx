import Link from "next/link";
import Experience from "./Experience";

const availableCommands: Map<keyof typeof aboutMeCommands | string, string> =
  new Map([
    ["clear", "Clear the terminal"],
    [
      "competitions",
      "Show some of the programming and innovation competitions I took part in",
    ],
    ["education", "Show where I study and what I have achieved so far"],
    ["experience", "Show my professional experience and internships"],
    ["help", "Show available commands"],
    ["motivation", "Show how it all started and what I'm passionate about"],
    ["projects", "Show my projects"],
    ["qualities", "Show what I am like"],
    ["skills", "Show my skills"],
    ["socials", "Show the way of contacting me"],
    ["welcome", "Show the welcome message again"],
    ["whoami", "Get to know who you are :)"],
  ]);

const availableCommandsOutput = (
  <>
    <b>Available commands: </b>
    <ul>
      {Array.from(availableCommands).map(([command, description]) => (
        <li key={command}>
          <span className="text-teal-400">{command}</span> - {description}
        </li>
      ))}
    </ul>
  </>
);

export const welcomeMessage = (
  <div>
    <h1 className="text-2xl bg-gradient-to-r from-teal-300 to-teal-600 bg-clip-text text-transparent font-bold">
      Hey!
    </h1>
    <p>
      My name is <b className="text-teal-400 font-bold">Artur</b> and I&apos;m a
      passionate software engineer ✨
    </p>
    <p>I love Back-End and IoT!</p>
    <p>
      This is a little terminal that you can use to get to know more about me :)
    </p>
    {availableCommandsOutput}
  </div>
);

export const aboutMeCommands = {
  whoami: "You're a lovely visitor ✨",
  motivation: (
    <span>
      <b>Passionate about programming since childhood</b>, dedicated to
      transforming ideas into remarkable digital solutions and ready to show off
      his hobby to people. I am a software engineer deeply passionate about IoT,
      a hobby that was ignited by my father&apos;s inspiration. My professional
      expertise is primarily focused on full-stack development (with IoT), where
      I harmonize the virtual and the tangible. Within this portfolio,
      you&apos;ll find a collection of my IoT creations and full-stack
      symphonies, each reflecting my dedication to both fields. Join me on this
      journey as I continue to compose innovative digital melodies inspired by
      my lifelong love for programming.
    </span>
  ),
  competitions: (
    <span>
      I have taken part in various programming and innovation competitions,
      including:
      <ul className="list-disc list-inside">
        <li>
          <b>1st place</b> in the{" "}
          <Link
            href="https://www.pzswir.pl/olimpiady/informatyka-i-telekomunikacja"
            target="_blank"
            rel="noopener noreferrer"
          >
            Olimpiada Innowacji Technicznych W Telekomunikacji I Informatyce
          </Link>
          , a nationwide programming competition. I managed to get through all
          the 3 stages of the competition and win the final one.
        </li>
        <li>
          <b>2nd place</b> in the{" "}
          <Link
            href="https://www.facebook.com/technikum6/posts/10157014612252374"
            target="_blank"
            rel="noopener noreferrer"
          >
            Olimpiada Innowacji Technicznych W Elektronice I Mechatronice
          </Link>
          , a nationwide innovation contest. We made it together with my friend{" "}
          <Link
            href="https://www.linkedin.com/in/jakub-moczo%C5%82-169176311/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jakub Moczoł
          </Link>{" "}
          with our project{" "}
          <Link href="/projects/seeable" target="_blank">
            Seeable (which you can read about more in detail below or by
            clicking me).
          </Link>
        </li>
        <li>
          <b>Finalist and laureate</b> of the{" "}
          <Link
            href="https://2024.explory.pl/products/u09lfqp1s3u6wq8?activeProduct=d9aa9932-371d-41ee-bb5a-b9376c4a8856"
            target="_blank"
            rel="noopener noreferrer"
          >
            E(x)plory Science Contest 2024
          </Link>
          , a nationwide scientific projects showcase. We made it together with
          my friends{" "}
          <Link
            href="https://github.com/wojtekwro29"
            target="_blank"
            rel="noopener noreferrer"
          >
            Wojciech Wróblewski
          </Link>
          and{" "}
          <Link
            href="https://github.com/Trolju"
            target="_blank"
            rel="noopener noreferrer"
          >
            Robert Zarzecki
          </Link>{" "}
          with our project{" "}
          <Link href="/projects/ruchWahadlowy" target="_blank">
            Ruch Wahadłowy (which you can read about more in detail below or by
            clicking me).
          </Link>{" "}
          We won the special award from DPD Poland.
        </li>
        <li>
          <b>1st place</b> in the{" "}
          <Link
            href="https://www.facebook.com/technikum6/posts/10157014612252374"
            target="_blank"
            rel="noopener noreferrer"
          >
            POL-EKO competition for creating an app to manage their SMART PRO
            fridge data
          </Link>
          .{" "}
          <Link href="/projects/coldtime" target="_blank">
            You can see what I&apos;ve built by clicking here.
          </Link>
        </li>
        <li>
          <b>
            1st place at the Young E-Innovator Pitch, 2x Silver Medal and
            International Special Award from the Ştefan cel Mare University of
            Suceava, Romania
          </b>{" "}
          in the{" "}
          <Link
            href="https://www.e-nnovate.eu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            E-NNOVATE International Innovation & Invention Summit 2024
          </Link>
          . With the projects{" "}
          <Link href="/projects/seeable" target="_blank">
            Seeable
          </Link>{" "}
          and{" "}
          <Link href="/projects/ruchWahadlowy" target="_blank">
            Ruch Wahadłowy
          </Link>
          .
        </li>
        <li>
          <b>
            gold medal at{" "}
            <Link
              href="https://ipitex.nrct.go.th/"
              target="_blank"
              rel="noopener noreferrer"
            >
              IPITEx 2025
            </Link>
          </b>{" "}
          (Bangkok International Intellectual Property, Invention, Innovation
          and Technology Exposition), awarded by the{" "}
          <b>National Research Council of Thailand</b>. With the project{" "}
          <Link href="/projects/seeable" target="_blank">
            Seeable
          </Link>
          .
        </li>
      </ul>
    </span>
  ),
  education: (
    <span>
      Currently studying at{" "}
      <Link
        href="https://zs6sobieski.pl/"
        target="_blank"
        rel="noopener noreferrer"
      >
        4th Technical College in School Complex no. 6 in Jastrzębie-Zdrój,
        Poland
      </Link>
      , ranked as{" "}
      <Link
        href="https://2024.technika.perspektywy.pl/2024/rankings/ranking-slaski"
        target="_blank"
        rel="noopener noreferrer"
      >
        the best technical college in the Silesian voivodeship.
      </Link>{" "}
      Managed to get the highest grade in the entire school for two years in a
      row. I take part in various projects and programming competitions, which
      you can get more to know about using the{" "}
      <code>
        <b className="text-teal-400">competitions</b>
      </code>{" "}
      command.
    </span>
  ),
  experience: (
    <div className="relative border-l border-teal-400 ml-4">
      <Experience
        title={
          <span>
            Intern Full-Stack Developer @{" "}
            <Link
              href="https://www.sharpai.dev/en/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <b>SharpAI</b>
            </Link>
          </span>
        }
        dates="November 2024 - December 2024"
        description={
          <>
            <div>
              I worked collaboratively as part of a dedicated team on AIkieter,
              an AI-powered survey platform enhancing UX with smart summaries,
              intelligent follow-up questions, and actionable insights for
              seamless data collection. My role involved not only contributing
              to the development of the platform but also actively engaging in
              team collaboration, such as reviewing peers&apos; pull requests,
              sharing constructive feedback, and ensuring code quality and
              consistency across the project.
            </div>
            <b>
              ASP.NET Core (C#) | Azure DevOps | Stripe | React | TypeScript |
              TailwindCSS | OpenAI API | Git
            </b>
          </>
        }
      />
      <Experience
        title={
          <span>
            Intern Back-End Developer @{" "}
            <Link
              href="https://www.pol-eko.com.pl/en/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <b>POL-EKO</b>
            </Link>
          </span>
        }
        dates="November 2023"
        description={
          <>
            <div>
              I was responsible for migrating the back-end of{" "}
              <Link href="/projects/enmet" target="_blank">
                <b>Enmet</b>
              </Link>{" "}
              (project made during my previous internship) to ASP.NET Core, to
              match the company&apos;s tech stack. I was also responsible for
              deployment, advanced data aggregation, and a caching system.
            </div>
            <b>ASP.NET Core (C#) | Docker | Redis | PostgreSQL | Git</b>
          </>
        }
      />
      <Experience
        title={
          <span>
            Intern Full-Stack Developer @{" "}
            <Link
              href="https://www.pol-eko.com.pl/en/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <b>POL-EKO</b>
            </Link>
          </span>
        }
        dates="July 2023"
        description={
          <>
            <div>
              I was able to take part in it thanks to{" "}
              <b>winning a regional programming competition</b>, which resulted
              in creating{" "}
              <Link href="/projects/coldtime" target="_blank">
                <b>Coldtime</b>
              </Link>
              , one of my projects you can see below. During the internship, I
              was responsible for creating{" "}
              <Link href="/projects/enmet" target="_blank">
                <b>Enmet</b>
              </Link>
              .
            </div>
            <b>React | TypeScript | NestJS (Node.js) | PostgreSQL | Git</b>
          </>
        }
      />
    </div>
  ),
  qualities: (
    <div className="flex w-full items-center gap-4 flex-wrap justify-center">
      {[
        "problem-solver",
        "creative",
        "patient",
        "analytical",
        "passionate",
        "organized",
      ].map((e) => (
        <span
          key={e}
          className="border-teal-400 border-2 p-4 rounded-xl text-xl"
        >
          {e}
        </span>
      ))}
      <span className="text-3xl text-teal-400">= me</span>
    </div>
  ),
  skills: <a href="#skills">Please look at the section below (click)</a>,
  projects: <a href="#projects">Please look at the section below (click)</a>,
  socials: (
    <div>
      <ol className="list-inside list-decimal">
        <li>
          GitHub -{" "}
          <Link
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/Arciiix"
          >
            Arciiix
          </Link>
        </li>
        <li>
          LinkedIn -{" "}
          <Link
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/arciiix/"
          >
            Arciiix
          </Link>
        </li>
        <li>
          <Link href="#contact">General contact</Link>
        </li>
      </ol>
    </div>
  ),
  welcome: welcomeMessage,
  help: availableCommandsOutput,
};
