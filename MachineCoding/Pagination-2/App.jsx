import { useEffect, useState } from "react";
import "./styles.css";

const PAGE_SIZE = 6;

export default function App() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  function fetchData() {
    fetch("https://dummyjson.com/products?limit=500")
      .then((res) => res.json())
      .then((res) => setProducts(res.products));
  }

  useEffect(() => {
    fetchData();
  }, []);

  const noOfPages = Math.ceil(products.length / PAGE_SIZE);
  let paginationArr = Array.from({ length: noOfPages }, (_, idx) => idx + 1);
  const start = (currentPage - 1) * PAGE_SIZE;
  let end = start + PAGE_SIZE;

  return (
    <div className="App">
      Pagination
      <div className="container">
        <div className="pagination-container">
          {currentPage > 1 && (
            <button
              className="page-btn"
              onClick={() => setCurrentPage((prev) => prev - 1)}
            >
              {"<"}
            </button>
          )}

          {paginationArr.map((value) => (
            <button
              onClick={() => setCurrentPage(value)}
              className={value === currentPage ? "page-btn active" : "page-btn"}
            >
              {value}
            </button>
          ))}

          {currentPage !== noOfPages && (
            <button
              className="page-btn"
              onClick={() => setCurrentPage((prev) => prev + 1)}
            >
              {">"}
            </button>
          )}
        </div>
        <div className="card-container">
          {products.slice(start, end).map((elem, idx) => (
            <div className="card">
              <img src={elem.thumbnail} alt={elem.title} />
              <h5>{elem.title}</h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
