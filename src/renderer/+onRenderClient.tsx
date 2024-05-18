// https://vike.dev/onRenderClient
export { onRenderClient };

import { createRoot } from "react-dom/client";
import { PageLayout } from "./PageLayout";

function onRenderClient(pageContext: any) {
  const { Page } = pageContext;
  createRoot(document.getElementById("root") as HTMLElement).render(
    <PageLayout>
      <Page />
    </PageLayout>,
  );
}
