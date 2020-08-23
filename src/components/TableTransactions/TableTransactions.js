import React from "react";
import { isMobile } from "react-device-detect";

import TableTransactionsMobile from "./TableTransactionsMobile/TableTransactionsMobile";
import TableTransactionsBrowser from "./TableTransactionsBrowser/TableTransactionsBrowser";

const TableTransactions = () => {
  return isMobile ? <TableTransactionsMobile /> : <TableTransactionsBrowser />;
};

export default TableTransactions;
