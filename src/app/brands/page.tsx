import DashboardLayout from "@/app/dashboardLayout"
import Card from "@/components/Card"
import DataTable from "@/components/DataTable"
import { getAllBrands } from "./brands.api"
import {PlusSquare} from "@geist-ui/icons"
import Link from "next/link"

export default async function Brands() {
  const data = await getAllBrands()
  return (
    <DashboardLayout>
      <div className="box-border w-5/6 h-screen p-6">
        <Card title="Registro de marca">
          <Link
            href="/brands/create"
            className="flex items-center w-44 text-green-900 font-bold bg-green-300 hover:bg-green-400 focus:ring-4 focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 me-2 mb-6 focus:outline-none"
          >
            <PlusSquare className="mr-2" />
            Nuevo Registro
          </Link>
          <DataTable data={data}/>
        </Card>
      </div>
    </DashboardLayout>
  )
}