import React from "react";
import { Table, Pagination, Button, ButtonGroup } from "react-daisyui";

function DaisyUITable(props) {
  /***************************************************************************************/
  //Var
  /***************************************************************************************/
  const [page, setPage] = React.useState(1);
  const [sizePerPage, setSizePerPage] = React.useState(0);
  const [totalSize, setTotalSize] = React.useState(0);
  const [ready, setReady] = React.useState(false);

  /***************************************************************************************/
  //States
  /***************************************************************************************/

  /***************************************************************************************/
  //Callbacks
  /***************************************************************************************/

  React.useEffect(() => {
    setPage(props.page);
    setSizePerPage(props.sizePerPage);
    setTotalSize(props.totalSize);
    setReady(true);
  }, []);

  function paginationCol() {
    var totalPages = Math.ceil(props.totalSize / props.sizePerPage);

    const getButtons = () => {
      var pageArr = [];

      if (page === 1 || page === 2 || page === 3) {
        for (let i = 1; i <= 5; i++) {
          if (i <= totalPages) {
            pageArr.push(i);
          }
        }
      } else if (totalPages - page <= 2) {
        for (let i = 4; i >= 0; i--) {
          if (totalPages - i > 0) {
            pageArr.push(totalPages - i);
          }
        }
      } else {
        for (let i = -2; i <= 2; i++) {
          var value = page + i;
          if (value >= 1 || value <= totalPages) {
            pageArr.push(value);
          }
        }
      }

      return pageArr.map((value, pageIndex) => (
        <Button
          key={`predefined-pagination-${pageIndex}`}
          className={`${
            value === page ? "bg-slate-500" : ""
          } join-item text-black`}
          onClick={(e) => {
            props.onTableChange(value, sizePerPage);
            setPage(value);
          }}
        >
          {value}
        </Button>
      ));
    };

    return (
      <Pagination>
        <Button
          className="join-item text-black"
          disabled={page === 1}
          onClick={(e) => {
            props.onTableChange(1, sizePerPage);
            setPage(1);
          }}
        >
          {"<<"}
        </Button>
        <Button
          className="join-item text-black"
          disabled={page === 1}
          onClick={(e) => {
            props.onTableChange(page - 1, sizePerPage);
            setPage(page - 1);
          }}
        >
          {"<"}
        </Button>
        {getButtons()}
        <Button
          className="join-item text-black"
          disabled={page >= totalPages}
          onClick={(e) => {
            props.onTableChange(page + 1, sizePerPage);
            setPage(page + 1);
          }}
        >
          {">"}
        </Button>
        <Button
          className="join-item text-black"
          disabled={page === totalPages}
          onClick={(e) => {
            props.onTableChange(totalPages, sizePerPage);
            setPage(totalPages);
          }}
        >
          {">>"}
        </Button>
      </Pagination>
    );
  }

  function pageSizeCol() {
    var currentRow = (props.page - 1) * props.sizePerPage + 1;
    currentRow = props.totalSize < 1 ? 0 : currentRow;
    var currentRowMax =
      props.page * props.sizePerPage > props.totalSize
        ? props.totalSize
        : props.page * props.sizePerPage;
    var totalSize = props.totalSize;

    return (
      <label>
        Show
        {
          <select
            className="join-item mx-2 rounded-md border px-2 py-1"
            onChange={(e) => {
              setPage(1);
              setSizePerPage(parseInt(e.target.value));
              props.onTableChange(1, parseInt(e.target.value));
            }}
            value={props.sizePerPage}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
            <option value="200">200</option>
            <option value={totalSize}>All</option>
          </select>
        }
        entries. Showing rows {currentRow} to {currentRowMax} of {totalSize}
      </label>
    );
  }

  if (ready && props.columns.length) {
    return (
      <>
        <Table className="w-full">
          <Table.Head>
            {props.columns.map((column, i) => {
              return (
                <span
                  className="flex items-center justify-between"
                  key={`predefined-${column.dataField ?? ""}-${i}`}
                >
                  {column.text ?? ""}{" "}
                </span>
              );
            })}
          </Table.Head>
          <Table.Body>
            {props.data && props.data.length ? (
              props.data.map((rowData, rowIndex) => (
                <Table.Row key={`predefined-row-${rowIndex}`}>
                  {props.columns.map((column, colIndex) => (
                    <div
                      key={`predefined-${column.dataField ?? ""}-${colIndex}`}
                      style={column.style}
                      className="whitespace-normal"
                    >
                      {rowData[column.dataField ?? ""] ?? ""}
                    </div>
                  ))}
                </Table.Row>
              ))
            ) : (
              <></>
            )}
          </Table.Body>
        </Table>
        {props.pagination == null ? (
          <div className="flex w-full items-center justify-between border-t-[1px] border-t-gray-200 px-5 py-2">
            {pageSizeCol()}
            {paginationCol()}
          </div>
        ) : (
          <div />
        )}
      </>
    );
  }
}

export default DaisyUITable;
