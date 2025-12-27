import { useEffect, useState } from 'react';
import { api } from '../services/api';
import { ProductAnalysis } from '../types/Reports';
import { Navbar } from '../components/Navbar';

export default function Products() {
  const [products, setProducts] = useState<ProductAnalysis[]>([]);

  useEffect(() => {
    api.get('/reports/product-analysis').then(res => setProducts(res.data));
  }, []);

  return (
    <>
      <Navbar />
      <h1>Produtos</h1>
      {products.map(p => (
        <div key={p.nome_produto}>
          <strong>{p.nome_produto}</strong> — R$ {p._sum.valor_final}
        </div>
      ))}
    </>
  );
}
