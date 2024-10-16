import { useQuery } from "convex/react"
import { api } from "../../../../convex/_generated/api"

export const useCurrentUser = () => {
    const data = useQuery(api.users.current);
    const isLooding = data === undefined;
    return { data, isLooding };
}