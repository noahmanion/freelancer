function tumblr(resp) {
  var posts = resp.posts;
  $('.blog .loading').replaceWith('<ul class="blogcontent"/>');
  $ul = $('.blog ul');
  $li = $('.blog ul li');
  for (var i=0; i<posts.length; i++) {
    var len = 100;
    var p = posts[i];
        var date = p['date'];
        var title = p['regular-title'] || p['link-text'] || null;
        var body = p['regular-body'] || p['link-text'] || null;
        var img = p['regular-body'];
    if (body.length > len) {
      body = body.substring(35868, 36070);
      body = body.replace(/\w+$/, '');
      body += '...';
      $ul.append('<li><h1>'+date+'</h1><a href="'+p['url']+'" target="_blank"> <h2>'+title+'</h2></a><a href="'+p['url']+'" target="_blank"> <p>'+body+'</p> </a></li>');
    if (img)
      $ul.append('<a href="'+p['url']+'" target="_blank"> <h3>'+img+'</h3> </a></li>');
    }
  }
}
