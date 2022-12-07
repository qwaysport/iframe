(function(){
                var url = "https://d25tgymtnqzu8s.cloudfront.net/smil:tv2/manifest.mpd";
                var player = dashjs.MediaPlayer().create();
                player.initialize(document.querySelector("#videoPlayer"), url, true);
            })();
