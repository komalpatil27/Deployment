import { useState } from "react";

interface FolderProps {
  dataStructure: {
    name: string;
    isFolder: boolean;
    items: any[];
  };
}
const Folder = (props: FolderProps) => {
  console.log(props, "data");
  const { dataStructure } = props;
  const [selectedName , setSelectedName] =  useState('')

  const handleClickEvent = (name: string) => {
    console.log("handled a click event", name);
    setSelectedName(name)
  };
  return (
    <>
      {/* <h4>Folder Structure</h4> */}
      <div>
        {dataStructure.isFolder ? (
          <div
            style={{ cursor: "pointer" }}
            onClick={() => handleClickEvent(dataStructure.name)}
          >
            📁 {dataStructure.name}
          </div>
        ) : (
          <div>🗃️ {dataStructure.name}</div>
        )}
        {dataStructure.isFolder && dataStructure.name === selectedName &&
          dataStructure.items.map((value) => {
            return (
              <div style={{ padding: "10px" }}>
                <Folder dataStructure={value} />
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Folder;
