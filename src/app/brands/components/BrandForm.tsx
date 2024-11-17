"use client";
import React, { useState } from "react";
import StepsBar from "./StepsBar";
import { IBrandData } from "../interfaces";
import { createBrand, updateBrand } from "../brands.api";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

interface Props {
  data?: IBrandData;
  isUpdating?: boolean;
  id?: number
}

interface ISteps {
  name: string;
  label: string;
  key: keyof IBrandData;
}

export default function BrandForm({
  data = {
    brandName: "",
    ownerName: "",
  },
  isUpdating = false,
  id
}: Props) {
  const router = useRouter();

  const steps: Array<ISteps> = [
    {
      name: "Información de la marca",
      label: "Marca a registrar",
      key: "brandName",
    },
    {
      name: "Información del titular",
      label: "Titular de la marca",
      key: "ownerName",
    },
  ];
  const [currentStep, setCurrentStep] = useState(1);
  const [brandData, setBrandData] = useState<IBrandData>(data);

  const onHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBrandData({
      ...brandData,
      [event.target.name as keyof IBrandData] : event.target.value
    });
  };

  const onHandleCreateBtn = async () => {
    if (currentStep === steps.length + 1) {
      const res = isUpdating && id? await updateBrand(id, brandData) : await createBrand(brandData);
      if (res.isOk) {
        toast.success(res.message);
      } else {
        toast.error(res.message);
      }
      router.push("/brands");
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <div className="pt-10 h-64">
      <StepsBar steps={steps} currentStep={currentStep} />
      <div
        className={
          "w-full h-full flex flex-col justify-center items-center " +
          (currentStep == steps.length + 1 ? "mt-28" : "mt-20")
        }
      >
        {steps.map((step, index) => (
          <div
            key={index}
            className={
              "flex flex-col items-center justify-center " +
              (currentStep != index + 1 && currentStep != steps.length + 1
                ? "hidden"
                : "")
            }
          >
            <p className="text-center mb-5 font-medium">{step.label}</p>
            <input
              type="text"
              id={step.key}
              name={step.key}
              className={
                "border border-4 rounded-full w-64 mb-6 text-center " +
                (currentStep == steps.length + 1
                  ? "border-gray-400"
                  : "border-black")
              }
              disabled={currentStep == steps.length + 1 ? true : false}
              value={brandData[step.key]}
              onChange={onHandleChange}
            />
          </div>
        ))}
        <div>
          <button
            className={
              "mr-6 text-green-900 w-44 mt-6 font-bold bg-gray-300 hover:bg-gray-400 focus:ring-4 focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 focus:outline-none " +
              (currentStep == 1 ? "hidden" : "")
            }
            onClick={() => setCurrentStep(currentStep - 1)}
          >
            Volver
          </button>
          <button
            onClick={() => onHandleCreateBtn()}
            className="text-green-900 w-44 mt-6 font-bold bg-green-300 hover:bg-green-400 focus:ring-4 focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 focus:outline-none"
          >
            {currentStep === steps.length + 1 ? (isUpdating ? "Actualizar" : "Crear") : "Continuar"}
          </button>
        </div>
      </div>
    </div>
  );
}
