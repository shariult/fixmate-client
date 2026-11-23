import Modal from "@/components/ui/common/Modal";
import { updateServiceApprovalAction } from "@/lib/adminActions";
import { updateBookingStatusAction } from "@/lib/bookingActions";
import { useRouter } from "next/navigation";
import React, { ComponentPropsWithoutRef } from "react";
import toast from "react-hot-toast";
import { PiWarningBold } from "react-icons/pi";

type AdminServiceRejectModalProps = {
  sId: string;
  onClose: () => void;
  className?: string;
  children?: React.ReactNode;
} & ComponentPropsWithoutRef<"div">;

function AdminServiceRejectModal(props: AdminServiceRejectModalProps) {
  const { sId, onClose, className, children, ...rest } = props;
  const router = useRouter();

  async function rejectHandler() {
    const resData = await updateServiceApprovalAction(sId, "rejected");
    if (!resData.isSuccess) {
      toast.error("Something went wrong!");
      onClose();
      return;
    }

    toast.success("Service Updated successfully!");
    router.refresh();
    onClose();
  }

  return (
    <Modal onClose={onClose}>
      <span className="grid size-12 place-items-center rounded-full bg-error/15 text-error">
        <PiWarningBold />
      </span>
      <h3 className="heading-3 mt-4">Reject this service?</h3>
      <p className="mt-2 text-sm/6 text-muted">
        It will reject the service and you will not be viewed to public.
      </p>
      <div className="modal-action">
        <form method="dialog" className="flex gap-2">
          <button className="btn btn-ghost">Go Back</button>
        </form>
        <button className="btn btn-error" onClick={rejectHandler}>
          Reject service
        </button>
      </div>
    </Modal>
  );
}

export default AdminServiceRejectModal;
