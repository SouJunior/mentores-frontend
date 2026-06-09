type StepperDotsProps = {
  currentStep: number;
};

export default function StepperDots({ currentStep }: StepperDotsProps) {
  const items = [0, 1, 2];

  return (
    <div className="flex flex-row items-center justify-center py-6 px-[0.55rem]">
      {items.map(i => (
        <ul
          key={i}
          className="w-2.75 h-2.75 bg-gray-200 relative rounded-[20px] mx-2.25 overflow-hidden"
        >
          <div
            style={{ transform: `translateX(${(currentStep - 1 - i) * 40}px)` }}
          >
            <div className="absolute left-0 top-0 w-2.75 h-2.75 rounded-[20px] bg-blue-800 transition-transform duration-500 ease-out" />
          </div>
        </ul>
      ))}
    </div>
  );
}
