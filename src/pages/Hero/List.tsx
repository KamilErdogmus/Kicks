import { useQuery } from "@tanstack/react-query";
import { getShoes } from "../../Utils";
import Error from "../../components/Error";
import Card from "../../components/Card";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { shoes } from "../../types";
import Loader from "../../components/Loader/index";
import { useSearchParams } from "react-router-dom";
import formatParams from "../../Utils/FormatParams";

const itemsPerPage = 9;

const List = () => {
  const [params, setParams] = useSearchParams();
  const paramsObj = Object.fromEntries(params.entries());
  const paramsStr = formatParams(paramsObj);

  const [itemOffset] = useState(0);
  const [pageRange, setPageRange] = useState(3);
  const [prevLabel, setPrevLabel] = useState("< PREVIOUS");
  const [nextLabel, setNextLabel] = useState("NEXT >");

  const useMediaQuery = (query: string) => {
    return window.matchMedia(query).matches;
  };

  useEffect(() => {
    const handleResize = () => {
      const isLargeScreen = useMediaQuery("(min-width: 1024px)");
      const isMediumScreen = useMediaQuery(
        "(min-width: 768px) and (max-width: 1023px)"
      );

      if (isLargeScreen) {
        setPageRange(3);
        setPrevLabel("< PREVIOUS");
        setNextLabel("NEXT >");
      } else if (isMediumScreen) {
        setPageRange(3);
        setPrevLabel("<");
        setNextLabel(">");
      } else {
        setPageRange(1);
        setPrevLabel("<");
        setNextLabel(">");
      }
    };
    //* Component mount olduğunda bir kere çalıştır
    handleResize();
    //! Ekran boyutu değiştiğinde çalıştır
    window.addEventListener("resize", handleResize);
    return () => {
      //? Component unmount olduğunda event listener'ı kaldır
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { isLoading, error, data } = useQuery<shoes[]>({
    queryKey: ["shoes", paramsStr],
    queryFn: () => getShoes(paramsStr),
  });

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = data?.slice(itemOffset, endOffset);

  return (
    <div className="col-span-4 lg:col-span-3">
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : data?.length === 0 ? (
        <p>No products were found that match your criteria.</p>
      ) : (
        <div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-6">
            {currentItems?.map((item) => (
              <Card key={item.id} shoe={item} />
            ))}
          </div>
          <ReactPaginate
            className="flex items-center justify-center gap-4 text-[14px] md:text-sm mt-16 mb-[52px] md:mt-6 md:mb-6"
            pageClassName="border text-gray-dark h-[32px] w-[32px] grid place-content-center rounded-[8px] border-gray-dark  hover:bg-yellow"
            breakLabel="..."
            nextLabel={nextLabel}
            nextClassName="px-4 py-[7.5px] border rounded-[8px] w-[124px] h-[32px] grid place-content-center font-medium tracking-[0.25px] border-gray-dark hover:bg-yellow max-md:w-[48px] max-md:h-[32px]"
            pageRangeDisplayed={pageRange}
            pageCount={10}
            previousLabel={prevLabel}
            previousClassName="px-4 py-[7.5px] border rounded-[8px] w-[124px] h-[32px] grid place-content-center font-medium tracking-[0.25px] border-gray-dark hover:bg-yellow max-md:w-[48px] max-md:h-[32px]"
            renderOnZeroPageCount={null}
            containerClassName="pagination border"
            activeClassName="active text-white bg-gray-dark hover:bg-gray-dark"
            forcePage={1}
            marginPagesDisplayed={1}
          />
        </div>
      )}
    </div>
  );
};

export default List;
