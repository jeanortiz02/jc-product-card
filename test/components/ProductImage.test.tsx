
import React from "react";
import { render } from "@testing-library/react";
import { ProductImage } from "../../src/components/ProductImage";
import { ProductCard } from "../../src";
import { product2 } from "../data/product";



describe('Pruebas en el ProductImage', () => {
    
    test('debe mostrar la imagen personalizada', () => {
        const { container } = render(
                    <ProductImage image="image-url"/>
                )
        
               expect(container).toMatchSnapshot();
    });
    test('debe mostrar la imagen del producto', () => {
        const { container } = render(
                   <ProductCard
                        product={product2}
        
                    >
                        {
                            ()=> (
                                <ProductImage />
                            )
                        }
                    </ProductCard>
                )
        
               expect(container).toMatchSnapshot();
    });
});