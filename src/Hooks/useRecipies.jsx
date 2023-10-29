import { useQuery } from '@tanstack/react-query';


const useRecipies = () => {
    const {data, isLoading, error, isFetching, refetch} = useQuery({
        queryKey: ['services'], 
        queryFn: async () => {
            const data = await fetch('http://localhost:5000/services')
            return await data.json(); 
        }
    })
    return {data, isLoading, error, isFetching, refetch} ; 
};

export default useRecipies;

