import { useEffect, useState } from "react";

const ITEMS_PER_PAGES = 10;
const PAGES_PER_SECTIONS = 10;

const usePagination = <T>() => {

    // state: 페이지네이션 관련 상태 //
    const [totalList, setTotalList] = useState<T[]>([]); // 전체 리스트
    const [totalPage, setTotalPage] = useState<number>(0); // 토탈카운트로 연산한 전체 페이지 수 
    const [totalSection, setTotalSection] = useState<number>(0); // 토탈페이지를 기준으로 연산을 한 토탈 섹션 
    const [currentPage, setCurrentPage] = useState<number>(0); // 위치하고 있는 현재 페이지
    const [currentSection, setCurrentSection] = useState<number>(0);
    const [viewList, setViewList] = useState<T[]>([]); // 최대 10개 까지 저장되는 리스트
    const [pageList, setPageList] = useState<number[]>([]); 

    // function: 전체 리스트 변경 함수 //
    const init =  (totalList: T[]) => {
        const totalCount = totalList.length;
        const totalPage = Math.ceil(totalCount / ITEMS_PER_PAGES); 
        setTotalPage(totalPage);
        const totalSection = Math.ceil(totalPage / PAGES_PER_SECTIONS);
        setTotalSection(totalSection)
    
        setCurrentPage(1);
        setCurrentSection(1);
    };
    
    // function: 뷰 리스트 변경 함수 //
    const initViewList = (totalList: T[]) => {
        const totalCount = totalList.length;
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGES
        const endIndex = currentPage * ITEMS_PER_PAGES > totalCount ? totalCount : currentPage * ITEMS_PER_PAGES;
        const viewList: T[] = totalList.slice(startIndex, endIndex);
        setViewList(viewList);
    };
    
    // function: 페이지 리스트 변경 함수 //
    const initPageList = (totalPage: number) => {
        const startPage = PAGES_PER_SECTIONS * currentSection - (PAGES_PER_SECTIONS - 1);
        const endPage = PAGES_PER_SECTIONS * currentSection > totalPage ? totalPage : PAGES_PER_SECTIONS  * currentSection;
        const pageList = [];
        for(let page = startPage; page <= endPage; page++) pageList.push(page);
        setPageList(pageList);
    };

    // effect: 전체 리스트가 변경되면 실행할 함수 //
    useEffect(() => {
        if(totalList.length) init(totalList);
    }, [totalList]);

    // effect: 현재 페이지가 변경되면 실행할 함수 //
    useEffect(() => {
        if(currentPage) initViewList(totalList)
    }, [currentPage]);

    // effect: 현재 섹션이 변경되면 실행할 함수 //
    useEffect(() => {
        if(totalPage) initPageList(totalPage);
    }, [totalPage ,currentSection]);

    return {
        currentPage, setCurrentPage,
        currentSection, setCurrentSection,
        totalSection,
        setTotalList,
        viewList, pageList
    }
};

export default usePagination;