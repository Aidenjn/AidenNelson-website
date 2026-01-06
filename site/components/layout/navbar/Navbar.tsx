// import NavItem from './NavItem';
import NavBannerBadge from './NavBannerBadge';

export default function Navbar() {
  return (
    <nav className="static w-full z-50">
      <div className="relative w-full bg-foreground border-y-6 border-main-accent mb-10 mt-50 sm:mt-0 sm:mb-40">
        <div className="bg-foreground border-y-6 border-background">
          <div className="flex justify-center items-center h-20 gap-5 sm:gap-40 md:gap-50 lg:gap-70">
            {/* TODO: Uncomment this once the project page is completed */}
            {/* <div className='pl-12 sm:pl-0'>
              <NavItem
                name="Projects"
                isMobile
                href='/projects'
              />
            </div> */}
            <NavBannerBadge />
            {/* TODO: Uncomment this once the resume page is completed */}
            {/* <div className='pr-12 sm:pr-0'>
              <NavItem
                name="Résumé"
                isMobile
                href='/resume'
              />
            </div> */}
          </div>
        </div>
      </div>
    </nav>
  );
}
