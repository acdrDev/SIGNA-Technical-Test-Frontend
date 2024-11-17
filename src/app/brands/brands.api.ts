import { IBrandData } from "./interfaces"

const API_URL = process.env.API_URL || 'http://localhost:5000/api/v1'
export async function getAllBrands(){
  let brands = []
  try {
    const res = await fetch(API_URL + '/brands', {
      cache: 'no-store'
    })
    const data = await res.json()
    brands = data.brands
  } catch (error) {
    console.error(error)   
  }

  return brands
}

export async function getBrandById(id: number){
  let brand: any
  try {
    const res = await fetch(API_URL + '/brands/' + id)
    const data = await res.json()
    brand = data.brand
  } catch (error) {
    console.error(error)   
  }

  return brand
}

export async function updateBrand(id: number, data: IBrandData) {
  try {
    await fetch(API_URL + '/brands/' + id, {
      method: 'PUT',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify({
        brand_name: data.brandName,
        owner_name: data.ownerName,
        status: 'Creado'
      })
    })
  } catch (error) {
    console.error(error)
    return {isOk: false, message: 'No se pudo actualizar la marca, intenta de nuevo'}
  }
  return {isOk: true, message: 'Marca actualizada correctamente'}
}

export async function createBrand(data: IBrandData) {
  try {
    await fetch(API_URL + '/brands', {
      method: 'POST',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify({
        brand_name: data.brandName,
        owner_name: data.ownerName,
        status: 'Creado'
      })
    })
  } catch (error) {
    console.error(error)
    return {isOk: false, message: 'No se pudo crear la marca, intenta de nuevo'}
  }
  return {isOk: true, message: 'Marca creada correctamente'}
}

export async function deleteBrand(id: number) {
  try {
    await fetch(API_URL + '/brands/' + id, {
      method: 'DELETE'
    })
  } catch (error) {
    console.error(error)
    return {isOk: false, message: 'No se pudo eliminar la marca, intenta de nuevo'}
  }
  return {isOk: true, message: 'Marca eliminada correctamente'}
}