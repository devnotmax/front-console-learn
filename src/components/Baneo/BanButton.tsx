import { BanStatus } from "@/services/BanedService";
import { useState } from "react";

interface BanButtonProps {
  userId: string;
  currentStatus: boolean;
  role: string;
  onBanStatusChange: (userId: string, newStatus: boolean) => void; // Nueva prop
}

const BanButton: React.FC<BanButtonProps> = ({ userId, currentStatus, role, onBanStatusChange }) => {
  const [isBanned, setIsBanned] = useState(currentStatus);

  const handleBanToggle = async () => {
    if (role !== 'ADMIN') return; 
    try {
      await BanStatus(userId, !isBanned);
      setIsBanned(!isBanned);
      onBanStatusChange(userId, !isBanned); // Notificar al padre
    } catch (error) {
      console.error('Error al actualizar el estado de baneo:', error);
    }
  };

  return (
    <button
      onClick={handleBanToggle}
      className={`px-2 py-1 rounded text-sm ${isBanned ? 'bg-red-500' : 'bg-green-500'} text-white`}
    >
      {isBanned ? 'Desbanear' : 'Banear'}
    </button>
  );
};

export default BanButton;
