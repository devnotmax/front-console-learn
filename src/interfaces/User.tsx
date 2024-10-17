interface User {
    id: string;
    email: string;
    password: string;
    confirmPassword: string;
    name: string;
    image: string;
    role: string;
    termsAccepted: boolean;
    videos: any[];
    orders: any[];
    reviews: any[];
    subscription: any | null;
}
export default User;