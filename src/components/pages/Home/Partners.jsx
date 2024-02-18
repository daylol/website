import React from 'react';
import { Carousel } from 'antd';
import Label from '../../Label';
import styles from './partners.module.scss';
import partn1 from '../../../assets/img/2.png';
import partn2 from '../../../assets/img/3.png';
import partn3 from '../../../assets/img/4.png';
import partn4 from '../../../assets/img/5.png';
import partn5 from '../../../assets/img/SVG.png';
import partn6 from '../../../assets/img/6.png';

const contentStyle = {
  boxShadow: '0 8px 10px -6px rgba(0, 0, 0, 0.1), 0 20px 25px -5px rgba(0, 0, 0, 0.1)',
  background: ' #23202a',
  borderRadius: '24px',
  padding: '50px',
  height: '72px',
  width: '144px',
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
};

const Partners = () => {
  return (
    <section className={styles.partners}>
      <div className="container">
        <div className={styles.text}>
          <Label>Our partners</Label>
          <h2>Trusted by top industry leaders.</h2>
          <p>
            SPG Media is a trusted partner for many top companies in their industry, who rely on our
            expertise and professionalism to deliver only the best results.
          </p>
        </div>
        <Carousel autoplay>
          <div>
            <img style={contentStyle} src={partn1} />
          </div>
          <div>
            <img src={partn2} style={contentStyle} />
          </div>
          <div>
            <img src={partn3} style={contentStyle} />
          </div>
          <div>
            <img src={partn4} style={contentStyle} />
          </div>
          <div>
            <img src={partn5} style={contentStyle} />
          </div>
          <div>
            <img src={partn6} style={contentStyle} />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Partners;
