import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { FaUserCircle } from 'react-icons/fa';

import InputNumber from '@/components/InputNumber';

import { FormValueProps } from './types';
import { FormDefaultValue } from './constans';
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
          <div className='card'>
            <div className='card-wrapper'>
              <div className='card-name'>
                <FaUserCircle size={28} color='#aeb4b7' />
                <label>Mahasiswa 1</label>
              </div>
              <div className='card-form'>
                <div className='card-form-input'>
                  <InputNumber />
                </div>
                <div className='card-form-input'>
                  <InputNumber />
                </div>
                <div className='card-form-input'>
                  <InputNumber />
                </div>
                <div className='card-form-input'>
                  <InputNumber />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
