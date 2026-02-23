export default function FancyNumber({ num }: { num: number }) {
  return (
    <div
      className="
      flex
      justify-center
      align-middle
      mr-2
      w-7
      h-7
      border-2
    "
    >
      {`${num}`}
    </div>
  );
}
