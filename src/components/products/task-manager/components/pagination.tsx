import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Dispatch, SetStateAction } from 'react';
import { TypeOfSatatusInterface } from './status';
interface params {
    filter: Array<'macro' | 'micro' | 'inProject' | 'notInProject'>;
    status: keyof TypeOfSatatusInterface | 'all';
    sort: 'a-z' | 'z-a' | 'latest' | 'oldest';
    page: number;
    search?: string;
}
function Pagination({
    pageCountInit = 0,
    state,
}: {
    pageCountInit: number;
    state: { setParams: Dispatch<SetStateAction<params>>; params: params };
}) {
    console.log(pageCountInit);
    const handlePageClick = (event: any) => {
        state.setParams((prev) => ({ ...prev, page: event.selected + 1 }));
    };
    return (
        <>
            <ReactPaginate
                forcePage={Number(state.params.page) - 1}
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={2}
                marginPagesDisplayed={1}
                pageCount={pageCountInit}
                previousLabel="<"
                pageClassName="bg-cooler rounded w-8 text-center w-8 leading-8"
                pageLinkClassName="page-link"
                previousClassName="bg-cooler rounded w-8 text-center w-8 leading-8"
                previousLinkClassName="page-link"
                nextClassName="bg-cooler rounded w-8 text-center w-8 leading-8"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="bg-cooler rounded w-8 text-center w-8 leading-8"
                breakLinkClassName="page-link"
                containerClassName="flex justify-center space-x-1 my-4"
                activeClassName="bg-green-500 "
                renderOnZeroPageCount={null}
            />
        </>
    );
}

export default Pagination;
