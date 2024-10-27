
const ProfileOrders = () => {
    const orders = [
        { id: 1, course: 'Curso 1', date: '2022-01-01', price: '$10.00', status: 'Pendiente' },
        { id: 2, course: 'Curso 2', date: '2022-02-01', price: '$20.00', status: 'Completado' },
        { id: 3, course: 'Curso 3', date: '2022-03-01', price: '$30.00', status: 'Anulado' },
    ]
return (
    <div className="bg-[var(--card-color)] p-4 rounded-lg">
    <h3 className="text-lg font-medium mb-4 text-[var(--principal-text)]">Order History</h3>
    <table className="w-full text-left">
        <thead>
        <tr>
            <th className="p-2 text-[var(--secondary-text)]">Nº Order</th>
            <th className="p-2 text-[var(--secondary-text)]">Course</th>
            <th className="p-2 text-[var(--secondary-text)]">Date</th>
            <th className="p-2 text-[var(--secondary-text)]">Price</th>
            <th className="p-2 text-[var(--secondary-text)]">Status</th>
        </tr>
        </thead>
        <tbody>
        {orders.map((order) => (
            <tr key={order.id}>
            <td className="p-2 text-[var(--primary)]">{order.id}</td>
            <td className="p-2 text-[var(--primary)]">{order.course}</td>
            <td className="p-2 text-[var(--primary)]">{order.date}</td>
            <td className="p-2 text-[var(--primary)]">{order.price}</td>
            <td className="p-2">
                <span className="px-2 py-1 bg-green-500 text-xs text-[var(--principal-text)] rounded">{order.status}</span>
            </td>
            <td className="p-2">
                <button className="px-3 py-1 text-xs bg-[var(--accent-color)] text-[var(--principal-text)] rounded">View Details</button>
            </td>
            </tr>
        ))}
        </tbody>
    </table>
    </div>
);
};
export default ProfileOrders;
