import NavContent from './NavContent';

export default function Navbar() {
  return (
    <nav className="static w-full z-50">
      <div className="relative w-full bg-foreground border-y-6 border-main-accent mb-10 mt-50 sm:mt-0 sm:mb-30">
        <div className="bg-foreground border-y-6 border-background">
          <NavContent />
        </div>
      </div>
    </nav>
  );
}
