# JC-product-card

Este es un paquete de pruebas de despliegue de NPM

### Jean Carlos 

## Ejemplo

```
import { ProductButton, ProductCard, ProductImage, ProductTitle } from "jc-product-card-2"

```

```
<ProductCard 
    key={product.id} 
    product={product}
    initialValues={{
      count: 6,
      maxCount: 10,
    }}
  >

    {
      ({ reset, increaseBy, count, isMaxCountReached})=> (
        <>
          <ProductImage/>
          <ProductTitle />
          <ProductButton/>
        </>
      )
    }
</ProductCard>
```