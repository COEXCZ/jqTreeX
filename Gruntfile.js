module.exports = function(grunt) {

	grunt.initConfig({

        watch: {
            coffee: {
                files: ['src/js/{,*/}*.coffee'],
                tasks: ['coffee:compile']
            },
            compass: {
                files: ['src/css/{,*/}*.{scss,sass}'],
                tasks: ['compass:server']
            }
        },

		// Concat definitions
		concat: {
			dist: {
				src: ["src/jquery.treex.js"],
				dest: "dist/jquery.treex.js"
			}
		},

		// Lint definitions
		jshint: {
			files: ["src/jquery.treex.js"],
			options: {
				jshintrc: ".jshintrc"
			}
		},

		// Minify definitions
		uglify: {
			my_target: {
				src: ["dist/jquery.treex.js"],
				dest: "dist/jquery.treex.min.js"
			}
		},

		// CoffeeScript compilation
		coffee: {
			compile: {
                options: {
                    join: true
                },
				files: {
					"dist/jquery.treex.js": ['src/js/simple.widget.coffee', 'src/js/mouse.widget.coffee', 'src/js/node.coffee',  'src/js/tree.jquery.coffee', 'src/js/save_state_handler.coffee', 'src/js/select_node_handler.coffee', 'src/js/drag_and_drop_handler.coffee', 'src/js/scroll_handler.coffee', 'src/js/key_handler.coffee']
				}
			}
		},

		compass: {
            options: {
                config: 'config.rb',
                bundleExec: true
            },
            dist: {},
            server: {
                options: {
                    debugInfo: true
                }
            }
        }

	});

	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-coffee");
	grunt.loadNpmTasks("grunt-contrib-compass");
	grunt.loadNpmTasks("grunt-contrib-watch");


	grunt.registerTask("default", ["jshint", "concat", "uglify", "watch"]);
	grunt.registerTask("travis", ["jshint"]);

};
