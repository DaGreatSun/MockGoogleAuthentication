import React, { useEffect, useState } from "react";
import { Button } from "react-daisyui";
import toast from "react-hot-toast";
import { FiCheck } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { TbAlertCircleFilled } from "react-icons/tb";

function ConfirmationToaster(props) {
  const [message, setMessage] = useState("");
  const [showToaster, setShowToaster] = useState(false);

  useEffect(() => {
    if ("forward" in props && props.forward !== null) {
      setMessage(props.forward.message);
      setShowToaster(props.forward.show);
    }
  }, [props]);

  function resetAndClose(t) {
    setMessage("");
    setShowToaster(false);
    toast.dismiss(t.id);
  }

  function renderToaster() {
    toast.custom(
      (t) => (
        <div className="flex w-fit items-center rounded-lg bg-gray-50 p-5 shadow-xl">
          <TbAlertCircleFilled size={35} className="mr-2 text-yellow-400" />
          <span className="mr-5 text-[17px] font-semibold">{message}</span>
          <Button
            className="mr-3"
            color="success"
            shape="circle"
            size="sm"
            onClick={() => {
              resetAndClose(t);
              props.forward.cb(true);
            }}
          >
            <FiCheck size={15} />
          </Button>
          <Button
            color="error"
            shape="circle"
            size="sm"
            onClick={() => {
              resetAndClose(t);
              props.forward.cb(false);
            }}
          >
            <IoClose size={15} />
          </Button>
        </div>
      ),
      { duration: 30000 },
    );
  }
  return <div>{showToaster && renderToaster()}</div>;
}

export default ConfirmationToaster;
