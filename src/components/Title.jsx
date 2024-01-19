export default function Title({
  text = "Animes",
  colorStroke = "stroke-orange-400",
  size = "text-3xl",
}) {
  return (
    <div
      className={`flex justify-center lg:justify-start py-8 ${size} font-bold items-center`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="4"
        stroke="currentColor"
        className={`w-6 h-6 ${colorStroke}`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
        />
      </svg>
      <h2>{text}</h2>
      <h2 className="sr-only">{text}</h2>
    </div>
  );
} 