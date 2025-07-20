
export const  getYoutubeHomeData = async() => {
    
    const url = 'https://yt-api.p.rapidapi.com/home';
    const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': 'ad8baa10b4mshd96b0fb517abff1p1a66e2jsnb1942009d697',
        'x-rapidapi-host': 'yt-api.p.rapidapi.com',
    },
    };

    
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log("def")
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
                thumbnail: video.thumbnail?.[0]?.url || "",
                view: formattedView,
                duration: video.lengthText,
                pulishTimeText: video.publishedTimeText,
                channelThumbnail: video.channelThumbnail?.[0]?.url || "",
            };
        });

        return simpleList;
    } catch (error) {
        console.error("Lỗi khi gọi API:", error);
        return [];
    }
};
export default getYoutubeHomeData;