import React from "react";
import MacWindow from "./MacWindow";
import Terminal from "react-console-emulator";
import "./cli.scss"; 
const commands = {
    echo: {
        description: "Echoes input",
        usage: "echo [text]",
        fn: (...args) => args.join(" "),
    },
    about: {
        description: "About me",
        usage: "about",
        fn: () => "Hi! I'm Anshul Verma, a full-stack developer passionate about web technologies.",
    },
    projects: {
        description: "View my projects",
        usage: "projects",
        fn: () => "Portfolio • Blog • GitHub Contributions • E-commerce Platform",
    },
    skills: {
        description: "List my technical skills",
        usage: "skills",
        fn: () => "JavaScript • React • Node.js • CSS • HTML • Git • MongoDB",
    },
    contact: {
        description: "Get contact information",
        usage: "contact",
        fn: () => "Email: anshul@example.com | GitHub: github.com/anshulverma",
    },
};

const Cli = () => {
  return (
    <MacWindow>
      <div className="cli-window">
        <Terminal
          commands={{
            echo: {
              description: "Echoes input",
              usage: "echo [text]",
              fn: (...args) => args.join(" "),
            },
          }}
          welcomeMessage={
            "Welcome to anshulverma terminal. Type help to see available commands."
          }
          promptLabel={"anshulverma:~$"}
          promptLabelstyle = {{ color: "#00ff00" }}
        />
      </div>
    </MacWindow>
  );
};

export default Cli;
