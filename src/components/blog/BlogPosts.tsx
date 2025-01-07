import { useWordPressPosts } from '@/hooks/useWordPressPosts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

const BlogPosts = () => {
  const { data: posts, isLoading, error } = useWordPressPosts();

  if (isLoading) return <div>Cargando posts...</div>;
  if (error) return <div>Error al cargar los posts</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {posts?.map((post) => (
        <Card key={post.id} className="hover:shadow-lg transition-shadow">
          {post._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
            <img
              src={post._embedded['wp:featuredmedia'][0].source_url}
              alt={post.title.rendered}
              className="w-full h-48 object-cover"
            />
          )}
          <CardHeader>
            <CardTitle 
              className="text-xl font-semibold"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />
            <p className="text-sm text-gray-500">
              {format(new Date(post.date), 'dd MMMM yyyy', { locale: es })}
            </p>
          </CardHeader>
          <CardContent>
            <div
              className="prose prose-sm"
              dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
            />
            <a
              href={`/blog/${post.slug}`}
              className="text-primary hover:text-primary/90 mt-4 inline-block"
            >
              Leer más →
            </a>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default BlogPosts;