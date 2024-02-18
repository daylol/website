import React, { useState } from 'react';
import { CASES } from '../../utils/constants';
import ProjectCard from './ProjectCard';
import styles from './blogs.module.scss';

const Blogs = () => {
  const [categories, setCategories] = useState(['All', ...CASES.map((c) => c.category)]);
  const [filtered, setFiltered] = useState(categories[0]);
  const [active, setActive] = useState(0);

  const activate = (c, i) => {
    setFiltered(c);
    setActive(i);
  };

  return (
    <section className={styles.blogs}>
      <div className="container">
        <div className={styles.wrapper}>
          <ul>
            {categories.map((c, i) => (
              <li
                className={active === i ? styles.active : null}
                onClick={() => activate(c, i)}
                key={i}>
                {c}
              </li>
            ))}
          </ul>
          <div className={styles.items}>
            {CASES.filter((project) => {
              if (project.category === filtered) {
                return project;
              } else if (filtered === 'All') {
                return [...categories];
              }
            }).map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
