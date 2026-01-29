import { useEffect } from 'react';

interface JsonLdProps {
    schema: Record<string, unknown> | Record<string, unknown>[];
}

/**
 * JsonLd Component
 * Injects structured data (JSON-LD) into the document head
 * Critical for: Rich Snippets, AI Search (GEO), Knowledge Graph
 */
export function JsonLd({ schema }: JsonLdProps) {
    useEffect(() => {
        // Create script element
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(schema);
        script.id = `json-ld-${JSON.stringify(schema).slice(0, 20).replace(/[^a-z0-9]/gi, '')}`;

        // Remove existing script with same id if exists
        const existing = document.getElementById(script.id);
        if (existing) {
            existing.remove();
        }

        // Append to head
        document.head.appendChild(script);

        // Cleanup on unmount
        return () => {
            const scriptToRemove = document.getElementById(script.id);
            if (scriptToRemove) {
                scriptToRemove.remove();
            }
        };
    }, [schema]);

    return null;
}

/**
 * Multi-schema JsonLd component
 * Use when you need multiple schemas on one page
 */
export function JsonLdMultiple({ schemas }: { schemas: Record<string, unknown>[] }) {
    return (
        <>
            {schemas.map((schema, index) => (
                <JsonLd key={index} schema={schema} />
            ))}
        </>
    );
}
