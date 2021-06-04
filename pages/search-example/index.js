import Layout from '../../components/Layout';
import { useState } from 'react';
import Head from 'next/head';
import DeveloperHint from '../../components/DeveloperHint';

function Posts(props) {
  const [searchVal, setSearchVal] = useState('');

  let filteredArticles = props.articles;

  if (searchVal != '') {
    filteredArticles = filteredArticles.filter((article) => {
      if (article.title.toLowerCase().includes(searchVal)) {
        return true;
      }
    });
  }

  return (
    <Layout>
      <Head>
        <title>Search Example</title>
      </Head>

      <div className='fake-google-header'>
        <img src='https://www.colorstreet.com/content/images/logo-horizontal.jpg' width='200' alt='Google' />

        <input
          type='text'
          placeholder='Search...'
          value={searchVal}
          onChange={(e) => setSearchVal(e.target.value)}
        />
      </div>
      <div className='results'>
        {filteredArticles.map((art) => (
          <div key={art.zuid} className='result'>
            <div className='imageThumb'>
              <img src={art.primary_image} alt={art.name} />
            </div>
            <div className='resultsText'>
              <h4>
                <a href={`/product/${art.product_id}`}>{art.name}</a>
              </h4>
              <p>
                {art.description.replace(/(<([^>]+)>)/gi, '').substring(0, 200)}
              </p>
              <a className='path' href={`/product/${art.product_id}`}>
                {`/product/${art.product_id}`}
              </a>{' '}
              -{' '}
              <a className='cached' href={`/product/${art.product_id}`}>
                Cached
              </a>
            </div>
          </div>
        ))}
        <DeveloperHint>
          <p>
            <strong>Zesty.io Hint:</strong>
            This NextJS example uses an endpoint automatically generating from a
            Zesty.io content instance{' '}
            <a
              target='_blank'
              href='https://colorstreetdemo.zesty.dev/-/gql/products.json'
            >
              https://colorstreetdemo.zesty.dev/-/gql/products.json
            </a>{' '}
            to load the data, and uses a javascript array filter to power the
            search. Data is preloaded using a NextJS function{' '}
            <a
              target='_blank'
              href='https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation'
            >
              getStaticProps
            </a>{' '}
            <a
              target='_blank'
              href='https://github.com/zesty-io/demos/blob/main/nextjs/pages/search-example/index.js'
            >
              View Next.js source file here
            </a>
          </p>
        </DeveloperHint>
      </div>
      <style jsx>{`
        .results {
          padding-top: 90px;
          margin: 3rem auto 6rem;
        }
        .imageThumb {
          overflow: hidden;
          min-width: 120px;
          height: 80px;
          flex-grow: 3;
          margin-right: 10px;
          border: 2px solid #2736d1;
        }
        .resultsText {
          flex-grow: 1;
        }
        .imageThumb img {
          width: 150px;
          margin-left: -15px;
        }
        .result {
          font-family: Verdana, Arial, sans-serif;
          margin-bottom: 30px;
          display: flex;
        }
        h4 {
          margin: 0;
          line-height: 14px;
          margin-bottom: 4px;
        }
        .fake-google-header {
          position: absolute;
          width: 100%;
          top: 56.25px;
          left: 0px;
          border-bottom: 2px grey solid;
          padding: 20px;
          display: flex;
          background: white;
          justify-content:center;
        }
        .fake-google-header input,
        .fake-google-header p {
          margin: auto 30px;
        }
        .fake-google-header p {
          color: grey;
        }
        .fake-google-header img {
          align-self: center
        }
        p {
          font-size: 14px;
          margin: 0;
        }
        h4 a {
          color: #2736d1;
          font-size: 18px;
        }
        a.path {
          color: #34a853;
          font-size: 14px;
        }
        a.cached {
          color: #2736d1;
          font-size: 14px;
        }
      `}</style>
    </Layout>
  );
}

export async function getStaticProps() {
  let res = await fetch(
    'https://colorstreetdemo.zesty.dev/-/gql/products.json'
  );
  let data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      articles: [...data],
    },
  };
}

export default Posts;
