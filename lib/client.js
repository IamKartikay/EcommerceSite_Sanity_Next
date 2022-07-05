import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "y7fcn6rw",
  dataset: "production",
  apiVersion: "2022-06-28",
  useCdn: "true",
  token:
    "skM5CjhSPSI4ul8zEPdGCdI4PQ3Ze8IhPMSsB4YTueVleSY1Ecdq8HXDDXd4K8oy6A3xkhXDE2hRIdVVUdOirc0VRhuoratG3v1bTA4ujROocgLleioDGnWKRneq73fTdwpLpHg2OrtRYNhCFGHwNFyi5DvyhjC5d236a8YRfjG2bIMXbGxF",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
