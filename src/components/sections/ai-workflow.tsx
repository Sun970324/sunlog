import { useState } from 'react';
import Container from '@/components/elements/container';
import Reveal from '@/components/elements/reveal';
import SectionLabel from '@/components/elements/section-label';
import { aiParagraphs } from '@/common/datas';

const AiWorkflow = () => {
  const [expanded, setExpanded] = useState(false);
  const [firstParagraph, ...restParagraphs] = aiParagraphs;

  return (
    <Reveal stagger className='pb-16 pt-16 md:pb-[96px] md:pt-[96px]'>
      <Container>
        <SectionLabel>AI를 어떻게 쓰는지</SectionLabel>
        <h3 className='mt-10 text-[24px] font-semibold leading-[1.3] tracking-[-0.02em]'>
          AI와 일하는 방식
        </h3>
        <p data-reveal-item className='mt-6 text-[17px] leading-[1.7]'>
          {firstParagraph}
        </p>
        <button
          type='button'
          onClick={() => setExpanded(prev => !prev)}
          aria-expanded={expanded}
          aria-controls='ai-workflow-more'
          className='mt-6 text-[14px] text-accent underline underline-offset-4'
        >
          {expanded ? '접기' : '더 읽기'}
        </button>
        <div id='ai-workflow-more' hidden={!expanded}>
          {restParagraphs.map(paragraph => (
            <p key={paragraph} className='mt-6 text-[17px] leading-[1.7]'>
              {paragraph}
            </p>
          ))}
        </div>
      </Container>
    </Reveal>
  );
};

export default AiWorkflow;
