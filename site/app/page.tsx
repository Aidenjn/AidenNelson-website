import Hero from '@/components/views/mainView/Hero';
import StorySection from '@/components/views/mainView/StorySection';
import { CustomIcon } from '@/lib/types/CustomIcon';
import ClosingStorySection from '@/components/views/mainView/ClosingStorySection';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="text-foreground flex-col flex items-center">
      <div className='max-w-240'>
        {/* Hero/Opening Section */}
        <Hero />

        {/* Story Sections */}
        <StorySection
          image_url="/images/cat_coding.JPG"
          heading="Software Engineer"
          flow_left={true}
          icon={CustomIcon.Cat}
        >
          {`I'm a software engineer with professional experience building applications used by people in their day-to-day work.
          My experience spans frontend and backend development, testing and debugging, internal tooling, and deployment workflows.
          I focus on building systems that are reliable and maintainable for the long term, and I'm seeking opportunities to contribute to mission-driven teams working on projects that support and strengthen communities.`}
        </StorySection>
        <StorySection
          image_url="/images/skye_pic.png"
          heading="Game Developer"
          flow_left={false}
          icon={CustomIcon.Robot}
        >
          {`I've developed game software professionally, from virtual worlds, to screen adaptations of tabletop games.
          I continue to construct games independently, exploring the medium as a powerful tool for teaching, storytelling, and shared experience.`}
        </StorySection>
        {/** UNCOMMENT THE BELOW ONCE PROJECTS PAGE IS DONE */}
        {/* <StorySection
          image_url="/images/skye_pic.png"
          heading="Game Developer"
          flow_left={false}
          icon={CustomIcon.Robot}
        >
          {`I've developed game software professionally, from virtual worlds, to screen adaptations of tabletop games.
          I continue to construct games independently, exploring the medium as a powerful tool for teaching, storytelling, and shared experience.
          You can see some of the games I've worked on in my `}
          <Link href={'/projects'} className='nav-link-in-content'>projects portfolio</Link>
          {`.`}
        </StorySection> */}
        <StorySection
          image_url="/images/mrpurplepout.jpg"
          heading="Ceramic Artist"
          flow_left={true}
          icon={CustomIcon.Triclopes}
        >
          {`In my free time I enjoy making functional ceramic objects by wheel and hand.
          Working with clay provides me a creative outlet and a different way of thinking about form and process.
          You can see my ceramic work at `}
          <a href='https://www.ensorcelledexpressions.com' className='nav-link-in-content'>ensorcelledexpressions.com</a>
          {`.`}
        </StorySection>

        {/* Closing Section */}
        <ClosingStorySection />
      </div>
    </div>
  );
}
