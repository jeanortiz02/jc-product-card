
import React from 'react';
import { render } from '@testing-library/react';
import { ProductTitle, ProductCard } from '../../src/components';
import { product1 } from '../data/product';


product1


describe('ProductTitle', () => {
    
    test('debe mostrar el componente correctamente con el titulo personalizado', () => {
        
        const { container } = render(
            <ProductTitle title="Custom Product"/>
        )

       expect(container).toMatchSnapshot();
        
    });

    test('Debe de mostrar el componente con el nombre de producto', () => {
        const { container } = render(
            <ProductCard
                product={product1}

            >
                {
                    ()=> (
                        <ProductTitle />
                    )
                }
            </ProductCard>
        )

       expect(container).toMatchSnapshot();
    });
});
  