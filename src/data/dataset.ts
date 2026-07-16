export interface Record {
    id: number;
    label: string;
    value: number;
}

export function sum(records: Record[]): number {
    return records.reduce((acc, r) => acc + r.value, 0);
}

export function mean(records: Record[]): number {
    return records.length === 0 ? 0 : sum(records) / records.length;
}

export function topN(records: Record[], n: number): Record[] {
    return [...records].sort((a, b) => b.value - a.value).slice(0, n);
}

export function groupByLabel(records: Record[]): Map<string, Record[]> {
    const out = new Map<string, Record[]>();
    for (const r of records) {
        const bucket = out.get(r.label) ?? [];
        bucket.push(r);
        out.set(r.label, bucket);
    }
    return out;
}
