import DashboardLayout from "@/app/dashboardLayout"
import Card from "@/components/Card"
import BrandForm from "../components/BrandForm"

export default async function CreateBrand() {
  return (
    <DashboardLayout>
      <div className="box-border w-5/6 h-screen p-6">
        <Card title="Nuevo registro">
          <BrandForm/>
        </Card>
      </div>
    </DashboardLayout>
  )
}