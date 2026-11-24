import { calculatorsList } from "@/lib/constants";
import { CalculatorItem } from "@/types";

export function getAllCalculators(): CalculatorItem[] {
  return calculatorsList;
}

export function calculateGST(amount: number, rate: number, type: "exclusive" | "inclusive") {
  const tax = type === "exclusive" ? (amount * rate) / 100 : (amount * rate) / (100 + rate);
  const total = type === "exclusive" ? amount + tax : amount;
  const net = type === "exclusive" ? amount : amount - tax;
  return { net, tax, total, cgst: tax / 2, sgst: tax / 2 };
}
