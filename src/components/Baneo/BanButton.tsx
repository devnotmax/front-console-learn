import { BanStatus, BanedFalse} from "@/services/BanedService";
import { useState } from "react";

interface BanButtonProps {
  userId: string;
  currentStatus: boolean;
  role: string;
  onBanStatusChange: (userId: string, newStatus: boolean) => void;
}

const BanButton: React.FC<BanButtonProps> = ({ userId, currentStatus, role, onBanStatusChange }) => {
  const [isBanned, setIsBanned] = useState(currentStatus);
  const [loading, setLoading] = useState(false); // Estado para manejar el loading

  const handleBanToggle = async () => {
    if (role !== "ADMIN") return;
    setLoading(true); // Inicia el estado de carga

    try {
      if (isBanned) {
        // Llama al servicio para desbanear (BanedFalse)
        await BanedFalse(userId, false);
      } else {
        // Llama al servicio para banear (BanStatus)
        await BanStatus(userId, true);
      }

      // Actualiza el estado local y notifica al componente padre
      setIsBanned(!isBanned);
      onBanStatusChange(userId, !isBanned);
    } catch (error) {
      console.error("Error updating ban status:", error);
    } finally {
      setLoading(false); // Finaliza el estado de carga
    }
  };

  return (
    <button
      onClick={handleBanToggle}
      disabled={loading} // Deshabilita el botón mientras está en loading
      className={`px-2 py-1 rounded text-sm ${isBanned ? "bg-red-500" : "bg-green-500"} text-white`}
    >
      {loading ? "Processing..." : isBanned ? "Unban" : "Ban"}
    </button>
  );
};

export default BanButton;
