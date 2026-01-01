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
          icon={CustomIcon.Disgusted}
        >
          {`I strive to make my art emotionally expressive. I do this by twisting (often inhuman) faces
          into my work. Through form I create expressions that invite answers to the question: `}
          <i>{`"What could one witness to make a face like that?"`}</i>
        </StorySection>
        <StorySection
          image_url="/images/skye_pic.png"
          heading="Game Developer"
          flow_left={false}
          icon={CustomIcon.Robot}
        >
          {`I've worked on a handful of games professionally, from virtual worlds, to screen adaptations of tabletop games.
          You can see some of these projects on my `}
          <Link href={'/projects'} className='nav-link-in-content'>portfolio page</Link>
          {`. Alongside professional work, I continue to develop games independently, exploring the medium as a powerful tool for teaching, storytelling, and shared experience.`}
        </StorySection>
        <StorySection
          image_url="/images/mrpurplepout.jpg"
          heading="Ceramic Artist"
          flow_left={true}
          icon={CustomIcon.Alien}
        >
          {`In my free time I enjoy making functional ceramic objects by wheel and hand.
          Working with clay is a personal practice that provides a creative outlet and a different way of thinking about form and process.
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
