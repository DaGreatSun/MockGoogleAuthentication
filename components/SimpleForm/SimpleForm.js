import React from "react";
import {
  Form,
  Input,
  InputGroup,
  Select,
  Textarea,
  Tooltip,
} from "react-daisyui";
import { Row, Col } from "@components/CustomComponents";
import Editor from "@components/Editor";
import { twMerge } from "tailwind-merge";
import { AiFillInfoCircle } from "react-icons/ai";
// import MySunEditor from "@components/MySunEditor";

function SimpleForm(props) {
  /***************************************************************************************/
  //States
  /***************************************************************************************/

  /***************************************************************************************/
  //Var
  /***************************************************************************************/

  /***************************************************************************************/
  //Callbacks
  /***************************************************************************************/
  React.useEffect(() => {
    //console.log(props);
  }, [props]);
  if (
    props.type === "textarea" ||
    props.type === "text" ||
    props.type === "number" ||
    props.type === "date" ||
    props.type === "datetime" ||
    props.type === "datetime-local"
  ) {
    let step = 1;
    if ("step" in props) {
      step = props.step;
    }

    let disabled = false;
    if ("disabled" in props && props.disabled === true) {
      disabled = true;
    }

    let required = false;
    if ("required" in props && props.required === true) {
      required = true;
    }
    return (
      <Col
        colSize={props.size ? parseInt(props.size) : 12}
        style={twMerge(
          `${props.type === "checkbox" ? "flex" : ""}`,
          props.colStyle,
        )}
      >
        {props.name && props.name !== "" ? (
          <div className="flex items-center">
            <label className="label py-1 font-bold">{props.name}</label>
            {props.tooltipMsg && (
              <Tooltip
                message={props.tooltipMsg}
                position={props.tooltipPosition ?? "right"}
              >
                <AiFillInfoCircle />
              </Tooltip>
            )}
          </div>
        ) : (
          <div />
        )}

        {props.type === "textarea" ? (
          <Textarea
            className={`w-full ${props.height}  ${
              props.required ? "border border-green-500" : ""
            }`}
            id={"id" in props ? props.id : "input-" + props.name}
            size="sm"
            placeholder={
              "placeholder" in props ? props.placeholder : props.name
            }
            type={props.type}
            onChange={props.onChange}
            value={props.value}
            disabled={disabled}
            rows={props.rows}
            onBlur={props.onBlur}
          />
        ) : (
          <Input
            className={twMerge(
              `w-full ${props.required ? "border border-green-500" : ""}`,
              props.className,
            )}
            id={"id" in props ? props.id : "input-" + props.name}
            size="sm"
            placeholder={
              "placeholder" in props ? props.placeholder : props.name
            }
            type={props.type}
            onChange={props.onChange}
            value={props.value}
            disabled={disabled}
            step={step}
            onBlur={props.onBlur}
          />
        )}
      </Col>
    );
  } else if (props.type === "select") {
    let required = false;
    if ("required" in props && props.required === true) {
      required = true;
    }
    let disabled = false;
    if ("disabled" in props && props.disabled === true) {
      disabled = true;
    }
    return (
      <Col colSize={props.size ? props.size : 12}>
        {props.name && props.name !== "" ? (
          <div className="flex items-center">
            <label className="label py-1 font-bold">{props.name}</label>
            {props.tooltipMsg && (
              <Tooltip
                message={props.tooltipMsg}
                position={props.tooltipPosition ?? "right"}
              >
                <AiFillInfoCircle />
              </Tooltip>
            )}
          </div>
        ) : (
          <div />
        )}

        <Select
          className={`w-full ${
            props.required ? "border border-green-500" : ""
          } `}
          placeholder={"placeholder" in props ? props.placeholder : props.name}
          id={"id" in props ? props.id : "input-" + props.name}
          type="select"
          size="sm"
          value={props.value}
          disabled={props.disabled}
          onChange={props.onChange}
        >
          {props.options.map((item, key) => (
            <Select.Option value={item.value} key={key}>
              {item.text}
            </Select.Option>
          ))}
        </Select>
      </Col>
    );
  } else if (props.type === "selectMultiple") {
    let required = false;
    if ("required" in props && props.required === true) {
      required = true;
    }
    let disabled = false;
    if ("disabled" in props && props.disabled === true) {
      disabled = true;
    }
    return (
      <Col colSize={props.size ? props.size : 12}>
        {props.name && props.name !== "" ? (
          <div className="flex items-center">
            <label className="label py-1 font-bold">{props.name}</label>
            {props.tooltipMsg && (
              <Tooltip
                message={props.tooltipMsg}
                position={props.tooltipPosition ?? "right"}
              >
                <AiFillInfoCircle />
              </Tooltip>
            )}
          </div>
        ) : (
          <div />
        )}

        <Select
          className={`w-full ${
            props.required ? "border border-green-500" : ""
          }`}
          placeholder={"placeholder" in props ? props.placeholder : props.name}
          id={"id" in props ? props.id : "input-" + props.name}
          style={{ height: props.height ?? 100 }}
          type="select"
          size="sm"
          value={props.value}
          disabled={props.disabled}
          rows={props.rows}
          onChange={props.onChange}
          multiple
        >
          {props.options.map((item, key) => (
            <Select.Option value={item.value} key={key}>
              {item.text}
            </Select.Option>
          ))}
        </Select>
      </Col>
    );
  } else if (props.type === "checkbox") {
    let step = 1;
    if ("step" in props) {
      step = props.step;
    }

    let disabled = false;
    if ("disabled" in props && props.disabled === true) {
      disabled = true;
    }

    let required = false;
    if ("required" in props && props.required === true) {
      required = true;
    }

    return (
      <Col colSize={1} style={twMerge(`flex items-center`, props.className)}>
        {props.name && props.name !== "" ? (
          <div className="flex items-center">
            <label className="label py-1 font-bold">{props.name}</label>
            {props.tooltipMsg && (
              <Tooltip
                message={props.tooltipMsg}
                position={props.tooltipPosition ?? "right"}
              >
                <AiFillInfoCircle />
              </Tooltip>
            )}
          </div>
        ) : (
          <div />
        )}

        <input
          checked={props.value}
          className={twMerge(
            "checkbox-success checkbox h-6 w-6 border border-green-500 text-white [--chkbg:theme(success)] [--chkfg:white]",
            props.inputClassName,
          )}
          id={"id" in props ? props.id : "input-" + props.name}
          size="sm"
          placeholder={"placeholder" in props ? props.placeholder : props.name}
          type={props.type}
          onChange={props.onChange}
          value={props.value}
          disabled={disabled}
          step={step}
          onBlur={props.onBlur}
        />
      </Col>
    );
  } else if (props.type === "editor") {
    return (
      <Col colSize={props.size ?? 12}>
        {props.name && props.name !== "" ? (
          <div className="flex items-center">
            <label className="label py-1 font-bold">{props.name}</label>
            {props.tooltipMsg && (
              <Tooltip
                message={props.tooltipMsg}
                position={props.tooltipPosition ?? "right"}
              >
                <AiFillInfoCircle />
              </Tooltip>
            )}
          </div>
        ) : (
          <div />
        )}

        <Editor
          className={`w-full ${
            props.required ? "border border-green-500" : ""
          } ${props.className}`}
          id={"id" in props ? props.id : "input-" + props.name}
          size="md"
          placeholder={"placeholder" in props ? props.placeholder : props.name}
          type={props.type}
          onChange={props.onChange}
          value={props.value}
          disabled={props.disabled}
          onBlur={props.onBlur}
          simpleToolBarConfig={props.simpleToolBarConfig}
        />
      </Col>
    );
  }
  return <div>SimpleForm</div>;
}

export default SimpleForm;
