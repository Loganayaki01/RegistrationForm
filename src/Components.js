import React from "react";

export const InputComponent = (props) => {
  return (
    <div
    style={{
      display: "flex",
      flexDirection: (props.type === "text"  || props.type === "email" )? "column" : "row",
    }}
  >
    {props.type === "radio" && <input {...props}></input>}
    <TextComponent
      label={props.label}
      CustomTag={(props.type === "text" || props.type === "email")? "div" : "span"}
    />
    {(props.type === "text" || props.type === "email" )&& <input {...props}></input>}
  </div>
  );
};

export const TextComponent = ({
  label,
  styleProps,
  isMandatory,
  children,
  CustomTag = "div",
}) => (
  <CustomTag style={styleProps}>
    {label}
    {isMandatory && <span>*</span>}
    {children}
  </CustomTag>
);

export const Box = (props) => (
  <>
    <TextComponent label={props.header} styleProps={{ fontSize: "24px", textAlign: "left", fontWeight: 700 ,margin:"10px"}}/>
    <div style={{ border: "1px solid #E5E5E5", borderRadius:"10px", padding:"10px", fontFamily:"Hind", margin:"20px"}}>{props.children}</div>
  </>
)

export const DatePick=()=>
{   return <div>
            <input type="date"  style={{
              width:"100%",
              height:"41px" ,borderRadius:"10px" 
            }}/>
            </div>
}

export const Dropdown = (props) => {
  return (
    <div>
      <select style={{width:"100%",padding:"10px 5px",height:"41px" ,borderRadius:"10px",}}>
        {props.options?.map((m) => (
          <option value={m}>{m}</option>
        ))}
      </select>
    </div>
  );
};




