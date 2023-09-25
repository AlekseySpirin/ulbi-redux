import React from 'react';
import { useTable } from 'react-table';

const MyTable = () => {
	const data = [
		{ name: 'John', age: 25, city: 'New York' },
		{ name: 'Alice', age: 32, city: 'San Francisco' },
		{ name: 'Bob', age: 41, city: 'Chicago' },
	];
	
	const columns = [
		{ Header: 'Name', accessor: 'name' },
		{ Header: 'Age', accessor: 'age' },
		{ Header: 'City', accessor: 'city' },
	];
	
	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
	} = useTable({ columns, data });
	
	return (
		<table {...getTableProps()}>
			<thead>
			{headerGroups.map(headerGroup => (
				<tr {...headerGroup.getHeaderGroupProps()}>
					{headerGroup.headers.map(column => (
						<th {...column.getHeaderProps()}>{column.render('Header')}</th>
					))}
				</tr>
			))}
			</thead>
			<tbody {...getTableBodyProps()}>
			{rows.map(row => {
				prepareRow(row);
				return (
					<tr {...row.getRowProps()}>
						{row.cells.map(cell => (
							<td {...cell.getCellProps()}>{cell.render('Cell')}</td>
						))}
					</tr>
				);
			})}
			</tbody>
		</table>
	);
};

export default MyTable;
