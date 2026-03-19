import React from "react";
import githubData from '../../assets/github.json'
import MacWindow from "./MacWindow";
import './github.scss'

const GitCard = ({
  data = {
    id: 1,
    image: "",
    title: "",
    description: "",
    tags: [],
    repolink: "",
    denolink: "",
  },
}) => {
  return <div className="card">
    <img src={data.image} alt="" />
    <h1>{data.title}</h1>
    <p className="description">{data.description}</p>

    <div className="tags">
      {data.tags.map(tag => <p className="tag" >{tag}</p>)}
    </div>

    <div className="urls">
        <a href={data.repolink}>Repository</a>
        <a href={data.denolink}>Deno link</a>
    </div>

  </div>
};

const github = ({ windowname, windowState, setwindowsState }) => {
  return (
    <div>
      <MacWindow windowState={windowState} setwindowsState={setwindowsState}>
        <div className="cards">
          {githubData.map((project) => {
            return <GitCard data ={project} />
          })}
        </div>
      </MacWindow>
    </div>
  );
};

export default github;
