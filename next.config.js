const withMDX = require("@next/mdx")()
 
/** @type {import("next").NextConfig} */
const nextConfig = {
  transpilePackages: ["geist"],
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
}
 
module.exports = withMDX(nextConfig)