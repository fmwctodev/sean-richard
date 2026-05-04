import { getCoreSchemaGraph } from '@/lib/schema';

interface SchemaMarkupProps {
  path?: string;
  pageTitle?: string;
}

export default function SchemaMarkup({ path = '/', pageTitle }: SchemaMarkupProps) {
  const graph = getCoreSchemaGraph(path, pageTitle);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}

export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
