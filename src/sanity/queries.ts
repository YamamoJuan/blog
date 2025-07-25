export const postsQuery = `*[_type == "post"]{
    _id,
    title,
    slug,
    mainImage,
    publishedAt
  } | order(publishedAt desc)`
  