import { fetchMyProfile } from "../../api/home";
import { UserMbtiProfile } from "../../types/profile";
import { useSuspenseQuery } from "@tanstack/react-query";

export const useMyProfileQuery = () => {
  return useSuspenseQuery<UserMbtiProfile>({
    queryKey: ["MyProfile"],
    queryFn: fetchMyProfile,
    retry: false,
  });
};
