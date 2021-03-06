module.exports ={
    mode: "development",
    entry: "./src/index.tsx",
    output: {
    filename: "bundle.js",
    path: __dirname + "/dist"
    },
    devtool: "source-map",
    resolve: {
        extensions: [".ts",".js",".tsx", ".json"],
    },

    module:{
        rules:[
            {
                test:/\.tsx?$/,
                 loader:"ts-loader",
            },
            {enforce: "pre", 
            test: /\.js$/, loader:"source-map-loader",
        }
        ]
    }
}
