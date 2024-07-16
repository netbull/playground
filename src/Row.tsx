import React from 'react';

export function Row(props) {
    const { item, index, onChange } = props;

    return (
        <tr key={`item-${item.id}`}>
            <td className="text-center">{item.hotel}</td>
            <td className="text-center">{item.unit}</td>
            <td className="text-center">{item.board}</td>
            <td className="text-center">{item.dateFrom}</td>
            <td className="text-center">{item.dateTo}</td>
            <td className="text-center">{item.bookedAt}</td>
            <td className="text-center">{item.amount}</td>
            <td className="text-center">
                <input
                    className="border rounded-md w-full"
                    type="text"
                    value={item.requestedAmount ?? ''}
                    onChange={(e) => onChange(index, e)}
                />
            </td>
        </tr>
    );
}
