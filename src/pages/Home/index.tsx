import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { FaUserCircle } from 'react-icons/fa';

import InputNumber from '@/components/InputNumber';

import { FormValueProps } from './types';
import { FormDefaultValue, studentAssessmentForm } from './constans';
import './style.scss';

const Home = () => {

  const { register, handleSubmit, } = useForm({
    mode: 'onChange',
    defaultValues: FormDefaultValue,
  });

  const onSubmit = useCallback((data: FormValueProps) => {
    console.log('data', data);
  }, []);

  return (
    <div className='container'>
      <div className='container-wrapper'>
        <div className='container-title'>
          <h1>Aplikasi Penilaian Mahasiswa</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {studentAssessmentForm.map((item, index) => (
            <div className='card' key={index}>
              <div className='card-wrapper'>
                <div className='card-name'>
                  <FaUserCircle size={28} color='#aeb4b7' />
                  <label>{item.name}</label>
                </div>
                <div className='card-form'>
                  {item.register.map((reg, number) => (
                    <div className='card-form-input' key={number}>
                      <InputNumber {...register(reg.name)} label={reg.label} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
          <div className='form-button'>
            <button type='submit'>Simpan</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
