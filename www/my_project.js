"use strict"

// register the application module
b4w.register("my_project_main", function(exports, require) {

// import modules used by the app
var m_app       = require("app");
var m_cfg       = require("config");
var m_data      = require("data");
var m_preloader = require("preloader");
var m_ver = require("version");

var m_trans = require("transform");
var m_scenes = require("scenes");
var m_obj = require("objects");
var m_cam = require("camera");
var m_vec3 = require("vec3");
var m_input = require("input");
var m_mouse = require("mouse");

// detect application mode
var DEBUG = (m_ver.type() == "DEBUG");

// automatically detect assets path
var APP_ASSETS_PATH = m_cfg.get_assets_path("my_project");

/**
 * export the method to initialize the app (called at the bottom of this file)
 */
exports.init = function() {
    m_app.init({
        canvas_container_id: "main_canvas_container",
        callback: init_cb,
        show_fps: DEBUG,
        console_verbose: DEBUG,
        autoresize: true
    });
}

/**
 * callback executed when the app is initialized 
 */
function init_cb(canvas_elem, success) {

    if (!success) {
        console.log("b4w init failure");
        return;
    }

    m_preloader.create_preloader();

    // ignore right-click on the canvas element
    canvas_elem.oncontextmenu = function(e) {
        e.preventDefault();
        e.stopPropagation();
        return false;
    };

    load();
}

/**
 * load the scene data
 */
function load() {
    m_data.load(APP_ASSETS_PATH + "my_project.json", load_cb, preloader_cb);
}

/**
 * update the app's preloader
 */
function preloader_cb(percentage) {
    m_preloader.update_preloader(percentage);
}

/**
 * callback executed when the scene data is loaded
 */
function load_cb(data_id, success) {

    if (!success) {
        console.log("b4w load failure");
        return;
    }

    m_app.enable_camera_controls();

    // place your code here



    let x, y, z,n;  //request params
    let but = document.getElementById("buton"); //button on website
    but.addEventListener('click', () => connToServ());




    //sending a request to server



    function connToServ() {
        let num = document.getElementById("input_container").value; //getting rooms number here from the html form

        var xhr = new XMLHttpRequest();

        var ur = new URL('http://mycon/notAblender/databaseBackend.php');

        xhr.open("POST", ur, true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");  //encoding the request

        let RequestToPhp = "num=" + num;

        xhr.addEventListener("readystatechange", () => {

            if (xhr.readyState === 4 && xhr.status === 200) {
                ParseTheResponse(xhr.response);
            }
           
        })










        xhr.send(RequestToPhp);

    }

    //parsing an answer

    function ParseTheResponse(AnswStr) {
       // alert(AnswStr);
        var length = AnswStr.length;

        var begin = 0;
        var end = 0;
        var count = 1;

        for (let i = begin; i < length; i++) {
            if (AnswStr[i] == " ") {
                end = i;
                switch (count) {

                    case 1:
                        n = parseInt(AnswStr.substring(begin, end));
                       // alert(n);  //delete later
                        break;

                    case 2:
                        x = parseFloat(AnswStr.substring(begin, end));
                       // alert(x);//delete later
                        break;

                    case 3:
                        y = parseFloat(AnswStr.substring(begin, end));
                       // alert(y); //delete later
                        break;
                    case 4:
                        z = parseFloat(AnswStr.substring(begin, end));
                       // alert(z); //delete later
                        break;

                }

                begin = i + 1;
                count = count + 1;

            }

        }


        myFunc(x, y, z, n);
    }






        /// end of server work

   

    var N = [1, 2, 3, 4, 5, 6, 7, 8];  //floors
    var cam = m_scenes.get_object_by_name("Camera");  //getting a camera
    var ball = m_scenes.get_object_by_name("Sphere"); //getting a ball
   
    function myFunc(x,y,z,n) {
        var i = 0;
        for (i; ; i++) {
            if (N[i] == n) {

                //исчезновение крышии
                var Crisha = m_scenes.get_object_by_name("Crisha");
                //var eight = m_scenes.get_object_by_name("eight");
                var seven = m_scenes.get_object_by_name("seven");
                var six = m_scenes.get_object_by_name("six");
                var five = m_scenes.get_object_by_name("five");
                var four = m_scenes.get_object_by_name("four");
                var three = m_scenes.get_object_by_name("three");
                var two = m_scenes.get_object_by_name("two");

                m_scenes.show_object(Crisha);
               // m_scenes.show_object(eight);
                m_scenes.show_object(seven);
                m_scenes.show_object(six);
                m_scenes.show_object(five);
                m_scenes.show_object(four);
                m_scenes.show_object(three);
                m_scenes.show_object(two);



                switch (i) {
                    case 0:

                        m_scenes.hide_object(Crisha);
                        break;
                    case 1:

                        m_scenes.hide_object(Crisha);
                       // m_scenes.hide_object(eight);
                        break;
                    case 2:


                        m_scenes.hide_object(Crisha);
                       // m_scenes.hide_object(eight);
                        m_scenes.hide_object(seven);


                        break;
                    case 3:


                        m_scenes.hide_object(Crisha);
                        //m_scenes.hide_object(eight);
                        m_scenes.hide_object(seven);
                        m_scenes.hide_object(six);


                        break;
                    case 4:


                        m_scenes.hide_object(Crisha);
                       // m_scenes.hide_object(eight);
                        m_scenes.hide_object(seven);
                        m_scenes.hide_object(six);
                        m_scenes.hide_object(five);


                        break;
                    case 5:


                        m_scenes.hide_object(Crisha);
                        //m_scenes.hide_object(eight);
                        m_scenes.hide_object(seven);
                        m_scenes.hide_object(six);
                        m_scenes.hide_object(five);
                        m_scenes.hide_object(four);

                        break;
                    case 6:

                        m_scenes.hide_object(Crisha);
                        //m_scenes.hide_object(eight);
                        m_scenes.hide_object(seven);
                        m_scenes.hide_object(six);
                        m_scenes.hide_object(five);
                        m_scenes.hide_object(four);
                        m_scenes.hide_object(three);


                        break;
                    case 7:
                        m_scenes.hide_object(Crisha);
                       // m_scenes.hide_object(eight);
                        m_scenes.hide_object(seven);
                        m_scenes.hide_object(six);
                        m_scenes.hide_object(five);
                        m_scenes.hide_object(four);
                        m_scenes.hide_object(three);
                        m_scenes.hide_object(two);


                    default:
                        break;
                }
                //поворот камеры
                var _vec2_tmp = new Float32Array(2);
                var angles = m_cam.get_camera_angles(cam, _vec2_tmp);
                var phi = -angles[0];
                var theta = 3 * Math.PI / 2 - angles[1];
                m_cam.target_rotate(cam, phi, theta);
                //перенос камеры
                var _vec3_tmp = new Float32Array(3);
                var pos = m_cam.get_translation(cam, _vec3_tmp);
                var new_pos = m_vec3.set(-82, -57, 200, pos);
                m_cam.target_set_pivot_translation(cam, new_pos);


                //перенос маяка
                m_trans.set_translation(ball, x, y, z);
                break;
            }




        }
    }

}




});

// import the app module and start the app by calling the init method
b4w.require("my_project_main").init();
