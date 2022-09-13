import { useAppSelector } from "../../app/hooks";
import { PartI } from "../../app/interfaces/Parts";

export default function BuilderPage() {
  const { parts } = useAppSelector((state) => state.builder);

  return (
    <div>
      <h1>Lets build a computer</h1>
      <ul>
        {parts &&
          parts.map((part: PartI) => <li key={part.id}>{part.name}</li>)}
      </ul>
    </div>
  );
}
