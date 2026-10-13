// Structured data for search and answer engines. JSON-LD is the documented exception to
// "never a raw <script>": Next's own guide renders it inline. `<` is escaped so the payload
// can never close the script tag.
export const JsonLd = ({ data }: { data: Record<string, unknown> }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
  />
);
