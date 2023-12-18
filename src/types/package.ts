type Package = {
    name: string;
    thumbnail: string;
    description: string;
    prices: number;
    fieldForm: Field[];
};

type Field = {
    name: string;
    type: "text" | "tel";
    label: string;
};

export type { Package, Field };
