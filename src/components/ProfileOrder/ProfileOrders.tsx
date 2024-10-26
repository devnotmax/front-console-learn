
const ProfileOrders = () => {
    const orders = [
        { id: '#001', course: 'Introducción a React', date: '23-04-2022', price: '$130', status: 'pagado' },
    ];

return (
    <div className="bg-[var(--card-color)] p-4 rounded-lg">
    <h3 className="text-lg font-medium mb-4 text-[var(--principal-text)]">Órdenes Recientes</h3>
    <table className="w-full text-left">
        <thead>
        <tr>
            <th className="p-2 text-[var(--secondary-text)]">Nº de orden</th>
            <th className="p-2 text-[var(--secondary-text)]">Curso</th>
            <th className="p-2 text-[var(--secondary-text)]">Fecha</th>
            <th className="p-2 text-[var(--secondary-text)]">Precio</th>
            <th className="p-2 text-[var(--secondary-text)]">Estado</th>
        </tr>
        </thead>
        <tbody>
        {orders.map((order) => (
            <tr key={order.id}>
            <td className="p-2 text-[var(--primary)]">{order.id}</td>
            <td className="p-2 text-[var(--primary)]">{order.course}</td>
            <td className="p-2 text-[var(--primary)]">{order.date}</td>
            <td className="p-2 text-[var(--primary)]">{order.price}</td>
            <td className="p-2 text-[var(--primary)]">
                <span className="px-2 py-1 bg-green-500 text-xs text-[var(--principal-text)] rounded">pagado</span>
            </td>
            <td className="p-2">
                <button className="px-3 py-1 text-xs bg-[var(--accent-color)] text-[var(--principal-text)] rounded">ver detalle</button>
            </td>
            </tr>
        ))}
        </tbody>
    </table>
    </div>
);
};
export default ProfileOrders;
