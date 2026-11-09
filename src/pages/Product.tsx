import { useParams, Link } from 'react-router-dom'
import { products } from '../data'
import { useDocumentMeta } from '../useDocumentMeta'

// Mission :
// - utilise useDocumentMeta pour poser un <title> et une meta description
//   propres à CE produit (pas le titre générique du site)
// - remplace le <h3> par un <h1> (hiérarchie)
// - ajoute un bloc "Produits similaires" qui pointe vers les autres fiches
//   (maillage interne) : pour l'instant, rien n'y mène depuis cette page

export default function Product() {
  const { slug } = useParams()
  const product = products.find((p) => p.slug === slug)

  useDocumentMeta({
    title: product
      ? `${product.name} à ${product.price} € – Acheter en ligne | CycloShop`
      : 'Produit introuvable | CycloShop',
    description: product?.description,
  })

  if (!product) return <p className="page">Produit introuvable.</p>

  const similar = products.filter((p) => p.id !== product.id)

  return (
    <div className="page">
      <h1>{product.name}</h1>
      <p className="price">{product.price} €</p>
      <p>{product.description}</p>

      <h2>Produits similaires</h2>
      <ul>
        {similar.map((p) => (
          <li key={p.id}>
            <Link to={`/produits/${p.slug}`}>{p.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}