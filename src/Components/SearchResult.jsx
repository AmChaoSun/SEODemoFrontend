import React from 'react'
import styled from "styled-components";

const Table = styled.table`
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
`
const Td = styled.td`
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
`

const Th = styled.th`
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
`

function SearchResult(props){
    const{result, input, target, engine} = props;


    return(
        <Table>
        <thead>
            <tr>
                <Th>Input</Th>
                <Th>Target</Th>
                <Th>Engine</Th>
                <Th>Result</Th>
                <Th>Date</Th>
            </tr>
        </thead>
        <tbody>
            {result == null? <tr></tr>:<tr>
            <Td>{input}</Td>
            <Td>{target}</Td>
            <Td>{engine}</Td>
            <Td>{result}</Td>
            <Td>{new Date().toTimeString()}</Td>
            </tr>}
        </tbody>
      </Table>
    )
}

export default SearchResult;