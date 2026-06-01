import SectionTitle from '../elements/section-title';
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import SectionContainer from '../elements/section-container';

type ContactForm = {
  userName: string;
  company: string;
  phone: string;
  email: string;
  message: string;
};

const INITIAL_FORM: ContactForm = {
  userName: '',
  company: '',
  phone: '',
  email: '',
  message: '',
};

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<ContactForm>(INITIAL_FORM);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  useEffect(() => {
    emailjs.init({
      publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      blockHeadless: true,
      limitRate: { id: 'app', throttle: 10000 },
    });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'phone' && !/^[0-9\b -]{0,13}$/.test(value)) return;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus('sending');
    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY }
      );
      setFormData(INITIAL_FORM);
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };

  return (
    <SectionContainer className='py-[40px] md:py-[70px]'>
      <div className='mx-auto w-fit'>
        <SectionTitle title={'Contact'} />
      </div>
      <div className='flex flex-col md:flex-row justify-center gap-y-4 gap-x-10 mt-8 md:mt-10'>
        <div className='text-center'>
          <div className='font-bold text-[18px] text-primary'>이름</div>
          <div className='font-medium mt-2 text-white md:text-gray-700'>윤선웅</div>
        </div>
        <div className='text-center'>
          <div className='font-bold text-[18px] text-primary'>연락처</div>
          <div className='font-medium mt-2 text-white md:text-gray-700'>ysw5202222@gmail.com</div>
        </div>
        <div className='text-center'>
          <div className='font-bold text-[18px] text-primary'>전화번호</div>
          <div className='font-medium mt-2 text-white md:text-gray-700'>010-2368-5202</div>
        </div>
      </div>
      <p className='text-[16px] md:text-[20px] my-[20px] md:my-[40px] font-semibold text-center text-gray-200 md:text-gray-700 leading-8'>
        프로젝트를 함께할 개발자를 찾고 계신다면
        <br />
        아래 폼을 통해 문의해주세요.
      </p>
      <form ref={formRef} className='w-fit mx-auto' onSubmit={sendEmail}>
        <div className='my-3'>
          <input
            value={formData.userName}
            type='text'
            name='userName'
            placeholder='성함'
            className='w-[90vw] md:w-[40vw] p-3 bg-zinc-800 md:bg-gray-100 text-white md:text-gray-800 placeholder:text-gray-500'
            onChange={handleChange}
          />
        </div>
        <div className='my-3'>
          <input
            value={formData.company}
            type='text'
            name='company'
            placeholder='소속'
            className='w-[90vw] md:w-[40vw] p-3 bg-zinc-800 md:bg-gray-100 text-white md:text-gray-800 placeholder:text-gray-500'
            onChange={handleChange}
          />
        </div>
        <div className='my-3'>
          <input
            value={formData.email}
            type='email'
            name='email'
            placeholder='이메일'
            className='w-[90vw] md:w-[40vw] p-3 bg-zinc-800 md:bg-gray-100 text-white md:text-gray-800 placeholder:text-gray-500'
            onChange={handleChange}
          />
        </div>
        <div className='my-3'>
          <input
            value={formData.phone}
            type='text'
            name='phone'
            onChange={handleChange}
            placeholder='전화번호'
            className='w-[90vw] md:w-[40vw] p-3 bg-zinc-800 md:bg-gray-100 text-white md:text-gray-800 placeholder:text-gray-500'
          />
        </div>
        <div className='my-3'>
          <textarea
            value={formData.message}
            placeholder='내용'
            name='message'
            className='w-[90vw] md:w-[40vw] p-3 bg-zinc-800 md:bg-gray-100 text-white md:text-gray-800 placeholder:text-gray-500 h-40'
            onChange={handleChange}
          />
        </div>
        <div className='w-fit mx-auto'>
          <input
            type='submit'
            disabled={status === 'sending'}
            className='border py-3 px-10 rounded-md bg-primary hover:bg-primary-hover text-white active:bg-primary-active cursor-pointer disabled:opacity-50'
            value={status === 'sending' ? '전송 중...' : '전송하기'}
          />
        </div>
        {status === 'sent' && (
          <p className='text-center text-green-400 mt-3 font-medium'>
            연락해주셔서 감사합니다. 2일 이내에 회신하겠습니다.
          </p>
        )}
        {status === 'error' && (
          <p className='text-center text-red-400 mt-3 font-medium'>
            전송에 실패했습니다. 다시 시도해주세요.
          </p>
        )}
      </form>
    </SectionContainer>
  );
};

export default Contact;
