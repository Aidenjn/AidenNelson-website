import Link from "next/link";

export default function RecipeBookLink({
  path,
  children,
}:{
  path: string,
  children: React.ReactNode;
}) {
  return (
    <Link href={path} className='
      flex-1
      text-center
      nav-link
      bg-foreground
      text-sm
      text-background
      rounded-sm
      border-main-accent
      border-6
    '>
      <div className='
        w-full
        h-full
        border-6
        p-2
        md:text-lg
        border-background
      '>
        {children}
      </div>
    </Link>
  )
}