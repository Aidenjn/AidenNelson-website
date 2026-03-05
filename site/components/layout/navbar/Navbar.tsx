import NavItem from './NavItem';
import NavBannerBadge from './NavBannerBadge';

export default function Navbar() {
  return (
    <nav className="static w-full z-50">
      <div className="relative w-full bg-foreground border-y-6 border-main-accent mb-10 mt-50 sm:mt-0 sm:mb-30">
        <div className="bg-foreground border-y-6 border-background">
          <div className="flex justify-center items-center h-20">
            <div className="flex-0 xl:flex-1" />
            <div className="flex-1">
              <NavItem name="Résumé" href="/resume" />
            </div>
            <div className="flex-1">
              <NavItem name="Projects" href="/projects" />
            </div>
            <NavBannerBadge />
            <div className="flex-1">
              <NavItem name="Blog" href="/blog" />
            </div>
            <div className="flex-1">
              <NavItem name="Recipes" href="/recipes" />
            </div>
            <div className="flex-0 xl:flex-1" />
          </div>
        </div>
      </div>
    </nav>
  );
}
