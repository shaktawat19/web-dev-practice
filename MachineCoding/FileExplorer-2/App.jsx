import FileExplorer from "./components/FileExplorer";
import "./styles.css";
import data from "./data/FileExplorerData.js";
import FileExplorerContextWrapper from "./context/FileExplorerContext";

export default function App() {
  return (
    <FileExplorerContextWrapper>
      <FileExplorer />
    </FileExplorerContextWrapper>
  );
}
