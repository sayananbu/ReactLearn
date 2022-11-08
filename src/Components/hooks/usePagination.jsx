import { useMemo } from "react"

export const usePagination=(totalPages)=>{
	const pagesArray = useMemo(()=>{
		let elArray=[]
		for (let i = 0; i < totalPages; i++) {
			elArray.push(i+1)
		}
		return elArray
	}, [totalPages])
	return pagesArray
}
