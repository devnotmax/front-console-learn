import React from 'react';
import reseñasMock from '@/Mocks/ReviewMocks';


const UserReview: React.FC = () => {
    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }, (_, index) => (
            <span key={index} className={`text-yellow-500 ${index < rating ? 'fill-current' : 'text-gray-300'}`}>
                ★
            </span>
        ));
    };
    return (
        <div className="space-y-6 ">
            <h2 className="text-xl font-bold">Reseñas de Usuarios</h2>
            <div className='grid grid-cols-3 gap-4 p-6'>
                {reseñasMock.map((review) => (
                <div key={review.id} className="p-4 bg-gray-100 rounded-xl border-gray-300 border shadow-md flex items-center">
                <img src={review.user.image} alt={review.user.name} className="w-12 h-12 rounded-full mr-4" />
                <div>
                    <h3 className="text-lg font-semibold">{review.user.name}</h3>
                    <p className="text-gray-700 mt-2">{review.content}</p>
                    <div className="flex mt-1">
                        {renderStars(review.rating)}
                    </div>
                </div>
                </div>
                
            ))}
            </div>
            </div>
        );
};

export default UserReview;