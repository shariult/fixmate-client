import React from "react";
import ServiceForm from "@/components/layout/service/ServiceForm";
import AddServiceAside from "./_components/AddServiceAside";

function AddServicePage() {
  return (
    <main className="flex-1 p-4 md:p-8">
      <div>
        <h1 className="heading-2">Add a service</h1>
        <p className="mt-1 text-muted">
          Describe what you repair. An admin reviews every service before
          customers can see it.
        </p>
      </div>

      <div className="mt-8 grid gap-6 xl:grid-cols-3">
        <ServiceForm submitType="create" />

        <AddServiceAside />
      </div>
    </main>
  );
}

export default AddServicePage;
