import axios from 'axios';
import { WP_API_URL, WordPressPost } from '@/config/wordpress';

export const fetchPosts = async (): Promise<WordPressPost[]> => {
  const response = await axios.get(`${WP_API_URL}/posts?_embed`);
  return response.data;
};

export const fetchPost = async (slug: string): Promise<WordPressPost> => {
  const response = await axios.get(`${WP_API_URL}/posts?slug=${slug}&_embed`);
  return response.data[0];
};

export const fetchPostsByCategory = async (categoryId: number): Promise<WordPressPost[]> => {
  const response = await axios.get(`${WP_API_URL}/posts?categories=${categoryId}&_embed`);
  return response.data;
};