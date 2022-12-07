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
          parentId: '#player1'
        });
       function resizePlayer(){
      var aspectRatio = 16/9;
      var newWidth = document.getElementById('player1').parentElement.offsetWidth;
      var newHeight = Math.round(newWidth / aspectRatio);
      player.resize({width: newWidth, height: newHeight});
    }
    
    resizePlayer();
    window.onresize = resizePlayer;
	
	 var player = new Clappr.Player(
        {
          source: 'https://d25tgymtnqzu8s.cloudfront.net/smil:tv2/manifest.mpd',
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
          parentId: '#player2'
        });
       function resizePlayer(){
      var aspectRatio = 16/9;
      var newWidth = document.getElementById('player2').parentElement.offsetWidth;
      var newHeight = Math.round(newWidth / aspectRatio);
      player.resize({width: newWidth, height: newHeight});
    }
    
    resizePlayer();
    window.onresize = resizePlayer;
	 var player = new Clappr.Player(
        {
          source: 'https://d25tgymtnqzu8s.cloudfront.net/smil:tv6/manifest.mpd',
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
          parentId: '#player6'
        });
       function resizePlayer(){
      var aspectRatio = 16/9;
      var newWidth = document.getElementById('player6').parentElement.offsetWidth;
      var newHeight = Math.round(newWidth / aspectRatio);
      player.resize({width: newWidth, height: newHeight});
    }
    
    resizePlayer();
    window.onresize = resizePlayer;
	 var player = new Clappr.Player(
        {
          source: 'https://d25tgymtnqzu8s.cloudfront.net/smil:okey/manifest.mpd',
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
          parentId: '#playero'
        });
       function resizePlayer(){
      var aspectRatio = 16/9;
      var newWidth = document.getElementById('playero').parentElement.offsetWidth;
      var newHeight = Math.round(newWidth / aspectRatio);
      player.resize({width: newWidth, height: newHeight});
    }
    
    resizePlayer();
    window.onresize = resizePlayer;
	 var player = new Clappr.Player(
        {
          source: 'https://d25tgymtnqzu8s.cloudfront.net/smil:sukan/manifest.mpd',
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
          parentId: '#players'
        });
       function resizePlayer(){
      var aspectRatio = 16/9;
      var newWidth = document.getElementById('players').parentElement.offsetWidth;
      var newHeight = Math.round(newWidth / aspectRatio);
      player.resize({width: newWidth, height: newHeight});
    }
    
    resizePlayer();
    window.onresize = resizePlayer;
	 var player = new Clappr.Player(
        {
          source: 'https://d25tgymtnqzu8s.cloudfront.net/smil:berita/manifest.mpd',
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
          parentId: '#playerb'
        });
       function resizePlayer(){
      var aspectRatio = 16/9;
      var newWidth = document.getElementById('playerb').parentElement.offsetWidth;
      var newHeight = Math.round(newWidth / aspectRatio);
      player.resize({width: newWidth, height: newHeight});
    }
    
    resizePlayer();
    window.onresize = resizePlayer;
