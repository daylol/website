import React from 'react';
import styles from './form.module.scss';
import { useForm } from 'react-hook-form';

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      name: '',
      email: '',
      tel: '',
      message: '',
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">
        <span>
          Name * {errors?.name && <span style={{ color: 'red' }}>{errors?.name?.message}</span>}
        </span>
        <input
          id="name"
          type="text"
          placeholder="Name"
          {...register('name', {
            required: 'Must be filled',
            minLength: {
              value: 5,
              message: 'Not less than 5 symbols',
            },
          })}
        />
      </label>
      <label htmlFor="email">
        <span>
          Email * {errors?.name && <span style={{ color: 'red' }}>{errors?.email?.message}</span>}
        </span>
        <input
          placeholder="Email"
          id="email"
          type="email"
          {...register('email', {
            required: 'Must be filled',
            minLength: {
              value: 2,
              message: 'Not less than 5 symbols',
            },
          })}
        />
      </label>
      <label htmlFor="phone">
        Phone
        <input placeholder="Phone" id="phone" type="tel" {...register('phone')} />
      </label>
      <label htmlFor="message">
        <span>
          Message *{' '}
          {errors?.name && <span style={{ color: 'red' }}>{errors?.message?.message}</span>}
        </span>
        <textarea
          placeholder="Message"
          rows={4}
          id="message"
          {...register('message', { required: 'Must be filled' })}></textarea>
      </label>
      <button disabled={!isValid}>Send message</button>
    </form>
  );
};

export default Form;
