import { useState } from "react";
import { Product, ProductInCart } from "../interface/interfaces";


export const useShoppingCart = () => {

      const [shoppingCart, setShoppingCart] = useState<{ [key: string] : ProductInCart }>({});
    
      const onProductCountChange = ({count, product} : {count: number, product: Product}) => {
        
        setShoppingCart(oldShoppingCart => {

          console.log({ count });
          if (count === 0 ){
              const { [product.id]: toDelete, ...rest } = oldShoppingCart;
              return rest;
          }
    
          return {
            ...oldShoppingCart,
            [product.id] : {...product, count}
          }
        })
    }

    return {
        shoppingCart,
        onProductCountChange,
    }
}
