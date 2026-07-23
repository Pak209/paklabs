import { productStatuses, type ProductStatus as Status } from "@/lib/products";

export default function ProductStatus({ status }: { status: Status }) {
  const meta = productStatuses[status];
  return <span className={`status status-${meta.tone}`}>{meta.label}</span>;
}
