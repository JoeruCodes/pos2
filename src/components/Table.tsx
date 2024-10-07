import React from 'react'

const Table = ({headers, data}: {headers: string[], data: (string| number | boolean) [][]}) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
    <table className="min-w-full leading-normal min-h-full overflow-scroll">
      <thead>
        <tr>
            {headers.map((h, i) => {
                return (
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    {h}
                  </th>
                )
            })}
        </tr>
      </thead>
      <tbody>
        {data.map((d, i) => (
            d.map((r, j) => {
                return (
                  typeof r === "boolean" ?
                  <input key={i + j}type='checkbox' checked={r as boolean} disabled/> :
                  <td key={i + j} className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">{r}</p>
                </td>
                )
            })
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default Table