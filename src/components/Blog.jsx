import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CASES } from './utils/constants';
import styles from './blog.module.scss';
import Player from './Player';
import Label from './Label';

const Blog = () => {
  const navigate = useNavigate();
  const { blogId } = useParams();
  const [blog, setBlog] = useState({});
  useEffect(() => {
    findBlog(blogId);
  }, [blogId]);
  const findBlog = (id) => {
    CASES.filter((project) => {
      if (project.id === +id) {
        setBlog(project);
      }
    });
  };

  return (
    <section className={styles.blog}>
      <div className="container">
        <div className={styles.wrapper}>
          <Label>{blog.category}</Label>
          <div className={styles.video}>
            <Player width="1000px" url={blog.video} />
          </div>
          <h2>{blog.title}</h2>
          <p>{blog.desc}</p>
          <button onClick={() => navigate(-1)}>Back</button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
