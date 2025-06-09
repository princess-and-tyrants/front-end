import { useSuspenseQuery } from "@tanstack/react-query";
import { fetchUserProfile } from "../../api/home";
import { UserMbtiProfile } from "@/types/profile";

export const useUserProfileQuery = (userId: string) => {
  return useSuspenseQuery<UserMbtiProfile>({
    queryKey: ["userProfile", userId],
    queryFn: () => fetchUserProfile(userId),
  });
};
