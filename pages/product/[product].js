export default function Show({ product }) {
    return (
      <div className="container">
        <style jsx>{`
          .container {
            max-width: 36rem;
            margin:auto;
          }
        `}</style>
        Dynamic page loading Product Details:
        <div>{product.name}</div>
        <div>{product.product_id}</div>
        <img src={product.image} />
      </div>
    );
  }
  
  export async function getServerSideProps(context) {
    try {
      const res = await fetch(
        `https://colorstreetdemo.zesty.dev/personalization/products.json?product_ids=${context.params.product}`
      );
      const [product] = await res.json();
      
      if (!product) {
        throw new Error("Missing Show");
      }
      return {
        props: {
            product,
        },
      };
    } catch {
      return {
        notFound: true,
      };
    }
  }
  