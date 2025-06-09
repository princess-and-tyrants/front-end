import { useQuery } from "@tanstack/react-query";
import { fetchMyProfile } from "@/api/home";
import { UserMbtiProfile } from "@/types/profile";

export const useMyProfileQuery = (isLoggedIn: boolean) => {
  return useQuery<UserMbtiProfile>({
    queryKey: ["MyProfile"],
    queryFn: fetchMyProfile,
    retry: false,
    enabled: isLoggedIn,
  });
};
