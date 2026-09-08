import Container from '@/components/elements/container';
import Reveal from '@/components/elements/reveal';
import SectionLabel from '@/components/elements/section-label';
import { aiParagraphs } from '@/common/datas';

const AiWorkflow = () => (
  <Reveal stagger className='pb-16 pt-16 md:pb-[96px] md:pt-[96px]'>
    <Container>
      <SectionLabel>AI를 어떻게 쓰는지</SectionLabel>
      <h3 className='mt-10 text-[24px] font-semibold leading-[1.3] tracking-[-0.02em]'>
        AI와 일하는 방식
      </h3>
      {aiParagraphs.map(paragraph => (
        <p key={paragraph} data-reveal-item className='mt-6 text-[17px] leading-[1.7]'>
          {paragraph}
        </p>
      ))}
    </Container>
  </Reveal>
);

export default AiWorkflow;
