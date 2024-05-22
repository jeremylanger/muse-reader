// https://vike.dev/onRenderClient
export { onRenderClient };

import { createRoot } from "react-dom/client";
import { PageLayout } from "./PageLayout";

function onRenderClient(pageContext: any) {
  const { Page, data } = pageContext;
  console.log(data);
  createRoot(document.getElementById("root") as HTMLElement).render(
    <PageLayout pageContext={pageContext}>
      <Page />
    </PageLayout>,
  );
}
