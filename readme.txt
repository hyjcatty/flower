Please install the Node.js v5.1.0 or higher (higher than 6.0 is not recommended).
IF your environment have not install the gulp & webpack, u neek install them first:
npm install gulp -g
npm install webpack -g

Then add your npm node path into System PATH, and keep command "gulp" & "webpack" can run everywhere.

Change your work DIR to source folder.
Keep your internet link fluent, or you can use the set the npm mirror in your country.
1) Prepare the environment for node_modules, command:
npm install --save-dev
2) for debug the code, use command:
npm run start
then open the browser and go to webside: http://127.0.0.1:8080/webpack-dev-server/
u can get the debug version of code
2) build the source, command:
npm run build
Note: this version will include the source-map.

Directory structure:
----+-build         // save the js & resource file after they are built
    +-css           // 3rd css code which will be compiled
    +-dist          // save the final deliver files
    +-fonts         // font resource which will be compiled
    +-node_modules  // Node.js plugin folder, all dependence will be save in it after npm install
    +-src           // source folder
    +-vendor        // 3rd recource folder which will not be compiled
    --gulpfile.js   // gulp command configuration, not use yet
    --index.html    // entry of the UI, will be compiled
    --package.json  // npm configuration file
    --readme.ext    // help fil
    --request.php   // php entry for Apache&PHP environment
    --webpack.config.js //webpack configuration file


.
