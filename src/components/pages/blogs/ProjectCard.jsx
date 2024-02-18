import React from 'react';
import styles from './projectCard.module.scss';
import Player from '../../Player';
import Label from '../../Label';
import { Link } from 'react-router-dom';
const ProjectCard = ({ id, video, title, desc, category }) => {
  return (
    <div className={styles.card}>
      <div className={styles.label}>
        <Label>{category}</Label>
      </div>
      <Player width="500px" url={video} />
      <Link to={`/blogs/${id}`}>
        <h2>{title}</h2>
      </Link>
      <p>{desc}</p>
    </div>
  );
};

export default ProjectCard;
