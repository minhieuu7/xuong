import { Banner, Blog, ProductList, Services, Shop } from "@/components";
import { useProductQuery } from "@/hooks/useProductQuery";
import { IProduct } from "@/interfaces/product";

const HomePage = () => {
    const { data } = useProductQuery({ _limit: 2 });
    const featuredProducts = data?.data.filter((product: IProduct) => product.featured === true);
    return (
        <>
            <Banner />
            <ProductList products={featuredProducts} />
            <div className="container">
                <hr />
            </div>
            <Shop />
            <Blog />
            <Services />
        </>
    );
};

export default HomePage;
