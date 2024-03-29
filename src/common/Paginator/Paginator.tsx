import React, {useState} from "react";
import classes from './Paginator.module.css'
import cn from "classnames";

type PropsType = {
    onPageChanges: (pageNumber: number) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
     portionSize: number
}

export const Paginator = ({
                              onPageChanges,
                              currentPage,
                              pageSize,
                              totalUsersCount,
                              portionSize=10
                          }: PropsType) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }


     let portionCount = Math.ceil(pagesCount / portionSize);
     let [portionNumber, setPortionNumber] = useState(1);
     let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
     let rightPortionPageNumber = portionNumber * portionSize;

    return (

        <div className={classes.paginator}>
            {
                portionNumber > 1 &&
                <button onClick={() => {
                    setPortionNumber(portionNumber - 1)
                }}>PREV</button>
            }

            {pages
               .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((el, index) => {
                    return (
                        <span className={ cn({
                            [classes.selectedPage]: currentPage === el
                        }, classes.pageNumber) }
                              key={el}
                              onClick={(e) => {
                                  onPageChanges(el);
                              }}>{el}</span>
                    )
                })}
            {
                portionCount > portionNumber &&
                <button onClick={() => {
                    setPortionNumber(portionNumber + 1)
                }}>NEXT</button>
            }
        </div>
    )
}