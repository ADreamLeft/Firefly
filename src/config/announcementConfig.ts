import type { AnnouncementConfig } from "../types/config";

export const announcementConfig: AnnouncementConfig = {
	// 公告标题
	title: "公告",

	// 公告内容
	content: "这里先放占位记录，之后会慢慢换成真正的照片和故事。",

	// 是否允许用户关闭公告
	closable: true,

	link: {
		// 启用链接
		enable: true,
		// 链接文本
		text: "看看相册",
		// 链接 URL
		url: "/gallery/",
		// 内部链接
		external: false,
	},
};
