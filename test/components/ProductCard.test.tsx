
import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import { ProductCard } from '../../src/components';
import { product1 } from '../data/product';


describe('ProductCard', () => {
    
    test('debe mostrar el componente correctamente ', () => {
        
        const { container } = render(
            <ProductCard product={product1}>
                {
                    () => (
                        <h1>ProductCard</h1>
                    )
                }
            </ProductCard>
        )

       expect(container).toMatchSnapshot();
       
    });
    
    test('Debe incrementar el contador', async() => {
        const { container, getByText } = render(
            <ProductCard product={product1}>
                {
                    ({ count, increaseBy}) => (
                        <>
                            <h1>Product Card</h1>
                            <span>{count}</span>
                            <button onClick={ () => increaseBy(1)}>+1</button>
                        </>
                    )
                }
            </ProductCard>
        )
    
    expect(container).toMatchSnapshot();
    const count = getByText('0');

    act(() => {
        fireEvent.click(getByText('+1'));
    });

    console.log(count.textContent);
    expect(count.textContent).toBe('1');
    });

});
  