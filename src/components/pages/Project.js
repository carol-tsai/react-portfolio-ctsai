import React, { useState } from 'react';
import '../styles/Project.css';

export default function Project(props) {
   return (
      <div className="card col m-1">
         <img
            className="card-image"
            src={props.project.image}
            alt={props.project.name}
         />
         <div className="card-body">
            <h3 className="card-title">{props.project.name}</h3>
            <p class="card-text">{props.project.technology}</p>
            <a
               href={props.project.deployed_link}
               rel="noreferrer"
               target="_blank"
               className="card-link btn btn-primary m-1"
            >
               Visit the project
            </a>
            <a
               href={props.project.github_link}
               rel="noreferrer"
               target="_blank"
               className="card-link btn btn-secondary m-1"
               class="btn btn-secondary m-1"
            >
               GitHub
            </a>
         </div>
   
      </div>
   );
}