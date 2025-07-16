export const getCommentVideoData = async (videoId) => {
    const url = `https://youtube-media-downloader.p.rapidapi.com/v2/video/comments?videoId=${videoId}&sortBy=top`;
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
	console.log(result);
    const listCommentVideo = result.items
    .filter((item) => item.type === "comment")
    .map((item) => ({
        id: item.id,
        text: item.contentText,
        isPinned: item.isPinned,
        isHearted: item.isHearted,
        idChannel: item.channel.id,
        imageChannel: item.channel.avatar?.[0]?.url,
        publishedTime: item.publishedTimeText,
        like: item.voteCountText,
        numReplies: item?.replies?.count || "",
        repliesNextToken: item?.replies?.nextToken || "",

    }));
    return listCommentVideo;

} catch (error) {
	console.error(error);
}
}