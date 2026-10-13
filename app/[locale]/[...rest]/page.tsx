import { notFound } from "next/navigation";

// Unknown URLs land here so the branded not-found page renders inside the site layout.
const CatchAllPage = () => notFound();

export default CatchAllPage;
