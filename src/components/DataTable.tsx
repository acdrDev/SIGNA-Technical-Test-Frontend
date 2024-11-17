'use client'
import { deleteBrand } from "@/app/brands/brands.api";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

interface Props {
  data: Array<any>;
}

export default function DataTable({ data }: Props) {
  const router = useRouter()
  const deleteBrandAction = async (id: number) => {
    const res = await deleteBrand(id)
    if(res.isOk) {
      router.refresh()
      toast.success(res.message)
    } else {
      toast.error(res.message)
    }
  }
  return (
    <div className="mt-6 shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-white uppercase bg-gray-500">
          <tr>
            <th scope="col" className="px-6 py-3">
              Marca
            </th>
            <th scope="col" className="px-6 py-3">
              Titular
            </th>
            <th scope="col" className="px-6 py-3">
              Estado
            </th>
            <th scope="col" className="px-6 py-3">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((brand) => (
            <tr key={brand.id} className="odd:bg-white even:bg-gray-50 border-b">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                {brand.brand_name}
              </th>
              <td className="px-6 py-4">{brand.owner_name}</td>
              <td className="px-6 py-4">{brand.status}</td>
              <td className="px-6 py-4">
                <Link
                  href={'/brands/' + brand.id}
                  className="text-green-900 font-bold bg-green-300 hover:bg-green-400 focus:ring-4 focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
                >
                  Actualizar
                </Link>
                <button onClick={() => deleteBrandAction(brand.id)} className="text-red-900 font-bold bg-red-300 hover:bg-red-400 focus:ring-4 focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 focus:outline-none">
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
