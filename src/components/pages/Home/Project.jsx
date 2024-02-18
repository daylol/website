import React from 'react';
import styles from './project.module.scss';
import Player from '../../Player';
import Label from '../../Label';
import { Link } from 'react-router-dom';

const Project = ({ id, video, label, title, desc }) => {
  return (
    <div className={styles.project}>
      <Player url={video} width="1000px" />
      <div className={styles.card}>
        <Label>{label}</Label>
        <h2>{title}</h2>
        <p>{desc}</p>
        <Link to={`/blogs/${id}`}>
          <button className={styles.button}>More info</button>
        </Link>
      </div>
    </div>
  );
};

export default Project;
