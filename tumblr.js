var limit = 12;
                var url = 'http://nownoahhasa.tumblr.com';
               
                $.getJSON(url+'/api/read/json?num='+limit+'&callback=?', function(data) {
                        $.each(data.posts, function(i,posts){
                                if(posts.type == 'video'){
                                        displayVideoPost(posts);
                                } else if(posts.type == 'link'){
                                        displayLinkPost(posts);
                                } else if(posts.type == 'regular'){
                                        displayTextPost(posts);
                                } else if (posts.type == 'photo'){
                                		displayPhotoPost(posts);
                                }

                        });
                });
               
                function displayTextPost(posts){
                        if(posts == null) return;
                        $('#tumblrfeed').append('<div class="posts"><h1>'+posts['regular-title']+"</h1>");
                        $('#tumblrfeed').append(posts['regular-body']+'</div>');
                }
               
                function displayLinkPost(posts){
                        if(posts == null) return;
                        $('#tumblrfeed').append('<div class="posts"><h1>'+posts['link-text']+"</h1>");
                        $('#tumblrfeed').append(posts['link-url']);
                        $('#tumblrfeed').append(posts['link-description']+'</div>');
                }
               
                function displayVideoPost(posts){
                        if(posts == null) return;
                        $('#tumblrfeed').append('<div class="posts"><h1>'+posts['video-caption']+"</h1>");
                        $('#tumblrfeed').append(posts['video-player-250']+'</div>');
                }
                function displayPhotoPost(posts){
                		if(posts == null) return;
                		$('#tumblrfeed').append('<div class="posts"><h1>'+posts['photo-caption']+"</h1>");
                		$('#tumblrfeed').append(posts['photo']);
                		$('#tumblrfeed').append(posts['photo-caption']+'</div>');
                }
               