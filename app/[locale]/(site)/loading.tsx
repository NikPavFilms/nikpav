import { LoadingScreen } from "@/components/loading-screen";

// Covers navigation between top-level pages. Deliberately none under works/: switching
// category filters keeps the current grid on screen instead of flashing a loader.
const Loading = () => <LoadingScreen />;

export default Loading;
