import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";

import Billboard from "@/components/ui/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

const HomePage = async () => {
  const billboard = await getBillboard("clnftivsv0001lbosfgp4qkgw");
  const products = await getProducts({ isFeatured: true });

  return (
    <Container>
      <div className="space-y-10 pb-10">{billboard && <Billboard data={billboard} />}</div>
      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
        <ProductList title="Featured Products" items={products} />
      </div>
    </Container>
  );
};

export default HomePage;
