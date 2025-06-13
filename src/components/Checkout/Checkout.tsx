/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { FormProvider, useForm } from "react-hook-form";
import Billing from "./Billing/Billing";
import Order from "./Order/Order";

const Checkout = () => {
  const methods = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      street: "",
      city: "",
      region: "",
      zipCode: "",
      email: "",
      phoneNumber: "",
      orderNotes: "",
    },
  });

  const { handleSubmit } = methods;

  // form submit handler
  const onSubmit = (data: any) => {
    console.log("Submitted Data:", data);
  };

  return (
    <div className="w-full max-w-6xl mx-auto pt-[6rem] py-8 px-4">
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <section className="flex flex-col lg:flex-row gap-10 xl:gap-6">
            {/* billing information */}
            <div className="w-full lg:w-2/3">
              <Billing />
            </div>

            {/* order summary */}
            <div className="flex-1">
              <Order />
            </div>
          </section>
        </form>
      </FormProvider>
    </div>
  );
};

export default Checkout;
