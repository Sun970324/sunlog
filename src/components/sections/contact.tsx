import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Container from '@/components/elements/container';
import Reveal from '@/components/elements/reveal';
import SectionLabel from '@/components/elements/section-label';

type ContactForm = {
  userName: string;
  email: string;
  message: string;
};

const INITIAL_FORM: ContactForm = {
  userName: '',
  email: '',
  message: '',
};

const FIELD_CLASS =
  'w-full rounded-none border-0 border-b border-line bg-transparent px-0 py-2 text-base text-fg focus:border-accent focus:shadow-[0_1px_0_var(--accent)] focus:outline-none';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<ContactForm>(INITIAL_FORM);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [showSentLabel, setShowSentLabel] = useState(false);

  useEffect(() => {
    emailjs.init({
      publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
    });
  }, []);

  useEffect(() => {
    if (!showSentLabel) return;
    const timer = window.setTimeout(() => setShowSentLabel(false), 1500);
    return () => window.clearTimeout(timer);
  }, [showSentLabel]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
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
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY },
      );
      setFormData(INITIAL_FORM);
      setStatus('sent');
      setShowSentLabel(true);
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    }
  };

  const buttonLabel =
    status === 'sending' ? '보내는 중…' : showSentLabel ? '보냈습니다 ✓' : '보내기';

  return (
    <Reveal stagger className='pb-16 pt-16 md:pb-[96px] md:pt-[96px]'>
      <Container>
        <SectionLabel>Contact</SectionLabel>
        <p data-reveal-item className='mt-8 text-[17px] leading-[1.7]'>
          함께할 프로젝트나 채용 관련 문의는 아래로 보내 주세요. 하루 안에 답장합니다.
        </p>
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className='mt-8 grid gap-x-6 gap-y-8 md:grid-cols-2'
        >
          <label data-reveal-item className='flex flex-col gap-1.5 text-[13px] text-muted'>
            이름
            <input
              type='text'
              name='userName'
              value={formData.userName}
              onChange={handleChange}
              required
              className={FIELD_CLASS}
            />
          </label>
          <label data-reveal-item className='flex flex-col gap-1.5 text-[13px] text-muted'>
            이메일
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              required
              className={FIELD_CLASS}
            />
          </label>
          <label
            data-reveal-item
            className='flex flex-col gap-1.5 text-[13px] text-muted md:col-span-2'
          >
            메시지
            <textarea
              name='message'
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              className={`${FIELD_CLASS} resize-y`}
            />
          </label>
          <div data-reveal-item className='flex flex-wrap items-center gap-6 md:col-span-2'>
            <button
              type='submit'
              disabled={status === 'sending'}
              className='rounded bg-accent px-6 py-3 text-[15px] font-semibold text-white hover:brightness-110 disabled:opacity-60'
            >
              <span key={buttonLabel} className='btn-label inline-block'>
                {buttonLabel}
              </span>
            </button>
            <p aria-live='polite' className='text-[14px] text-muted'>
              {status === 'sent' && '보냈습니다. 하루 안에 답장하겠습니다.'}
              {status === 'error' && '전송에 실패했습니다. 이메일로 보내 주세요.'}
            </p>
            <div className='flex flex-wrap items-center gap-x-6 gap-y-2 text-[14px] text-muted'>
              <a
                href='mailto:ysw5202222@gmail.com'
                className='link-underline hover:text-accent'
              >
                ysw5202222@gmail.com
              </a>
              <a
                href='https://github.com/Sun970324'
                target='_blank'
                rel='noreferrer'
                className='link-underline hover:text-accent'
              >
                github.com/Sun970324
              </a>
            </div>
          </div>
        </form>
      </Container>
    </Reveal>
  );
};

export default Contact;
