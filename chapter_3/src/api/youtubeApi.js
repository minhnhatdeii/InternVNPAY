
export const  getYoutubeHomeData = async() => {
    const url = 'https://yt-api.p.rapidapi.com/home';
    const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': 'c18da195b0mshcdebcf46df53015p1a1b64jsn33955d1b96fc',
        'x-rapidapi-host': 'yt-api.p.rapidapi.com',
    },
    };

    
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        const allItems = result.data || [];

        const videoItems = allItems.filter((item) => item.type === "video");

        
        
        
        const simpleList = videoItems.map(video => {
            const viewCount = Number(video.viewCount); // đảm bảo là số
            let formattedView = viewCount;
            if (viewCount >= 1000 && viewCount < 1000000) {
                formattedView = `${(viewCount / 1000).toFixed(1)}K views`;
            } else if (viewCount >= 1000000) {
                formattedView = `${(viewCount / 1000000).toFixed(1)}M views`;
            } else {
                formattedView = `${(viewCount)} views`;
            }

            return {
                id: video.videoId,
                title: video.title,
                channel: video.channelTitle,
                thumbnail: video.thumbnail?.[1]?.url || "",
                view: formattedView,
                duration: video.lengthText,
                pulishTimeText: video.publishedTimeText,
                channelThumbnail: video.channelThumbnail?.[0]?.url || "",
            };
        });


        console.log("Danh sách video:", videoItems);
        return simpleList;
    } catch (error) {
        console.error("Lỗi khi gọi API:", error);
        return [];
    }
};
export default getYoutubeHomeData;