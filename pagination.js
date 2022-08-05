import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

export default function Page(props){
    const {countries} = props;
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 10;

    useEffect(() => {
      const endOffset = itemOffset + itemsPerPage;
      setCurrentItems(countries.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(countries.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, countries]);
  
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % countries.length;
      setItemOffset(newOffset);
    };
  
    return (
      <>
      <div className= "cunt">
        {currentItems.map(count =>{
            return(
                <div>
                    <p>{count.name}</p>
                </div>
            )
        })}
      </div>

      <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
        />
      </>
    );
}
