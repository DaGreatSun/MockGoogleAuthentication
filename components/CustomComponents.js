import React from "react";
import { Modal, Button, Tooltip } from "react-daisyui";
import { twMerge } from "tailwind-merge";
import { RiErrorWarningFill } from "react-icons/ri";
import { getSixDigitRandom } from "@helpers/utils";
import { IoClose } from "react-icons/io5";

export function Content({ children, key }) {
  return <div className="m-5 h-fit overflow-visible">{children}</div>;
}

export function Row({ children, totalCol, style }) {
  var gridCol = "grid-cols-12";
  if (totalCol && totalCol !== "" && totalCol > 0) {
    gridCol = "grid-cols-" + totalCol;
  }

  return (
    <div
      className={twMerge(
        `container grid ${gridCol} my-1 max-w-full gap-2`,
        style,
      )}
    >
      {children}
    </div>
  );
}

export function Col({ children, colSize, style }) {
  var colSpan = "col-span-12";
  if (colSize && colSize !== "" && colSize > 0) {
    colSpan = "col-span-" + colSize;
  }

  return (
    <div className={twMerge(`${colSpan} ${style} my-0 gap-2`, style)}>
      {children}
    </div>
  );
}

export function CustomButton({
  children,
  message,
  msgPosition,
  color,
  shape,
  size,
  type,
  disabled,
  className,
  onClick,
}) {
  return (
    <Tooltip message={message} position={msgPosition ?? "top"}>
      <Button
        color={color}
        shape={shape}
        size={size ?? "sm"}
        type={type ?? "button"}
        disabled={disabled ?? false}
        className={twMerge("shadow-none", className)}
        onClick={(e) => onClick(e)}
      >
        {children}
      </Button>
    </Tooltip>
  );
}

export function CustomModal({
  children,
  open,
  onClose,
  title,
  className,
  bodyClassName,
}) {
  function closeModal() {
    try {
      onClose();
    } catch (error) {
      console.log("Please initialize onClose function");
    }
  }

  if (open === undefined || open === null) {
    return null;
  }

  return (
    <Modal.Legacy
      className={twMerge("max-w-[80%] p-0", className)}
      backdrop
      open={open}
      onClickBackdrop={() => {
        closeModal();
      }}
    >
      <Modal.Header className="sticky top-0 z-10 m-0 flex items-center justify-between border-b-2 border-gray-400 bg-white px-6 py-2">
        <h1 className="font-bold">{title ?? ""}</h1>
        <Button
          formMethod="dialog"
          size="md"
          color="ghost"
          shape="circle"
          className="text-xl font-bold text-black"
          onClick={() => {
            closeModal();
          }}
        >
          <IoClose size={23} />
        </Button>
      </Modal.Header>
      <Modal.Body className={twMerge("p-6", bodyClassName)}>
        {children}
      </Modal.Body>
    </Modal.Legacy>
  );
}

export function WarningModerationModal({
  modalOpen,
  setModalOpenToFalse,
  proceed,
}) {
  return (
    <Modal open={modalOpen} backdrop={true}>
      <Modal.Header className="flex items-center font-bold">
        <RiErrorWarningFill className="mr-3 text-yellow-300" size={28} />
        <div>Warning: Inappropriate Content Found!</div>
      </Modal.Header>
      <Modal.Body>
        Please review and edit your content to adhere to our guidelines or
        proceed with caution. Continued use of inappropriate language may result
        in consequences.
        <br />
        <br />
        Thank you for your understanding and cooperation in maintaining a safe
        and welcoming community.
      </Modal.Body>
      <Modal.Actions>
        <Button
          color="warning"
          size="sm"
          className="h-9 capitalize text-white"
          onClick={() => proceed()}
        >
          Proceed
        </Button>
        <Button
          color="error"
          size="sm"
          className="h-9 capitalize"
          onClick={() => setModalOpenToFalse()}
        >
          Close
        </Button>
      </Modal.Actions>
    </Modal>
  );
}
