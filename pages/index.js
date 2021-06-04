import Head from 'next/head';
import DeveloperHint from '../components/DeveloperHint';

export default function Home(props) {
  console.log(props.data);

  return (
    <>
      <Head>
        <title>Zesty.io NextJS Demo</title>
      </Head>

      <main className='container'>
        <h1>Zesty.io with Nextjs</h1>
        <h3>Fetching data</h3>
        <div className='container-grid'>
          <div className='card-container'>
            {props.data.map((data, index) => (
              <div key={data.product_id} className='card'>
                <a href={`/product/${data.product_id}`}>
                  <div className='card-content'>
                    <h1>{data.name}</h1>
                    <img
                      height='auto'
                      width='200px'
                      max-width='auto'
                      src={data.primary_image}
                    />
                    <p> {data.meta_description}</p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>
      <DeveloperHint>
        <p>
          <strong>Zesty.io Hint:</strong>
          <a
            title='getstaticprops-details'
            target='_blank'
            href='https://nextjs.org/learn/basics/data-fetching/getstaticprops-details'
          >
            getStaticPros
          </a>{' '}
          Next.js will run this function at build time. Whatever your return as
          props will be passed into the exported page.
          <a
            title='getServerSideProps'
            target='_blank'
            href='https://nextjs.org/learn/basics/data-fetching/request-time'
          >
            getServerSideProps
          </a>{' '}
          This will be called at runtime during every request. So unlike
          getStaticProps, you will have the runtime data like query params, HTTP
          headers, and the req and res objects from API handlers.{' '}
          <a
            title='getStaticPaths'
            target='_blank'
            href='https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation'
          >
            getStaticPaths
          </a>{' '}
          This will be called at runtime during every request. So unlike
          getStaticProps, you will have the runtime data like query params, HTTP
          headers, and the req and res objects from API handlers. Here we are
          fetching with nextjs `getServerSideProps` to Zflix{' '}

            <a
              target='_blank'
              href='http://b4m94v41-dev.preview.zesty.io/-/gql/products.json'
            >
              API from Zesty.io
            </a>
          {' '}
          API and mapping through to display image, title, and description{' '}
          <a
            target='_blank'
            href='https://github.com/zesty-io/demos/blob/main/nextjs/pages/index.js'
          >
            View Next.js source file here
          </a>
        </p>
      </DeveloperHint>

      <style jsx>{`
        .container {
          width: 100%;
          background-color: #f2f4fb;
          display: flex;
          flex-direction: column;
          padding: 32px;
          height: 100vh;
        }
        .container-grid {
          align-self: center;
        }
        .card-container {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, auto));
          gap: 32px;
        }

        .card {
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          background-color: #efefef;
          padding: 16px;
          border-radius: 15px;
          box-shadow: 0px 10px 15px -5px rgb(0 0 0 / 65%);
          transition: all 0.2s ease-in-out;
        }
        .card a {
          text-decoration: none;
          text-align: center
        }
        .card a h1 {
          text-decoration: none !important;
          color: rgb(33, 33, 33);
          text-transform: uppercase;
          background: lightgray;
          width: 100%;
          margin: 10px 0;
        }
        .card a p {
          color: rgb(92, 92, 92);
        }

        .card:hover {
          transform: scale(1.1);
        }
        .card-content {
          display: flex;
          align-items: center;
          flex-direction: column;
        }
      `}</style>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    'https://colorstreetdemo.zesty.dev/-/gql/products.json'
  );
  let data = await res.json();
  if (!data.ok) {
    console.error('data not found');
  }
  return {
    props: {
      data: data,
    },
  };
}
