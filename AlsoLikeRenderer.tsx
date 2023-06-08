import React, { useEffect, useState } from "react";
import {
  ProductBasicInfoFragment,
  useCollectionProductsLazyQuery,
  useStoreProductsLazyQuery,
} from "../generated/graphql";
import { useStore } from "../lib/storeData";
import LoadingSpinner from "../shared/globals/UiElements/LoadingSpinner";
import type { AlsoLikeProps } from "../templates/types";
import type { RendererComponent } from "./types";

interface AlsoLikeRendererProps extends RendererComponent<AlsoLikeProps> {}

const AlsoLikeRenderer: React.FC<AlsoLikeRendererProps> = ({
  Component,
  handle,
  productId,
}) => {
  const { storeId } = useStore();
  const [products, setProducts] = useState<ProductBasicInfoFragment[]>();
  const [queryStoreProducts, { loading }] = useStoreProductsLazyQuery({
    variables: { storeId, first: 5 },
    ssr: false,
  });
  const [queryCollectionProducts, { loading: loading1 }] =
    useCollectionProductsLazyQuery({
      variables: { storeId, handle: handle!, first: 5 },
      ssr: false,
    });

  useEffect(() => {
    async function fetchProducts() {
      if (handle === "all") {
        const query1 = await queryStoreProducts();
        setProducts(query1?.data?.products?.nodes);
      } else {
        const query2 = await queryCollectionProducts();
        setProducts(query2?.data?.collection?.products?.nodes);
      }
    }
    fetchProducts();
  }, [handle, queryStoreProducts, queryCollectionProducts]);

  if (loading || loading1) {
    return <LoadingSpinner />;
  }

  const alsoLikeProducts = products?.filter(
    (product) => product?.id !== productId
  );

  if (!alsoLikeProducts?.length) return null;

  return <Component products={alsoLikeProducts} />;
};

export default AlsoLikeRenderer;
