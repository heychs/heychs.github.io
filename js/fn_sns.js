Kakao.init('31e3aac5b9cf04309f0e49dd566e62b6');

//function sendLink(rmsg) {
//      Kakao.Link.sendTalkLink({
//        label: "[초대장] "+rmsg
//      });
//}
//


function sendLink(rmsg, rimg, isrc) {
	  Kakao.Link.sendScrap({
			requestUrl: isrc
		  });


}

function executeKakaoStoryLink(rtitle,rurl,rimg)
{
    kakao.link("story").send({
        post : rurl,
        appid : "www.cardq.co.kr",
        appver : "1.0",
        appname : "환석♥진실 모바일초대장",
        urlinfo : JSON.stringify({title:rtitle, desc:rurl, imageurl:[rimg], type:"article"})
    });
}

function goLinkSNS(sns,s_url){
	if (sns == "tw"){
		location.href = "http://twitter.com/home/?status="+encodeURIComponent(s_url);
	}
	else if (sns == "fb"){
		location.href = "http://www.facebook.com/sharer.php?u=" + encodeURIComponent(s_url) + "&t=" + encodeURIComponent("환석♥진실 모바일초대장입니다.");
	}
}

function shareStory(rurl){
	Kakao.Story.share({
	  url: rurl
	});

}
