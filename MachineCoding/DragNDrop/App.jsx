import DragAndDrop from "./DragAndDrop";

const INITIAL_DATA = {
  Todo: [
    "Design UI mockups",
    "Set up project repository",
    "Write unit test",
    "Integrate payment gateway",
  ],
  "In Progress": ["Develop authentication flow", "Implement responsive design"],
  Completed: [
    "Set up CI/CD pipeline",
    "Conduct code reviews",
    "Deploy initial version to staging",
  ],
};
export default function App() {
  return (
    <div className="App">
      <DragAndDrop initialData={INITIAL_DATA} />
    </div>
  );
}
