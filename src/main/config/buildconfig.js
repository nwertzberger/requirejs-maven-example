({
    modules: [
        {
            name: "main"
        }
    ],
    appDir: "${basedir}/src/main/js/",
    baseUrl: "./",
    dir: "${project.build.directory}/${project.build.finalName}/js",
    optimize: "none"
})