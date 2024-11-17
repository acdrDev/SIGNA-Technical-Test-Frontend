import Sidebar from "@/components/Sidbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Signa dashboard",
  description: "Technical test",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex items-center">
      <Sidebar />
      {children}
    </div>
  );
}
