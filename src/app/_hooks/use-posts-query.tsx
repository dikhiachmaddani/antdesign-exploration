import axiosInstance from "@/libs/axios-instance";
import { PostResponse } from "@/types/post-response";
import { useQuery } from "@tanstack/react-query";

export function usePosts() {
	return useQuery({
		queryKey: ["posts"],
		queryFn: async () => {
			const { data } = await axiosInstance.get<PostResponse[]>(`/posts`);
			return data;
		},
	});
}

export function usePostById(id: string) {
	return useQuery({
		queryKey: ["posts", id],
		queryFn: async () => {
			const { data } = await axiosInstance.get<PostResponse>(`/posts/${id}`);
			return data;
		},
	});
}
