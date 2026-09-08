import Container from '@/components/elements/container';
import Reveal from '@/components/elements/reveal';
import SectionLabel from '@/components/elements/section-label';
import AnimatedNumber from '@/components/elements/animated-number';
import { aiCase, aiIntro, aiJudgement, aiStats, aiSteps } from '@/common/datas';

const SUB_HEADING = 'mb-4 mt-14 text-[14px] font-semibold text-muted';
const BODY = 'text-[16px] leading-[1.7]';

const AiWorkflow = () => (
  <Reveal stagger className='pb-16 pt-16 md:pb-[96px] md:pt-[96px]'>
    <Container>
      <SectionLabel>AI와 일하는 방식</SectionLabel>
      <h3 className='mt-10 text-[24px] font-semibold leading-[1.3] tracking-[-0.02em]'>
        AI가 쓴 코드를 제품에 넣기 전에 하는 일
      </h3>
      <p className='mt-6 text-[17px] leading-[1.7]'>{aiIntro}</p>

      <h4 className={SUB_HEADING}>검증 루프</h4>
      <ol className='m-0 list-none border-t border-line p-0'>
        {aiSteps.map((step, idx) => (
          <li
            key={step.title}
            data-reveal-item
            className='grid grid-cols-[40px_1fr] gap-4 border-b border-line py-6'
          >
            <span className='pt-[2px] font-semibold tabular-nums text-accent'>{idx + 1}</span>
            <div>
              <p className='m-0 text-[17px] font-semibold leading-[1.4]'>{step.title}</p>
              <p className={`mb-0 mt-2 ${BODY} text-muted`}>{step.body}</p>
            </div>
          </li>
        ))}
      </ol>

      <h4 className={SUB_HEADING}>실제 사례 · {aiCase.project}</h4>
      <div className='grid gap-x-8 gap-y-6 md:grid-cols-[64px_1fr]'>
        <span className='text-[14px] font-semibold text-muted md:pt-[3px]'>문제</span>
        <p className={`m-0 ${BODY}`}>{aiCase.problem}</p>
        <span className='text-[14px] font-semibold text-muted md:pt-[3px]'>판단</span>
        <p className={`m-0 ${BODY}`}>{aiCase.decision}</p>
        <span className='text-[14px] font-semibold text-muted md:pt-[3px]'>결과</span>
        <p className={`m-0 ${BODY}`}>{aiCase.result}</p>
      </div>

      <h4 className={SUB_HEADING}>달라진 것</h4>
      <div className='grid gap-x-10 gap-y-8 border-t border-line pt-6 sm:grid-cols-2'>
        {aiStats.map(stat => (
          <div key={stat.label}>
            <div className='text-[32px] font-semibold leading-[1.2] tracking-[-0.02em]'>
              <AnimatedNumber text={stat.value} className='text-accent' />
            </div>
            <div className='mt-1.5 text-[14px] text-muted'>{stat.label}</div>
          </div>
        ))}
      </div>
      <p className='mb-0 mt-3 text-[13px] text-muted'>Jay 프로젝트 기준 체감 수치</p>

      <h4 className={SUB_HEADING}>그래도 사람이 정하는 것</h4>
      <p className={`m-0 ${BODY}`}>{aiJudgement}</p>
    </Container>
  </Reveal>
);

export default AiWorkflow;
