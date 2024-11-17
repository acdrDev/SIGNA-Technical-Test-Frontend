interface Props {
  steps: Array<{
    name: string
  }>;
  currentStep: number;
}

export default function StepsBar({ steps, currentStep }: Props) {
  const statusSteps = (stepNumber: number) => {
    if (currentStep === stepNumber) {
      return "bg-red-500 ring-8";
    }

    if (currentStep <= stepNumber) {
      return "bg-slate-200 ring-0";
    }

    if (currentStep >= stepNumber) {
      return "bg-red-500 ring-0";
    }
  };

  const styleSteps = (stepNumber: number) => {
    if (currentStep <= stepNumber) {
      return stepNumber;
    }

    if (currentStep >= stepNumber) {
      return (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>);
    }
  };
  return (
    <div className="w-full flex items-center justify-between px-28">
      {steps.map((step, index) => (
        <div
          key={index}
          className={
            "relative grid place-items-center w-10 h-10 rounded-full text-white ring-blue-100 font-poppins-sans font-normal transition-all duration-300 " +
            statusSteps(index + 1)
          }
        >
          <span>{styleSteps(index + 1)}</span>
          <div className="absolute top-12 w-auto text-center">
            <div className="flex items-center">
              <h6 className="hidden md:flex w-16 antialiased tracking-tigh text-sm font-medium leading-relaxed text-red-500 justify-center">
                {step.name}
              </h6>
            </div>
          </div>
        </div>
      ))}
      <div
          key={steps.length}
          className={
            "relative grid place-items-center w-10 h-10 rounded-full text-white ring-blue-100 font-poppins-sans font-normal transition-all duration-300 " +
            statusSteps(steps.length + 1)
          }
        >
          <span>{styleSteps(steps.length + 1)}</span>
          <div className="absolute top-12 w-auto text-center">
            <div className="flex items-center">
              <h6 className="hidden md:flex w-16 antialiased tracking-tigh text-sm font-medium leading-relaxed text-red-500 justify-center">
                Resumen
              </h6>
            </div>
          </div>
        </div>
    </div>
  );
}
