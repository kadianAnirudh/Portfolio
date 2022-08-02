import sanityClient from '@sanity/client'
// import imageUrlBuilder from '@sanity/image-url';
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
    projectId : '49ryvzs9',
    dataset : 'production',
    apiVersion : '2022-02-01',
    useCdn: true,
    token: process.env.REACT_SANITY_API
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);