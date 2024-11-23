import { useState, useEffect } from "react";
import axios from "axios";
import { auth } from "../../firebaseConfig";
import { baseURL } from "../../components/userIDConfig";

interface UserData {
    userID: string;
    username: string;
    name: string;
    surname: string;
    email: string;
    credit: number;
    phoneNumber: string;
    role: number;
}

const useUserData = () => {
    const [userData, setUserData] = useState<UserData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");
    
    useEffect(() => {
        const fetchUserData = async () => {
            const userUid = auth.currentUser?.uid;
            if (userUid) {
                try {
                    const response = await axios.get(`${baseURL}/customer/getEachUser/${userUid}`);
                    setUserData(response.data);
                } catch (error) {
                    setError("Error fetching user data.");
                    console.error("Error fetching user data:", error);
                } finally {
                    setLoading(false);
                }
            } else {
                setError("User UID is not available.");
                setLoading(false);
            }
        };

        fetchUserData();
    }, []); // Empty dependency array means this runs once after the component mounts

    return { userData, loading, error };
};

export default useUserData;