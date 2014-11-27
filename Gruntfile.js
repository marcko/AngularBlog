module.exports= function(grunt){
  grunt.initConfig({ 
    connect:{
      server:{
        options:{
            hostname:'localhost',
            port:9000,
            keepalive: true
        }
      }
    }

  });
  grunt.loadNpmTasks('grunt-contrib-connect');
}