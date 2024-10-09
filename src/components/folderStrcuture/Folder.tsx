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
  return (
    <>
      {/* <h4>Folder Structure</h4> */}
      <div>
        {dataStructure.isFolder ? `📁 ${dataStructure.name}` :  `🗃️ ${dataStructure.name}`}
        {dataStructure.isFolder &&
          dataStructure.items.map((value) => {
            return (
            <div style={{padding : '10px'}}><Folder dataStructure={value} /></div>
          )})}
      </div>
    </>
  );
};

export default Folder;
