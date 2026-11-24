import React from "react";
import { cn } from "@/lib/utils";

export interface Column<T> {
  header: string;
  accessorKey?: keyof T;
  cell?: (item: T) => React.ReactNode;
  className?: string;
}

export interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  emptyMessage?: string;
  className?: string;
}

export function DataTable<T extends { id?: string | number }>({
  columns,
  data,
  emptyMessage = "No records found.",
  className,
}: DataTableProps<T>) {
  return (
    <div className={cn("w-full overflow-x-auto rounded-2xl border border-brand-border bg-white shadow-subtle", className)}>
      <table className="w-full text-left text-xs sm:text-sm">
        <thead className="bg-brand-alt/80 border-b border-brand-border text-xs font-semibold text-brand-muted uppercase tracking-wider">
          <tr>
            {columns.map((col, index) => (
              <th key={index} className={cn("px-4 py-3.5", col.className)}>
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-brand-border text-brand-text">
          {data.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length}
                className="px-4 py-8 text-center text-brand-muted text-sm"
              >
                {emptyMessage}
              </td>
            </tr>
          ) : (
            data.map((row, rowIdx) => (
              <tr
                key={row.id ? String(row.id) : rowIdx}
                className="hover:bg-brand-alt/50 transition-colors"
              >
                {columns.map((col, colIdx) => (
                  <td key={colIdx} className={cn("px-4 py-3.5", col.className)}>
                    {col.cell
                      ? col.cell(row)
                      : col.accessorKey
                      ? String(row[col.accessorKey] ?? "")
                      : null}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
