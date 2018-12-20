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

function sendLink_new(rmsg, rimg, isrc) {
      //Kakao.init('a2015c29e24aea62bc2d87d6a476dedd');
		// // 카카오링크 버튼을 생성합니다. 처음 한번만 호출하면 됩니다.
		Kakao.Link.sendTalkLink({
        label: "[초대장] "+rmsg,
		image : {
				src: rimg,	//constraint: 500KB이하의 이미지만 표시됨 (사진용량 초과시 카카오톡 공유 뜨지않음);
				width: '400',
				height: '300'
		},
		 webButton: {
              text: '모바일초대장 보러가기',
              url: isrc
        }
      });

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
        appname : "카드큐",
        urlinfo : JSON.stringify({title:rtitle, desc:rurl, imageurl:[rimg], type:"article"})
    });
}

function goLinkSNS(sns,s_url){
	if (sns == "tw"){
		location.href = "http://twitter.com/home/?status="+encodeURIComponent(s_url);
	}
	else if (sns == "fb"){
		location.href = "http://www.facebook.com/sharer.php?u=" + encodeURIComponent(s_url) + "&t=" + encodeURIComponent("카드큐 모바일초대장입니다.");
	}
}

function shareStory(rurl){
	Kakao.Story.share({
	  url: rurl
	});

}
