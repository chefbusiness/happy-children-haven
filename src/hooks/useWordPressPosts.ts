import { useQuery } from '@tanstack/react-query';
import { fetchPosts, fetchPost, fetchPostsByCategory } from '@/services/wordpressService';

export const useWordPressPosts = () => {
  return useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });
};

export const useWordPressPost = (slug: string) => {
  return useQuery({
    queryKey: ['post', slug],
    queryFn: () => fetchPost(slug),
    enabled: !!slug,
  });
};

export const useWordPressPostsByCategory = (categoryId: number) => {
  return useQuery({
    queryKey: ['posts', categoryId],
    queryFn: () => fetchPostsByCategory(categoryId),
    enabled: !!categoryId,
  });
};