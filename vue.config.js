module.exports = {
    devServer: {
        https:false,
        proxy: "http://localhost:8080"
    },

    // note the "build" script in package.json needs to be modified as well.
    outputDir: "output",

    publicPath: "/",

    // modify the location of the generated HTML file.
    indexPath: "index.html"
};