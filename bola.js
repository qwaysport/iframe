 var player = new Clappr.Player(
        {
          source: 'https://d25tgymtnqzu8s.cloudfront.net/smil:tv1/manifest.mpd',
          plugins: [DashShakaPlayback],
          shakaConfiguration: {
            preferredAudioLanguage: 'pt-BR',
            streaming: {
              rebufferingGoal: 15
            }
          },
          shakaOnBeforeLoad: function(shaka_player) {
            // shaka_player.getNetworkingEngine().registerRequestFilter() ...
          },
          parentId: '#player'
        });
       function resizePlayer(){
      var aspectRatio = 16/9;
      var newWidth = document.getElementById('player').parentElement.offsetWidth;
      var newHeight = Math.round(newWidth / aspectRatio);
      player.resize({width: newWidth, height: newHeight});
    }
    
    resizePlayer();
    window.onresize = resizePlayer;
