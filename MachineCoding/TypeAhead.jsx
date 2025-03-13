import { useEffect, useRef, useState } from 'react'

const STATE = {
  LOADING: 'LOADING',
  ERROR: 'ERROR',
  SUCCESS: 'SUCCESS',
}

export default function TypeAhead() {
  const [query, setQuery] = useState('')
  const [result, setResults] = useState([])
  const [status, setStatus] = useState(STATE.LOADING)
  const cache = useRef({})
  console.log(cache)
  useEffect(() => {
    const abortController = new AbortController()
    const { signal } = abortController

    const fetchData = async () => {
      try {
        setStatus(STATE.LOADING)
        if (cache.current[query]) {
          console.log('retrieved from cache')
          setResults(cache.current[query])
          setStatus(STATE.SUCCESS)
          return
        }

        console.log('API Call')
        const res = await fetch(
          `https://dummyjson.com/products/search?q=${query}&limit=10`,
          { signal }
        )
        const data = await res.json()
        setStatus(STATE.SUCCESS)
        cache.current[query] = data.products
        setResults(data.products)
      } catch (error) {
        console.log(error.name)
        if (error.name !== 'AbortError') {
          setStatus(STATE.ERROR)
        }
      }
    }

    const timerId = setTimeout(fetchData, 1000)

    return () => {
      clearTimeout(timerId)
      abortController.abort()
    }
  }, [query])

  return (
    <div>
      <input
        type='text'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {status === STATE.LOADING && <div>...Loading</div>}
      {status === STATE.ERROR && <div>Error Occured</div>}
      {status === STATE.SUCCESS && (
        <ul>
          {result.map((product) => {
            return <li key={product.id}>{product.title}</li>
          })}
        </ul>
      )}
    </div>
  )
}

/*
Improvements : 

1. Accessibility Improvements:
 =>
  <label htmlFor="search-query">Search Products:</label>
  <input
  id="search-query"
  type="text"
  value={query}
  onChange={(e) => setQuery(e.target.value)}
  aria-describedby="search-query-description"
  />
  <p id="search-query-description">Search for products by name.</p>

=> You can use aria-live to announce dynamic content changes like loading or errors.
  <div aria-live="polite">
    {status === STATE.ERROR && <p>Error found</p>}
    {status === STATE.LOADING && <p>Loading data...</p>}
  </div>

2. Scalablity Improvements:
=> debouncing instead of setTimeout
=> Infinite loading, paginated loading (if necessary)

3. Modularity Improvements:
=> create custom hooks:
  // useFetchProducts.js
    import { useState, useEffect, useRef } from 'react';
    const useFetchProducts = (query) => {
      const [products, setProducts] = useState([]);
      const [status, setStatus] = useState();
      const cache = useRef({});

      useEffect(() => {
        const abortController = new AbortController();
        const { signal } = abortController;

        async function fetchData() {
          try {
            setStatus(STATE.LOADING);
            if (cache.current[query]) {
              setProducts(cache.current[query]);
              setStatus(STATE.SUCCESS);
              return;
            }

            const res = await fetch(
              `https://dummyjson.com/products/search?q=${query}&limit=10`,
              { signal }
            );
            const result = await res.json();
            setProducts(result.products);
            cache.current[query] = result.products;
            setStatus(STATE.SUCCESS);
          } catch (error) {
            if (error.name !== 'AbortError') setStatus(STATE.ERROR);
          }
        }

        let timer = setTimeout(() => fetchData(), 1000);

        return () => {
          clearTimeout(timer);
          abortController.abort();
        };
      }, [query]);

      return { products, status };
    };

    // App.js
    const { products, status } = useFetchProducts(query);

4. Performance Improvements:
=> Error handling & response validation:
    if (result && result.products) {
      setProducts(result.products);
      cache.current[query] = result.products;
    } else {
      setStatus(STATE.ERROR);
    }
=> avoid expensive re-renderings:
  const productItems = useMemo(() => {
    return products.map((product) => (
      <li key={product.key}>{product.title}</li>
    ));
  }, [products]);

  return <ul>{productItems}</ul>;

5. Error boundaries


*/
