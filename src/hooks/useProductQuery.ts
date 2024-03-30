import { getAllProducts, getProductById } from "@/services/product";
import { useQuery } from "@tanstack/react-query";

// { id: 1, _limit: 10, _page: 1 }
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useProductQuery = (params?: any) => {
    const { data, ...rest } = useQuery({
        queryKey: ["PRODUCT_KEY", params],
        queryFn: async () => {
            return params?.id ? await getProductById(params.id as number | string) : await getAllProducts(params)
        },
    });

    return { data, ...rest };
}