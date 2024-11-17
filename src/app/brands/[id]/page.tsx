import DashboardLayout from "@/app/dashboardLayout"
import Card from "@/components/Card"
import BrandForm from "../components/BrandForm"
import { getBrandById } from "../brands.api"
import { IBrandData } from "../interfaces"

interface IParams {
  params: {
    id: string
  }
}

export default async function UpdateBrand({params}: IParams) {
  console.log('fdsfa', params.id)
  const id = Number(params.id)
  const res = await getBrandById(id)
  const brandData: IBrandData = {
    brandName: res.brand_name,
    ownerName: res.owner_name
  }
  return (
    <DashboardLayout>
      <div className="box-border w-5/6 h-screen p-6">
        <Card title="Nuevo registro">
          <BrandForm data={brandData} isUpdating={true} id={id}/>
        </Card>
      </div>
    </DashboardLayout>
  )
}