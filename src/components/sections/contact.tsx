import SectionTitle from '../elements/section-title';
import { LegacyRef, useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
interface Props {
  isDesktop: boolean;
}

const Contact = ({ isDesktop }: Props) => {
  const form = useRef<HTMLFormElement>(null);
  const [userName, setUserName] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    emailjs.init({
      publicKey: '4od_0SAjGzmq8Hbui',
      // Do not allow headless browsers
      blockHeadless: true,

      limitRate: {
        // Set the limit rate for the application
        id: 'app',
        // Allow 1 request per 10s
        throttle: 10000,
      },
    });
  }, []);
  const sendEmail = (e: any) => {
    e.preventDefault();
    if (form.current !== null) {
      emailjs.sendForm('service_hx4lyq9', 'template_q5pycjr', form.current, {
        publicKey: '4od_0SAjGzmq8Hbui',
      });
    }
    alert('연락해주셔서 감사합니다. 2일 이내에 회신하겠습니다.');
    setUserName('');
    setCompany('');
    setPhone('');
    setEmail('');
    setMessage('');
  };

  const handlePress = (e: any) => {
    const regex = /^[0-9\b -]{0,13}$/;
    if (regex.test(e.target.value)) {
      setPhone(e.target.value);
    }
  };

  if (isDesktop) {
    return (
      <div className='w-full px-[8.5rem]] relative py-[70px] font-suitVariable border-b-[1px] border-b-gray'>
        <div className='mx-auto w-fit'>
          <SectionTitle title={'Contact'} />
        </div>
        <div className='flex justify-center gap-x-10 text-gray-700 mt-10'>
          <div className='text-center'>
            <div className='font-bold text-[18px]'>이름</div>
            <div className='font-medium mt-2'>윤선웅</div>
          </div>
          <div className='text-center'>
            <div className='font-bold text-[18px]'>연락처</div>
            <div className='font-medium mt-2'>ysw5202222@gmail.com</div>
          </div>
          <div className='text-center'>
            <div className='font-bold text-[18px]'>전화번호</div>
            <div className='font-medium mt-2'>010-2368-5202</div>
          </div>
        </div>
        <p className='text-[20px] my-[40px] font-semibold text-center text-gray-700 leading-8'>
          프로젝트를 함께할 개발자를 찾고 계신다면
          <br />
          아래 폼을 통해 문의해주세요.
        </p>
        <form ref={form} className='w-fit mx-auto' onSubmit={sendEmail}>
          <div className='my-3'>
            <input
              value={userName}
              type='text'
              name='userName'
              placeholder='성함'
              className='w-[40vw] p-3 bg-gray-100'
              onChange={e => setUserName(e.target.value)}
            />
          </div>
          <div className='my-3'>
            <input
              value={company}
              type='text'
              name='company'
              placeholder='소속'
              className='w-[40vw] p-3 bg-gray-100'
              onChange={e => setCompany(e.target.value)}
            />
          </div>
          <div className='my-3'>
            <input
              value={email}
              type='email'
              name='email'
              placeholder='이메일'
              className='w-[40vw] p-3 bg-gray-100'
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className='my-3'>
            <input
              value={phone}
              type='text'
              name='phone'
              onChange={handlePress}
              placeholder='전화번호'
              className='w-[40vw] p-3 bg-gray-100'
            />
          </div>
          <div className='my-3'>
            <textarea
              value={message}
              placeholder='내용'
              name='message'
              className='w-[40vw] p-3 bg-gray-100 h-40'
              onChange={e => setMessage(e.target.value)}
            />
          </div>
          <div className='w-fit mx-auto'>
            <input
              type='submit'
              className='border py-3 px-10 rounded-md bg-primary hover:bg-primary-hover text-white active:bg-primary-active cursor-pointer'
              value='전송하기'
            />
          </div>
        </form>
      </div>
    );
  }
  return <div className='w-fit h-fit'></div>;
};

export default Contact;
