import { TableAction } from "../constants";

export interface TableColumn {
    name: string;         // property name from data object
    label: string;        // display label for the column
    sortable?: boolean;   // whether column is sortable
    type?: 'text' | 'date' | 'number'; // data type for proper formatting
}

export interface TableActionConfig {
    action: TableAction;
    handler: (row: any) => void;
}
