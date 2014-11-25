module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        yaml: {
            your_target: {
                options: {
                    middleware: function(response, json, src, dest) {
                        console.log(response); // YAML data
                        console.log(json); // Stringified JSON
                        console.log(src); // Source file path
                        console.log(dest); // Destination file path
                    },
                    space: 4
                },
                files: {
                    'test.json': ['test.yml']
                }
            },
        },
    })
    // Load the plugin that provides the "yaml" task.
    grunt.loadNpmTasks('grunt-yaml');

    // Default task.
    grunt.registerTask('default', ['yaml']);

};