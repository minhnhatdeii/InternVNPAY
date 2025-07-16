// Ở đây sẽ lấy thông tin của Video chính và các video liên quan 
export const getWatchPageData = async (videoId) => {
const url = `https://youtube-media-downloader.p.rapidapi.com/v2/video/details?videoId=${videoId}&urlAccess=normal&videos=auto&audios=auto`;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '89644839e0mshcae86286ffb46fcp1e2f10jsn5dacb407fc3b',
		'x-rapidapi-host': 'youtube-media-downloader.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
    const viewCount = Number(result.viewCount); // đảm bảo là số
            let formattedView = viewCount;
            if (viewCount >= 1000 && viewCount < 1000000) {
                formattedView = `${(viewCount / 1000).toFixed(1)}K views`;
            } else if (viewCount >= 1000000) {
                formattedView = `${(viewCount / 1000000).toFixed(1)}M views`;
            } else {
                formattedView = `${(viewCount)} views`;
            }
        const likeCount = Number(result.likeCount); // đảm bảo là số
            let formattedLike = likeCount;
            if (likeCount >= 1000 && likeCount < 1000000) {
                formattedLike = `${(likeCount / 1000).toFixed(1)}K`;
            } else if (likeCount >= 1000000) {
                formattedLike = `${(likeCount / 1000000).toFixed(1)}M`;
            } else {
                formattedLike = `${(likeCount)}`;
            }
    const mainVideoWatchPage = {
        id: result.id,
        title: result.title,
        description: result.description,
        idChannel: result.channel.id,
        nameChannel: result.channel.name,
        numOfSubChannel: result.channel.subscriberCountText,
        avatarChannel: result.channel.avatar?.[0]?.url || "",
        publishedTimeVideo: result.publishedTimeText,
        numOfComment: result.commentCountText,
        imageVideo: result.thumbnail?.[4]?.url || "",
        mp4Video: result.videos?.items?.[0]?.url || "",
        duration: result.lengthSeconds,
        views: formattedView,
        likes: formattedLike,
    }
    const suggestVideoWatchPage = result.related.items
    .filter((item) => item.type === "video")
    .map(item => ({
        id: item.id,
        title: item.title,
        channel: item.channel.name,
        idChannel: item.channel.id,
        duration: item.lengthText,
        views: item.viewCountText,
        publishedTimeVideo: item.publishedTimeText,
        thumbnailVideo: item.thumbnails?.[0]?.url,
    }))
    
	console.log(result);
    return {mainVideoWatchPage, suggestVideoWatchPage};
} catch (error) {
	console.error(error);
}
}