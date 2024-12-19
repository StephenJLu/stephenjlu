import React from 'react';
import styles from './table.module.css';

interface TableProps {
  children: React.ReactNode;
  [key: string]: any;
}

export const Table: React.FC<TableProps> = ({ children, ...rest }) => (
  <table className={styles.table} {...rest}>
    {children}
  </table>
);

export const TableRow: React.FC<TableProps> = ({ children, ...rest }) => (
  <tr className={styles.row} {...rest}>
    {children}
  </tr>
);

export const TableHead: React.FC<TableProps> = ({ children, ...rest }) => (
  <thead className={styles.head} {...rest}>
    {children}
  </thead>
);

export const TableBody: React.FC<TableProps> = ({ children, ...rest }) => (
  <tbody className={styles.body} {...rest}>
    {children}
  </tbody>
);

export const TableHeadCell: React.FC<TableProps> = ({ children, ...rest }) => (
  <th className={styles.headCell} {...rest}>
    {children}
  </th>
);

export const TableCell: React.FC<TableProps> = ({ children, ...rest }) => (
  <td className={styles.cell} {...rest}>
    {children}
  </td>
);