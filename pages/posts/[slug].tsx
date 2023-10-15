/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { getPostBySlug, getPostSlugs } from '../../lib/api';
import Layout from '../../components/Layout';
import markdownToHtml from '../../lib/markdownToHtml';
import Markdown from 'react-markdown';

type Post = {
    title: string;
    date: string;
    author: string;
    coverImage: string;
    excerpt: string;
    content: string;
};

type Props = {
    post: Post;
};

const P = ({ children }: { children: any }) => <p className="prose md:text-xl text-lg">{children}</p>
const H2 = ({ children }: { children: any }) => <h2 className="prose text-gray-200 text-2xl font-semibold">{children}</h2>
const H3 = ({ children }: { children: any }) => <h3 className="prose text-gray-200 text-xl font-semibold">{children}</h3>

const PostPage = ({ post }: Props) => {
    const { title, date, author, coverImage, excerpt } = post;

    return (
        <Layout>
            <article className="my-16 sm:my-32 max-w-3xl mx-auto px-2 md:px-0">
                <div className="space-y-4">
                    <h1>{title}</h1>
                    <p className='text-xl'>{excerpt}</p>
                    <figure className="relative">
                        <img
                            src={coverImage}
                            alt="blog cover image"
                            className="object-cover h-96 w-full md:rounded-lg"
                        />
                    </figure>
                </div>
                <div className="mt-8 lg:mt-20">
                    <Markdown
                        components={{
                            p: P,
                            h2: H2,
                            h3: H3
                        }}

                        className="prose space-y-4">
                        {post.content}
                    </Markdown>
                </div>
            </article>
        </Layout>
    );
};

export default PostPage;

export const getStaticProps = async ({ params: { slug } }: { params: { slug: string } }) => {
    const post = getPostBySlug(slug, [
        'title',
        'date',
        'author',
        'coverImage',
        'excerpt',
        'id',
        'content',
    ]);

    return {
        props: { post },
    };
};

export const getStaticPaths = async () => {
    const slugs = getPostSlugs();

    const paths = slugs.map((rawSlug) => {
        let [slug] = rawSlug.split('.');
        return {
            params: { slug },
        };
    });

    return {
        paths,
        fallback: false,
    };
};
