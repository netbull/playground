import {useState} from 'react';
import update from 'immutability-helper';
import data from './assets/generated.json';
import { Row } from './Row';

function App() {
    const [values, setValues] = useState(data);

    const handleChange = (i, e) => {
        setValues(prev => update(prev, {
            [i]: {
                requestedAmount: {
                    $set: e.target.value,
                }
            },
        }));
    }

    return (
        <div className="mx-20">
            <div className="flex flex-row gap-2">
                <div className="flex grow items-center justify-center">Filters</div>
                <div className="flex grow items-center justify-center">Groupers</div>
            </div>

            <table className="w-full mt-5" border="1">
                <thead>
                <tr>
                    <th>Hotel</th>
                    <th>Unit</th>
                    <th>Board</th>
                    <th>Date from</th>
                    <th>Date to</th>
                    <th>Booked at</th>
                    <th>Amount</th>
                    <th>Requested amount</th>
                </tr>
                </thead>

                <tbody>
                    {values.map((item, i) => (
                        <Row key={`item-${item.id}`} item={item} index={i} onChange={handleChange} />
                    ))}
                </tbody>

                <tfoot>
                    <tr>
                        <td colSpan={7} />
                        <td className="text-center">
                            <button className="bg-blue-500 text-white px-3 py-2 rounded-md w-full" onClick={() => console.log('great!')}>Submit</button>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}

export default App
