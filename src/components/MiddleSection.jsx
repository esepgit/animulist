import CardMiddle from "./CardMiddle";

export default function MiddleSection(props) {
  return (
    <div className="flex flex-col">
      <CardMiddle {...props} />
      <CardMiddle {...props} />
    </div>
  );
}
