/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }

};

window.onload=getExif;

var fs = require('fs');
var dir = './img';

fs.readdir(dir, (err, files) => {
  console.log(files.length);
});

function getExif() {
    var img1 = document.getElementById("img1");
    EXIF.getData(img1, function() {
        var make = EXIF.getTag(this, "Make");
        var model = EXIF.getTag(this, "Model");
        var lat = EXIF.getTag(this, "GPSLatitude");
        var long = EXIF.getTag(this, "GPSLongitude");
        var allMetaDataSpan = document.getElementById("allMetaDataSpan");
        allMetaDataSpan.innerHTML = `-${lat[0]}°${lat[1]}'${lat[2]}",-${long[0]}°${long[1]}'${long[2]}"`;
    });

    var img2 = document.getElementById("img2");
    EXIF.getData(img2, function() {
        var lat2 = EXIF.getTag(this, "GPSLatitude");
        var long2 = EXIF.getTag(this, "GPSLongitude");
        var allMetaDataSpan2 = document.getElementById("allMetaDataSpan2");
        allMetaDataSpan2.innerHTML = `-${lat2[0]}°${lat2[1]}'${lat2[2]}",-${long2[0]}°${long2[1]}'${long2[2]}"`;
        files.innerHTML = files.length;
    });
}

app.initialize();
