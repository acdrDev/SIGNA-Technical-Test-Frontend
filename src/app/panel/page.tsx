import DashboardLayout from "@/app/dashboardLayout";
import Card from "@/components/Card"

export default function Panel() {
  return (
    <DashboardLayout>
      <div className="box-border w-5/6 h-screen p-6">
        <Card title="Panel">
          Hello world
        </Card>
      </div>
    </DashboardLayout>
  )
}