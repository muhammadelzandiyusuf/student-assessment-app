import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaUserCircle } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';

import InputNumber from '@/components/InputNumber';

import { FormValueProps } from './types';
import { FormDefaultValue, studentAssessmentForm } from './constans';

import 'react-toastify/dist/ReactToastify.css';
import './style.scss';

const Home = () => {
  const [output, setOutput] = useState<FormValueProps>();

  const { register, handleSubmit, } = useForm({
    mode: 'onChange',
    defaultValues: FormDefaultValue,
  });

  const onSubmit = useCallback((data: FormValueProps) => {
    setOutput(data);
    toast('Data berhasil tersimpan', { position: 'top-right', type: 'success' } );
    document.getElementById('output')?.scrollIntoView({ behavior: 'smooth' });
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
                      <InputNumber {...register(reg.name)} label={reg.label} name={reg.name} />
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
        <div className='output'>
          <div className='output-scroll' id='output' />
          <pre>{JSON.stringify(output, null, 2)}</pre>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Home;
